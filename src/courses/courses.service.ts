import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [];
  private idCounter = 1;

  create(createCourseDto: CreateCourseDto): Course {
    const newCourse: Course = {
      id: this.idCounter.toString(),
      ...createCourseDto,
    };
    this.courses.push(newCourse);
    this.idCounter++;
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
    return this.courses[index];
  }

  remove(id: string): Course {
    const course = this.findOne(id);
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
    return course;
  }
}
