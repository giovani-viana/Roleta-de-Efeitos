import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Random, MersenneTwister19937 } from 'random-js';

@Injectable()
export class EventsService {
  private events: { [key: number]: string };
  private random: Random;

  constructor() {
    try {
      const filePath = path.join('src/events.json');
      const fileContent = fs.readFileSync(filePath, 'utf8');
      this.events = JSON.parse(fileContent);
    } catch (error) {
      console.error('Error reading events.json file:', error);
      this.events = {};
    }
    this.random = new Random(MersenneTwister19937.autoSeed());
  }

  getEventById(id: number): string {
    return this.events[id] || 'Message not found';
  }

  rollDice(): string {
    const diceResult = this.random.integer(1, 50);
    return this.getEventById(diceResult);
  }
}
