import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiceModule } from './dice/dice.module';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

@Module({
  imports: [DiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static async bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    await app.listen(3000);
  }
}

AppModule.bootstrap();