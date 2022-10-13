import { configService } from 'nest-shared';

export const PORT: number = Number(configService.getValue('PORT')) || 3000;
