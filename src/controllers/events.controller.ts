import { Controller, Get } from '@nestjs/common';
import { EventsService } from '../services/events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get('roll')
  rollDice(): string {
    return this.eventsService.rollDice();
  }
}
