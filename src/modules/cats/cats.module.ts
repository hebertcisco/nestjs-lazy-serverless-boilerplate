import { Module } from '@nestjs/common';

const { CatsController } = await import('./cats.controller.js');
const { CatsService } = await import('./services/cats.service.js');

@Module({
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule {}
