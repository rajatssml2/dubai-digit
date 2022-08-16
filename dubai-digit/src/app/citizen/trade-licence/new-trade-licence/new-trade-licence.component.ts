import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import config from '../../../../assets/config';

@Component({
  selector: 'app-new-trade-licence',
  templateUrl: './new-trade-licence.component.html',
  styleUrls: ['./new-trade-licence.component.css'],
  
})
export class NewTradeLicenceComponent implements OnInit {
  steps:any = config.steps;
  finYears:any = [];
  licenceTypes: any = ['Parmanent'];
  structureTypes: any = ['Immovable', 'Movable'];
  subStructureTypes: any = ['Hand Driven Vehicle', 'Motor Driven Vehicle'];
  accessoriesList: any = ['Air Compressor', 'Bakery Product', 'Bamboos', 'Bhatta, Tandoor', 'Boilers']
  tradeCategoryList: any = ['Services', 'Goods'];
  tradeTypeList: any = ['Manufacture', 'Retail', 'Wholesale'];
  tradeSubTypeList: any = ['Any other store house not specified elsewhere from which offensive unwholesome smell, noise smoke arises', 'Any other store house place business not specified elsewhere', 'Audio cassettes','Candle, Dhoop, Aggarwatti etc.'];
  localityList: any = ['Area1', 'Area2', 'Area3', 'Area4'];
  typeOfOwnershipList: any = ['Single Owner', 'Multiple Owners', 'Institutional - Private', 'Institutional - Government']
  relationshipWithGuardianList: any = ['Father', 'Husband'];
  genderList: any = ['Male', 'Female', 'Transgender'];


  isLinear = true;
  tradeDetailsFormGroup: any= FormGroup;
  tradeUnits: any = FormGroup;
  accessoriesFormGroup: any = FormGroup;
  accessoriesFormGrp: any = FormGroup;
  propertyGroup: any = FormGroup;
  tradeAddressFormGroup: any = FormGroup;
  ownershipDetailsFormGrp: any = FormGroup;
  documentFormGroup: any = FormGroup;

  userInfo: any;
  gaugeTitles:any = FormArray;
   
  showPropertyDetails = false;
  constructor(private _formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.finYears = config.finYear;
    this.userInfo = localStorage.getItem('citizen_details');
    this.userInfo = JSON.parse(this.userInfo)
    this.tradeDetailsFormGroup = this._formBuilder.group({
      year: ['', Validators.required],
      licenceType: ['Parmanent', Validators.required],
      tradeName: ['', Validators.required],
      structureType: ['', Validators.required],
      subStructureType: ['', Validators.required],
      tradeCommencementDate: ['', Validators.required],
      tradeGSTNumber: [''],
      operationalArea: [''],
      numberOfEmployees: ['']
    });
    this.tradeUnits = this._formBuilder.group({
      phaseExecutions: this._formBuilder.group({
        PRE: this._formBuilder.array([this.addPhase()])
      })
    });
    this.accessoriesFormGrp = this._formBuilder.group({
      accessoriesFormGroup: this._formBuilder.group({
        accessoriesForm: this._formBuilder.array([this.addAccessoriesForm()])
      })
    });
    this.propertyGroup = this._formBuilder.group({
      propertyId: ['', Validators.required]
    });
    this.tradeAddressFormGroup = this._formBuilder.group({
      pincode: [''],
      city : [this.userInfo.emirates ? this.userInfo.emirates : 'City A', Validators.required],
      locality  : ['', Validators.required],
      buildingNumber  : [''],
      streetName  : [''],
    });

    this.ownershipDetailsFormGrp = this._formBuilder.group({
      typeOfOwnership: ['', Validators.required],
      ownershipDetailsForm: this._formBuilder.array([]),
      institutionalDetailsForm: this._formBuilder.array([])
    });
  }

  addOwnershipDetails() {
    return this._formBuilder.group({
      ownerName: ['', Validators.required],
      ownerMobileNumber: ['', Validators.required],
      guardianName: ['', Validators.required],
      relationshipWithGuardian: ['', Validators.required],
      gender : ['', Validators.required],
      email : [''],
      ownerSpecialCategory: [''],
      correspondenceAddress: ['']
    });
  }

  addInstitutionalDetails() {
    return this._formBuilder.group({
      institutionName: ['', Validators.required],
      typeOfInstitution: ['', Validators.required]
    });
  }

  addPhase() {
    return this._formBuilder.group({
      tradeCategory: ['', Validators.required],
      tradeType: ['', Validators.required],
      tradeSubType: ['', Validators.required],
      uom: [''],
      uomValue: ['']
    });
  }

  addAccessoriesForm() {
    return this._formBuilder.group({
      accessories: [''],
      uom: [''],
      uomValue: [''],
      accessoryCount: ['', Validators.required]
    });
  }

  addMoreTradeUnits() {
    this.phaseArray.push(this.addPhase());
  }
  addMoreAccessoriesForm() {
    this.accessoriesFormArray.push(this.addAccessoriesForm());
  }

  addMoreOwnershipDetails() {
    this.ownershipDetailsArray.push(this.addOwnershipDetails());
  }

  get phaseArray() {
    const control = <FormArray>(<FormGroup>this.tradeUnits.get('phaseExecutions')).get('PRE');
    return control;
  }

  get accessoriesFormArray() {
    const control = <FormArray>(<FormGroup>this.accessoriesFormGrp.get('accessoriesFormGroup')).get('accessoriesForm');
    return control;
  }

  get ownershipDetailsArray() {
    const control = <FormArray>(<FormGroup>this.ownershipDetailsFormGrp).get('ownershipDetailsForm');
    return control;
  }

  get institutionalDetailsArray() {
    const control = <FormArray>(<FormGroup>this.ownershipDetailsFormGrp).get('institutionalDetailsForm');
    return control;
  }

  createOwnershipDetailsForm() {
    const frm = this.ownershipDetailsFormGrp.get('ownershipDetailsForm') as FormArray
    frm.push(this.addOwnershipDetails())
    
  }
  createInstitutionalDetailsForm() {
    const frm = this.ownershipDetailsFormGrp.get('institutionalDetailsForm') as FormArray
    frm.push(this.addInstitutionalDetails())
  }

  onChangeOwnershipDetails(val:any) {
    console.log("val=",val)
    if (val === 'Multiple Owners' || val == 'Single Owner') {
      const emails = this.ownershipDetailsFormGrp.get('institutionalDetailsForm') as FormArray
      emails.reset()
      // (<FormGroup>this.ownershipDetailsFormGrp).removeControl('institutionalDetailsForm');
      this.ownershipDetailsArray.clear();
      this.institutionalDetailsArray.clear();
       this.createOwnershipDetailsForm();
    } else {
      // (<FormGroup>this.ownershipDetailsFormGrp).removeControl('ownershipDetailsForm');
      const emails = this.ownershipDetailsFormGrp.get('ownershipDetailsForm') as FormArray
      emails.reset();
      this.institutionalDetailsArray.clear();
      this.ownershipDetailsArray.clear();
      this.createInstitutionalDetailsForm();
    }
  }

  onSearchProperty() {
    let val = this.propertyGroup.get('propertyId').value;
    console.log("val=",val)
    if(val) {
      this.showPropertyDetails = true;
    }
    
  }
  
  submit(){
      console.log(this.tradeDetailsFormGroup.value);
      console.log(this.tradeUnits.value);
      console.log(this.accessoriesFormGrp.value);
  }

  saveandnext() {

  }

}
