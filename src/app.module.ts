import { Module } from '@nestjs/common';
import { DiceModule } from './modules/dice.module';
import { EventsModule } from './modules/events.module';
import { AppController } from './app.controller';

@Module({
  imports: [DiceModule, EventsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
