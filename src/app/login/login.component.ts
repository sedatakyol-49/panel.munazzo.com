import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { LoginService } from "./login.service";
import { Account } from '../core/data/Acount';
import { MyGlobal } from '../core/data/global';
import { Services } from '../core/commonservices/services';
import { AlertService } from '../components/alert/alert.service';

@Component({
  templateUrl: './login.component.html',
  selector: 'login',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, Account, MyGlobal]
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  accounts: Account[];
  public submitted: boolean = false;
  returnUrl: string;
  message: string;
  loading = false;
  IsNull: boolean;

  //
  public successText = "Successful";
  public warningText;
  public dangerText = "Danger";
  public successColor = "#8ad919";
  public warningCOlor = "#d9534f";
  public dangerColor = "#f9243f";
  public fontColor = "#ececec";

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: LoginService,
    private commonservice: Services,
    private account: Account,
    private actvatedRoute: ActivatedRoute,
    private _alertService: AlertService
  ) {
    this.account.ID = 0;
    this.account.PasswordSalt = "";
    this.account.CreatedOn = "0000-00-00 00:00:00";
    this.account.UpdatedOn = "0000-00-00 00:00:00";
    this.account.Deleted = false;
    this.account.Active = true;
    this.IsNull = false;
  }

  ngOnInit() {
    this.getActivatedRoute();
    this.getFindAccountByUsername();
  }

  getActivatedRoute() {
    this.actvatedRoute.queryParams.subscribe(params => {
      this.returnUrl = params["returnUrl"] || "dashboard";
    });
  }

  getFindAccountByUsername() {
    this.commonservice.getAllAccount().subscribe(c => {
      this.accounts = c;
    });
  }

  public onSubmit(form: NgForm): void {
    this.account.Username = form.value.username;
    this.account.Password = form.value.password;
    if (form.value.username != "" && form.value.username !== null) {
      this.service.login(this.account).subscribe(t => {
        if (t) {
          const result = this.accounts.filter(s => s.Username == form.value.username);
          this.account.ID = result[0].ID;
          localStorage.removeItem("accountID");
          localStorage.setItem("accountID", this.account.ID.toString());
          this.loading = true;
          this.router.navigateByUrl(this.returnUrl);
        }
        else {
          this.message = "Username or password is incorrect!";
          this._alertService.error(this.message);
        }
      }, error => {
        this._alertService.error(error._body);
      })
      this.submitted = true;
    }
    else {
      this.message = "Please, enter all fields";
      this._alertService.error(this.message);
    }
  }

}
