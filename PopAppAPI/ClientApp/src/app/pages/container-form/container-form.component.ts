import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
declare let Swal:any;

@Component({
  selector: "app-container-form",
  templateUrl: "./container-form.component.html",
  styleUrls: ["./container-form.component.scss"],
})
export class ContainerFormComponent implements OnInit {
  //container form
    containerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm(){
    this.containerForm = this.formBuilder.group(
      {
        containerType: new FormControl("", Validators.required),
        containerPayload: new FormControl(0, Validators.required),
        containerCapacity: new FormControl(0, Validators.required),
        containerLenth: new FormControl(0, Validators.required),
        containerWidth: new FormControl(0, Validators.required),
        containerHeigth: new FormControl(0, Validators.required)
      }
    );
  }


  //methods
  createContainer(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Save!'
    }).then((result) => {
      
      this.containerForm.reset();
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
