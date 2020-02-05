import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/sum/:a/:b")
  sum(@Param() params): number {
    return parseInt(params.a) + parseInt(params.b);
  }
}
