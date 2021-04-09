import { Container } from '../container/container';
import { Schedule } from './schedule';

export interface ScheduleContainer {
  id?: number;
  scheduleId?: number;
  containerId?: number;
  schedule?: Schedule;
  container?: Container;
}
