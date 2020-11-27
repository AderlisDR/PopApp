import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html',
  styleUrls: ['./user-grid.component.scss']
})
export class UserGridComponent implements OnInit {

  userData: User[];
  groupPanelTexts = {
    groupByThisColumn: 'Agrupar por esta columna',
    groupContinuedMessage: 'Continuación desde la página anterior',
    groupContinuesMessage: 'Continúa en la siguiente página'
  };

  constructor(private userServices: UserService) { }

  ngOnInit() {
    this.onGetUsers();
  }

  onExport(){}

  onGetUsers(){
    this.userServices.GetUsers().then((resp: User[])=>{
      this.userData = [...resp];
    }).catch(err =>{});
  }

}
