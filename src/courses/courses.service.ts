import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CoursesService {
  private filePath = path.join(process.cwd(), 'src', 'data', 'courses.json');
  private courses: Course[] = [];
  private idCounter = 1;

  constructor() {
    this.loadCourses();
  }

  private loadCourses() {
    try {
      if (fs.existsSync(this.filePath)) {
        const fileData = fs.readFileSync(this.filePath, 'utf-8');
        this.courses = JSON.parse(fileData);

        if (this.courses.length > 0) {
          // Identify the highest ID to set the counter correctly
          const highestId = Math.max(...this.courses.map(c => parseInt(c.id, 10)));
          this.idCounter = highestId + 1;
        }
      }
    } catch (error) {
      console.error('Failed to load courses from JSON', error);
    }
  }

  private saveCourses() {
    try {
      const dir = path.dirname(this.filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(this.filePath, JSON.stringify(this.courses, null, 2), 'utf-8');
    } catch (error) {
      console.error('Failed to save courses to JSON', error);
    }
  }

  create(createCourseDto: CreateCourseDto): Course {
    const newCourse: Course = {
      id: this.idCounter.toString(),
      ...createCourseDto,
    };
    this.courses.push(newCourse);
    this.idCounter++;
    this.saveCourses();
    return newCourse;
  }

  findAll(): Course[] {
    return this.courses;
  }

  findOne(id: string): Course {
    const course = this.courses.find((c) => c.id === id);
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return course;
  }

  update(id: string, updateCourseDto: UpdateCourseDto): Course {
    const course = this.findOne(id);
    const index = this.courses.indexOf(course);
    this.courses[index] = { ...course, ...updateCourseDto };
    this.saveCourses();
    return this.courses[index];
  }

  remove(id: string): Course {
    const course = this.findOne(id);
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
    this.saveCourses();
    return course;
  }
}
