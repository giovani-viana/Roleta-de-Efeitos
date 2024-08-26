import { Module } from '@nestjs/common';
import { DiceModule } from './modules/dice.module';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { EventsModule } from './modules/events.module';

@Module({
  imports: [DiceModule, EventsModule],
  controllers: [],
  providers: [],
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
