import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  
  loginForm: any = FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      otp: ['', Validators.required]
    });
  }
  onLogin(form: FormGroup) {
    if(!form.valid) return;
    let obj = {
      otp: form.value.otp
    }
    

    if(form.value.otp) {
      localStorage.setItem('loginUser', 'citizen');
      this.router.navigate(['citizen']);
    }else {
      Swal.fire("", "Invalid credential", "info");
    }

    
  }


}
