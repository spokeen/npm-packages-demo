import {
  Controller,
  Get,
  Req,
  HttpCode,
  Post,
  Res,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller('test') // 访问这个 Controller 就得是 /test/xxxx
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getName(@Req() request: Request): any {
    return 'dd';
  }

  @Post()
  setName(@Req() request: Request): string {
    return request.body;
  }
}
