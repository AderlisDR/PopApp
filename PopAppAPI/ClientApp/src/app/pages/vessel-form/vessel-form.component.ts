import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Vessel } from "src/app/models/vessel/vessel";
import { VesselService } from "src/app/services/vessel/vessel.service";
declare let Swal: any;

@Component({
  selector: "app-vessel-form",
  templateUrl: "./vessel-form.component.html",
  styleUrls: ["./vessel-form.component.css"],
})
export class VesselFormComponent implements OnInit {

  vesselForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private vesselService: VesselService) {}

  ngOnInit() {
    this.formBuild();
  }

  private formBuild(){
    this.vesselForm = this.formBuilder.group(
      {
        vesselName: new FormControl("", Validators.required),
        vesselCode: new FormControl("", Validators.required),
        vesselImo: new FormControl("", Validators.required),
        vesselFlag: new FormControl("", Validators.required),
        vesselSlora: new FormControl("", Validators.required),
        vesselArrival: new FormControl("", Validators.required),
      }
    );
  }
  
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

      let vessel: Vessel ={
        vesselName: this.vesselForm.controls.vesselName.value,
        vesselCode: this.vesselForm.controls.vesselCode.value,
        vesselImo: this.vesselForm.controls.vesselImo.value,
        vesselFlag: this.vesselForm.controls.vesselFlag.value,
        vesselSlora: this.vesselForm.controls.vesselSlora.value,
        vesselArrival: this.vesselForm.controls.vesselArrival.value,
      }

      this.vesselService.PostVessel(vessel).then(resp=>{}).catch(err=>{});
      
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
