import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class EventsService {
  private events: { [key: number]: string };

  constructor() {
    try {
      const filePath = path.join('src/events.json');
      const fileContent = fs.readFileSync(filePath, 'utf8');
      this.events = JSON.parse(fileContent);
    } catch (error) {
      console.error('Error reading events.json file:', error);
      this.events = {};
    }
  }

  getEventById(id: number): string {
    return this.events[id] || 'Message not found';
  }

  rollDice(): string {
    const diceResult = Math.floor(Math.random() * 6) + 1; // Simula um dado de 6 lados
    return this.getEventById(diceResult);
  }
}
