import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDto {
  @ApiProperty({ example: 'Intro to HTML', description: 'The title of the course' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Beginner', description: 'The level of the course' })
  @IsString()
  @IsNotEmpty()
  level: string;

  @ApiProperty({ example: '4 weeks', description: 'The duration of the course' })
  @IsString()
  @IsNotEmpty()
  duration: string;
}
