import { Injectable } from '@nestjs/common';
import { Random, MersenneTwister19937 } from 'random-js';

@Injectable()
export class DiceService {
  private random: Random;

  constructor() {
    this.random = new Random(MersenneTwister19937.autoSeed());
  }

  rollDice(sides: number = 50): number {
    return this.random.integer(1, sides);
  }
}
