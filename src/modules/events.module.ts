import { Module } from '@nestjs/common';
import { EventsService } from '../services/events.service';
import { EventsController } from '../controllers/events.controller';

@Module({
  imports: [],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
