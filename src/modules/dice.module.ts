import { Module } from '@nestjs/common';
import { DiceController } from '../controllers/dice.controller';
import { DiceService } from '../services/dice.service';
import { EventsModule } from './events.module';

@Module({
  imports: [EventsModule],
  controllers: [DiceController],
  providers: [DiceService],
})
export class DiceModule {}
