import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-application',
  templateUrl: './search-application.component.html',
  styleUrls: ['./search-application.component.css']
})
export class SearchApplicationComponent implements OnInit {
  applicationTypeList: any = ['New', 'Renewal', 'Amendment'];
  applicationStatusList: any = ['Pending for Document verification', 'Rejected', 'Pending for Field inspection', 'Pending approval', 'Approved', 'Cancelled'];

  isLinear = true;
  tradeDetailsFormGroup: any= FormGroup;

  dataSource :any = [
    {applicationNo: 'TL-2020-07-09-001674', applicationDate: '30/01/2020', applicationType: 'New', licenseNumber: '', 'licenseYear': '2020', tradeName: 'Khan Opticals', tradeOwnerName: 'Muganzi Robin', status: 'Initiated'},
    {applicationNo: 'TL-2021-12-21-001321', applicationDate: '12/12/2019', applicationType: 'Renewal', licenseNumber: 'TL-2022-07-29-000222', 'licenseYear': '2021', tradeName: 'Medicinal', tradeOwnerName: 'Rajat', status: 'Approved'},
    {applicationNo: 'TL-2019-06-19-001994', applicationDate: '10/01/2019', applicationType: 'New', licenseNumber: '', 'licenseYear': '2019', tradeName: 'Roman Traders', tradeOwnerName: 'Roman', status: 'Pending payment'},
    {applicationNo: 'TL-2022-10-21-009704', applicationDate: '22/03/2022', applicationType: 'New', licenseNumber: '', 'licenseYear': '2022', tradeName: 'SJ Industry traders', tradeOwnerName: 'Saina', status: 'Pending for Field inspection'},
    {applicationNo: 'TL-2012-07-30-001674', applicationDate: '23/09/2018', applicationType: 'New', licenseNumber: '', 'licenseYear': '2012', tradeName: 'Al Mamun Traders', tradeOwnerName: 'Al Mamun', status: 'Pending for Document verification'},
    
  ];
  displayedColumns: string[] = ['applicationNo', 'applicationDate', 'applicationType', 'licenseNumber', 'licenseYear', 'tradeName', 'tradeOwnerName', 'status'];

  constructor(private _formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.tradeDetailsFormGroup = this._formBuilder.group({
      applicationNo: [''],
      applicationType: [''],
      tradeLicenseFromDate: [''],
      tradeLicenseToDate: [''],
      tradeLicenseNumber: [''],
      applicationStatus: [''],
      tradeName: ['']
    });
  }

}
