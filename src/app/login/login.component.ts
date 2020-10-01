import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {


  user = {
    "username": "admin",
    "password": "admin",
    "email": "ntanh.hutech@gmail.com",
    "title": "Học lập trình với JSON"
  }
  


  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  login(even: any) {
    if (this.validateForm.value.userName == this.user.username && this.validateForm.value.password == this.user.password) {
      alert("sucess!");
    }
    else {
      alert("fail");
    }
  }

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
