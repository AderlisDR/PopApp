import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
declare let Swal: any;

@Component({
  selector: "app-vessel-form",
  templateUrl: "./vessel-form.component.html",
  styleUrls: ["./vessel-form.component.css"],
})
export class VesselFormComponent implements OnInit {

  vesselForm = new FormGroup({
    vesselName: new FormControl("", Validators.required),
    vesselCode: new FormControl("", Validators.required),
    vesselImo: new FormControl("", Validators.required),
    vesselFlag: new FormControl("", Validators.required),
    vesselSlora: new FormControl("", Validators.required),
    vesselArrival: new FormControl("", Validators.required),
  });

  constructor() {}

  ngOnInit() {}
  
   createVessel(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Save!'
    }).then((result) => {
      console.log( 'data' ,this.vesselForm.value);
      this.vesselForm.reset();
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
