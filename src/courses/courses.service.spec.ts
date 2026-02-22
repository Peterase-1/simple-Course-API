import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from './courses.service';
import { NotFoundException } from '@nestjs/common';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesService],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a course', () => {
    const newCourse = service.create({
      title: 'Intro to NestJS',
      level: 'Advanced',
      duration: '6 weeks',
    });
    expect(newCourse).toHaveProperty('id');
    expect(newCourse.title).toBe('Intro to NestJS');
    expect(service.findAll().length).toBe(8);
  });

  it('should throw NotFoundException for invalid ID', () => {
    expect(() => service.findOne('999')).toThrow(NotFoundException);
  });
});
