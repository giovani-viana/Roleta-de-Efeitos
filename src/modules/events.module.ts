import { Module } from '@nestjs/common';
import { EventsService } from '../services/events.service';

@Module({
  providers: [EventsService],
  exports: [EventsService], // Exporta o EventsService para ser usado em outros módulos
})
export class EventsModule {}
