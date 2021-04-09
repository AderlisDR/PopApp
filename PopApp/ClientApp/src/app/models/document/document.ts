export interface Document {
  documentId?: number;
  documentTitle?: string;
  documentDescription?: string;
  documentImage?: string;
  createAt?: Date;
  isActive?: boolean;
  vesselId?: number;
}
