import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: any = FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phoneNo: ['', Validators.required]
    });
  }
  onLogin(form: FormGroup) {
    if(!form.valid) return;
    let obj = {
      phoneNo: form.value.phoneNo
    }
    

    if(form.value.phoneNo) {
      this.router.navigate(['citizen/otp'])
    }else {
      Swal.fire("", "Invalid credential", "info");
    }

    
  }

  onCitizenSignUp() {
    this.router.navigate(['citizen/register'])
  }


}
