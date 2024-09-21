import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { DiceService } from '../services/dice.service';
import { EventsService } from '../services/events.service';
import { IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

class RollDiceDto {
  @IsInt()
  @Min(2)
  @Max(100)
  @Type(() => Number)
  sides: number = 50;
}

@Controller('dice')
export class DiceController {
  constructor(
    private readonly diceService: DiceService,
    private readonly eventsService: EventsService,
  ) {}

  @Get('roll')
  rollDice(@Query() query: RollDiceDto): {
    result: number;
    event: string;
  } {
    if (isNaN(query.sides)) {
      throw new BadRequestException(
        'O número de lados deve ser um número válido.',
      );
    }
    const result = this.diceService.rollDice(query.sides);
    const event = this.eventsService.getEventById(result);
    return { result, event };
  }
}
