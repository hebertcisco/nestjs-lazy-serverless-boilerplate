import { Injectable } from '@nestjs/common';
import { StatusEnum } from './status.enum.js';

@Injectable()
export class StatusService {
    private status = StatusEnum.none;

    public set Status(status) {
        this.status = status;
    }
    public get Status() {
        return this.status;
    }

    public show() {
        return Promise.resolve({
            status: this.Status,
            date: new Date(),
            environment: process.env.NODE_ENV,
            aws: {
                region: process.env.AWS_REGION || 'local',
                function_version:
                    process.env.AWS_LAMBDA_FUNCTION_VERSION || 'local',
            },
        });
    }
}
