import { ApiProperty } from '@nestjs/swagger';

export class Course {
  @ApiProperty({ example: '1', description: 'The unique identifier of the course' })
  id: string;

  @ApiProperty({ example: 'Intro to HTML', description: 'The title of the course' })
  title: string;

  @ApiProperty({ example: 'Beginner', description: 'The level of the course' })
  level: string;

  @ApiProperty({ example: '4 weeks', description: 'The duration of the course' })
  duration: string;
}
