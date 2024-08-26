// src/dice/dice.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiceService {
  rollDice(sides: number = 50): number {
    return Math.floor(Math.random() * sides) + 1;
  }
}