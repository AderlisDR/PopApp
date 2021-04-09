import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserRole } from '../../../enums/user-role.enum';
import { Vessel } from '../../../models/vessel/vessel';
import { AuthService } from '../../../services/auth.service';
import { VesselService } from '../../../services/vessel.service';
import { VesselFormComponent } from '../vessel-form/vessel-form.component';

@Component({
  selector: 'app-vessel-grid',
  templateUrl: './vessel-grid.component.html',
  styleUrls: ['./vessel-grid.component.scss']
})
export class VesselGridComponent implements OnInit {
  isAdmin = false;
  vesselData: Vessel[];
  groupPanelTexts = {
    groupByThisColumn: 'Agrupar por esta columna',
    groupContinuedMessage: 'Continuación desde la página anterior',
    groupContinuesMessage: 'Continúa en la siguiente página'
  };

  constructor(private vesselService: VesselService,
    private dialog: MatDialog,
    private authService: AuthService) { }

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    this.isAdmin = currentUser.userRole === UserRole.Admin || currentUser.userRole === UserRole.Master;
    this.onGetVessels();
  }

  onExport(){}

  onGetVessels(){
    this.vesselService.GetVessels().then((resp: Vessel[])=>{
      this.vesselData = [...resp];
    }).catch(err => {});
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VesselFormComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.onGetVessels();
      }
    });
  }
}
