import { Module } from '@nestjs/common';
import { configService } from 'nest-shared';

const { StatusService } = await import('./status.service.js');
const { StatusServiceMock } = await import(
    './tests/mocks/status.service.mock.js'
);

@Module({
    providers: [
        {
            provide: StatusService,
            useClass: configService.isProduction()
                ? StatusService
                : StatusServiceMock,
        },
    ],
    exports: [
        {
            provide: StatusService,
            useClass: configService.isProduction()
                ? StatusService
                : StatusServiceMock,
        },
    ],
})
export class StatusModule {}
