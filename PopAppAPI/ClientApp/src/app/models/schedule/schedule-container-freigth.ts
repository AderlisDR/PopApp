import { FreigthEvaluationStatus } from '../../enums/freigth-evaluation-status';
import { Freigth } from '../freigth/freigth';
import { ScheduleContainer } from './schedule-container';

export interface ScheduleContainerFreigth {
  id?: number;
  scheduleContainerId?: number;
  freigthId?: number;
  scheduleContainer?: ScheduleContainer;
  freigth?: Freigth;
  evaluationStatus?: FreigthEvaluationStatus;
  evaluationMessage?: string;
}
