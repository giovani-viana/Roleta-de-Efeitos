import { Controller, Get, Query, Render } from '@nestjs/common';
import { DiceService } from '../services/dice.service';
import { EventsService } from '../services/events.service';

@Controller('dice')
export class DiceController {
  constructor(
    private readonly diceService: DiceService,
    private readonly EventService: EventsService,
  ) {}

  @Get('roll')
  @Render('index')
  rollDice(@Query('sides') sides: number = 50): {
    result: number;
    event: string;
  } {
    const result = this.diceService.rollDice(sides);
    const event = this.EventService.getEventById(result);
    return { result, event };
  }
}
