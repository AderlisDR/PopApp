import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Company } from '../../../models/company/company';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
  companyForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private companyService: CompanyService, private activedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.onUpdateCompany();
    this.buildForm();
  }

  private buildForm() {
    this.companyForm = this.formBuilder.group({

      companyName: new FormControl('', Validators.required),
      companyCode: new FormControl('', Validators.required),
      companyAdress: new FormControl('', Validators.required),
      companyPhone: new FormControl('', Validators.required)
    });
  }

  createCompany() {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
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
      };

      this.companyService.PostCompany(company);

      this.companyForm.reset();
      if (result.isConfirmed) {
        Swal.fire(
          'Complete!',
          'Your file has been Saved.',
          'success'
        );
      }
    });
  }

  onUpdateCompany() {
    const parameter = this.activedRouter.snapshot.params['id'];
    if (parameter) {
      let company: Company;
      this.companyService.GetCompany(parameter).then((resp: Company) => {
        company = resp;
      });
    }
  }

}
