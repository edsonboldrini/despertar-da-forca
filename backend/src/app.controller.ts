import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/sum/:a/:b")
  sum(@Param() params): number {
    return this.appService.sum(parseInt(params.a), parseInt(params.b));
  }

  @Get("/sum2/:a/:b")
  sum2(@Param('a') a, @Param('b') b): number {
    return this.appService.sum(parseInt(a), parseInt(b));
  }
}
