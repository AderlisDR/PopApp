import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services/guards/auth.guard';
import { RoleGuard } from '../../services/guards/role.guard';
import { DocumentGridComponent } from './document-grid/document-grid.component';
import { DocumentsUploadComponent } from './documents-upload/documents-upload.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentGridComponent,
    canActivate: [AuthGuard, RoleGuard]
  },
  {
    path: 'upload',
    component: DocumentsUploadComponent,
    canActivate: [AuthGuard, RoleGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentRoutingModule {
}
