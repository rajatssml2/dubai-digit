import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import config from '../../../assets/config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emirates:any = config.emirates;
  
  loginForm: any = FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }
  get f(){  
    return this.loginForm.controls;  
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      phoneNo: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      emirates: ['', Validators.required]
    });
  }
  onLogin(form: FormGroup) {
    if(!form.valid) return;
    let obj = {
      name: form.value.name,
      phoneNo: form.value.phoneNo,
      emirates: form.value.emirates
    }
    

    if(obj.name && obj.phoneNo && obj.emirates) {
      localStorage.setItem('citizen_details', JSON.stringify(obj))
      this.router.navigate(['citizen/otp'])

    }else {
      Swal.fire("", "Invalid credential", "info");
    }

    
  }
  goToLogin() {
    this.router.navigate(['citizen/login'])
  }


}
