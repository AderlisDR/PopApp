import { FreigthSchedule } from './freigth-schedule';

export interface ContainerSchedule {
  containerType?: string;
  companyCode?: string;
  process?: string;
  containerCheck?: boolean;
  freigthSchedule?: FreigthSchedule[];
}
