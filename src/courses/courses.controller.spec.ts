import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

describe('CoursesController', () => {
  let controller: CoursesController;
  let service: CoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesController],
      providers: [CoursesService],
    }).compile();

    controller = module.get<CoursesController>(CoursesController);
    service = module.get<CoursesService>(CoursesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create() should call service.create', () => {
    const dto = { title: 'T', level: 'L', duration: 'D' };
    const createSpy = jest.spyOn(service, 'create');
    controller.create(dto);
    expect(createSpy).toHaveBeenCalledWith(dto);
  });
});
