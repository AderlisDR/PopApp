import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare let Swal: any;

@Component({
  selector: 'app-freigth-form',
  templateUrl: './freigth-form.component.html',
  styleUrls: ['./freigth-form.component.scss']
})
export class FreigthFormComponent implements OnInit {

  freigthForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
