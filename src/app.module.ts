import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinalFantasyService } from './final-fantasy/final-fantasy.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FinalFantasyService],
})
export class AppModule {}
