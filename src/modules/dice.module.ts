import { Module } from '@nestjs/common';
import { DiceController } from '../controllers/dice.controller';
import { DiceService } from '../services/dice.service';
import { EventsService } from '../services/events.service';

@Module({
  controllers: [DiceController],
  providers: [DiceService, EventsService],
})
export class DiceModule {}
