import { ContainerSchedule } from './container-schedule';

export interface Schedule {
  scheduleId?: number;
  scheduleDate?: Date;
  vesselId?: number;
  createdAt?: Date;
  isActive?: boolean;
  containerSchedule?: ContainerSchedule[];
}
