import { Controller, Get, Post, Body, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { Course } from './entities/course.entity';

@ApiTags('courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Post()
  @ApiOperation({ summary: 'Create a new course' })
  @ApiResponse({ status: 201, description: 'The course has been successfully created.', type: Course })
  @ApiResponse({ status: 400, description: 'Bad Request. Validation failed.' })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCourseDto: CreateCourseDto): Course {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all courses' })
  @ApiResponse({ status: 200, description: 'Return all courses.', type: [Course] })
  findAll(): Course[] {
    return this.coursesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a course by ID' })
  @ApiParam({ name: 'id', description: 'Course ID' })
  @ApiResponse({ status: 200, description: 'Return the matching course.', type: Course })
  @ApiResponse({ status: 404, description: 'Course not found.' })
  findOne(@Param('id') id: string): Course {
    return this.coursesService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a course by ID' })
  @ApiParam({ name: 'id', description: 'Course ID' })
  @ApiResponse({ status: 200, description: 'The course has been successfully updated.', type: Course })
  @ApiResponse({ status: 404, description: 'Course not found.' })
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto): Course {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a course by ID' })
  @ApiParam({ name: 'id', description: 'Course ID' })
  @ApiResponse({ status: 200, description: 'The course has been successfully deleted.', type: Course })
  @ApiResponse({ status: 404, description: 'Course not found.' })
  remove(@Param('id') id: string): Course {
    return this.coursesService.remove(id);
  }
}
