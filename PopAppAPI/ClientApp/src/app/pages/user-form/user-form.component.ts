import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare let Swal: any;

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formBuild();
  }

  private formBuild(){
    this.userForm = this.formBuilder.group(
      {
        UserName: new FormControl('' , Validators.required),
        Email: new FormControl('' , Validators.required),
        Password: new FormControl('' , Validators.required),
        UserRole: new FormControl('' , Validators.required)
      }
    );
  }

  createUser(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Save!'
    }).then((result) => {
      
      this.userForm.reset();
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
