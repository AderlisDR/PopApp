import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Freigth } from 'src/app/models/freigth/freigth';
import { FreigthService } from 'src/app/services/freigth/freigth.service';
declare let Swal: any;

@Component({
  selector: 'app-freigth-form',
  templateUrl: './freigth-form.component.html',
  styleUrls: ['./freigth-form.component.scss']
})
export class FreigthFormComponent implements OnInit {

  freigthForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private freigthService: FreigthService) { }

  ngOnInit() {
    this.formBuild();
  }

  private formBuild(){
    this.freigthForm = this.formBuilder.group(
      {
        freigthCode: new FormControl('' , Validators.required),
        freigthDescription: new FormControl('' , Validators.required),
        freigthType: new FormControl('' , Validators.required),
        freigthWeigth: new FormControl(0 , Validators.required)
      }
    );
  }

  //methods 
  createFreigth(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Save!'
    }).then((result) => {

      let freigth: Freigth = {
        freigthCode: this.freigthForm.controls.freigthCode.value,
        freigthDescription: this.freigthForm.controls.freigthDescription.value,
        freigthType: this.freigthForm.controls.freigthType.value,
        freigthWeigth: this.freigthForm.controls.freigthWeigth.value,
      }

      this.freigthService.PostFreigth(freigth).then(resp =>{}).catch(err =>{});
      
      this.freigthForm.reset();
      if (result.isConfirmed) {
        Swal.fire(
          'Complete!',
          'Your file has been Saved.',
          'success'
        )
      }
    })
  }

}
