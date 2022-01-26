import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './modules/author/author.module';
import { BookModule } from './modules/book/book.module';
import { StatusModule } from './modules/status/status.module';

@Module({
  imports: [
    AuthorModule,
    BookModule,
    StatusModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
