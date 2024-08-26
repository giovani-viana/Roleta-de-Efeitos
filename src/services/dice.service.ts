import { Injectable } from '@nestjs/common';

@Injectable()
export class DiceService {
  rollDice(sides: number): number {
    return Math.floor(Math.random() * sides) + 1;
  }
}
