import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company/company';
import { CompanyService } from 'src/app/services/company/company.service';
declare let Swal:any;

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  //company form
    companyForm:  FormGroup;
    
    

  constructor(private formBuilder: FormBuilder , private companyService: CompanyService , private activedRouter: ActivatedRoute) { }

  

  ngOnInit() {
    this.onUpdateCompany();
    this.buildForm();
  }

  private buildForm(){
    this.companyForm = this.formBuilder.group({
      
        companyName: new FormControl('' , Validators.required),
        companyCode: new FormControl('', Validators.required),
        companyAdress: new FormControl('' , Validators.required),
        companyPhone: new FormControl('' , Validators.required)
    });
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

       
      const company: Company = {
        companyName: this.companyForm.controls.companyName.value,
        companyCode: this.companyForm.controls.companyCode.value,
        companyAdrees: this.companyForm.controls.companyAdress.value,
        companyPhone: this.companyForm.controls.companyPhone.value
      }

      this.companyService.PostCompany(company);

      

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

  onUpdateCompany(){
    let parameter = this.activedRouter.snapshot.params['id'];
    if(parameter){
       let  company: Company;
        this.companyService.GetCompany(parameter).then((resp: Company) =>{
          company = resp;
       })
    }
  }

}
