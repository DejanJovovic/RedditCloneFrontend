import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  logInForm!: FormGroup;

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.logInForm = new FormGroup ({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  loginSubmit() {

    this.apiService.login(this.logInForm.get('username')?.value, this.logInForm.get('password')?.value)
    .subscribe(response => {
      console.log(response);
    })

  }
  
}
