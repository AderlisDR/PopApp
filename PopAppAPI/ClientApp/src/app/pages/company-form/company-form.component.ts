import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare let Swal:any;

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  //company form
    companyForm = new FormGroup({
    companyName: new FormControl('' , Validators.required),
    companyCode: new FormControl('', Validators.required),
    companyAdress: new FormControl('' , Validators.required),
    companyPhone: new FormControl('' , Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  //methods
  createCompany(){
  
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Save!'
    }).then((result) => {
      console.log( 'data' ,this.companyForm.value);
      this.companyForm.reset();
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
