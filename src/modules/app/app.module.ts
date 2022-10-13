import { Module } from '@nestjs/common';

const { StatusModule } = await import('../status/status.module.js');
const { AppController } = await import('./app.controller.js');
const { CatsModule } = await import('../cats/cats.module.js');

@Module({
    imports: [CatsModule, StatusModule],
    controllers: [AppController],
})
export class AppModule {}
