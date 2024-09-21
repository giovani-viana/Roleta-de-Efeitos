import { Injectable, Logger } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class EventsService {
  private events: { [key: number]: string };
  private readonly logger = new Logger(EventsService.name);

  constructor() {
    this.loadEvents();
  }

  private loadEvents(): void {
    try {
      const filePath = path.join('src', 'events.json');

      if (!fs.existsSync(filePath)) {
        throw new Error('O arquivo events.json não foi encontrado.');
      }

      const fileContent = fs.readFileSync(filePath, 'utf8');

      if (!fileContent) {
        throw new Error('O arquivo events.json está vazio.');
      }

      this.events = JSON.parse(fileContent);

      if (Object.keys(this.events).length === 0) {
        throw new Error('Nenhum evento foi encontrado no arquivo JSON.');
      }

      this.logger.log('Eventos carregados com sucesso.');
    } catch (error) {
      this.logger.error(`Erro ao carregar eventos: ${error.message}`);
      this.events = {};
    }
  }

  getEventById(id: number): string {
    if (!this.events[id]) {
      this.logger.warn(`Evento não encontrado para o ID: ${id}`);
      return 'Evento não encontrado';
    }
    return this.events[id];
  }
}
