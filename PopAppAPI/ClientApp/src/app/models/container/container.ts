import { ContainerType } from "../../enums/container-type.enum";

export interface Container {
  containerId?: number;
  containerType?: ContainerType;
  containerPayload?: number;
  containerCapacity?: number;
  containerLenth?: number;
  containerWidth?: number;
  containerHeigth?: number;
  isActive?: boolean;
}
