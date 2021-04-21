import { Component, OnInit, Input } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UserAuthService } from './../../services/user-auth.service';
import { AlertService } from './../../services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

  @Input('showSpinner') showSpinner:string;

  signinForm: FormGroup;
  submitted = false;
  loading = false;
  error : string;
  returnUrl : string;

  constructor(
     public fb: FormBuilder,
     public authService: UserAuthService,
     public router: Router,
     public route: ActivatedRoute, 
     public alertService: AlertService
  ) {
    if (this.authService.currentUserValue) { 
      this.router.navigate(['/']);
    }
  }
 
  menu: Array<any> = [
    {txt: 'Sign up', rout: '/signup'},
  ];

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['',Validators.required],
          password: ['',Validators.required]
  });
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}

get f()
{
  return this.signinForm.controls;
}
  userLogin()
  {
    this.submitted= true;
    this.alertService.clear();
    if (this.signinForm.invalid)
    {
      return;
    }
    this.loading = true;
    this.authService.signIn(this.f.email.value,this.f.password.value)
    .pipe(first())
    .subscribe(
          (data : any)=> {
          //this.router.navigate([this.returnUrl]);
          this.router.navigate(['/first'], { queryParams: { registered: true }});
          console.log(data);
        },
        error => {
          this.alertService.error = error;
          this.loading = false;
        });
  }
}
