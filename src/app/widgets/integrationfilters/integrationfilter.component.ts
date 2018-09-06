import { AccountPlatform } from '../../core/data/AccountPlatform';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Platform } from '../../core/data/Platform';
import { Component, OnInit, ViewChild } from '@angular/core';
import { clone } from 'lodash';
import { Services } from '../../core/commonservices/services';
import { Plugin } from '../../core/data/Plugin';
import { Platformsettings } from '../../core/data/PlatformSettings';
import { MyGlobal } from '../../core/data/global';
import { PlatformsettingsService } from '../platformsetting/platformsettings.service';


@Component({
  selector: 'app-platformsetting',
  templateUrl: './platformsetting.component.html',
  styleUrls: ['./platformsetting.component.css'],
  providers: [PlatformsettingsService, Services, Platformsettings, MyGlobal]
})
export class PlatformsettingComponent implements OnInit {
  plugins: Plugin[];
  platforms: Platform[];
  accountplatforms: AccountPlatform[];
  platformSettings: Platformsettings[];
  public form: FormGroup;
  public submitted: boolean = false;
  returnUrl: string;
  message: string;

  //  accounPLatformForm: boolean = false;
  platfromsettingsformForm: boolean = false;
  editplatfromsettingsformForm: boolean = false;
  isNewForm: boolean;
  newplatfromsettingsform: any = {};
  editedplatfromsettings: any = {};
  accountPlatformID:number;

  constructor(
    private platformsettingsService: PlatformsettingsService,
    private services: Services,
    private router: Router,
    private accountIdForToken: MyGlobal,
    private platformSetting: Platformsettings,
    private actvatedRoute: ActivatedRoute) {
    this.platformSetting.ID = 0,
    this.platformSetting.CreatedOn = "0000-00-00 00:00:00";
    this.platformSetting.UpdatedOn = "0000-00-00 00:00:00";
    this.platformSetting.Deleted = false;
  }

  ngOnInit() {
    this.accountPlatformID=parseInt(localStorage.getItem("accountplatformId"));
    this.getPlatformsettings();
    this.getAllAccountPlatforms();
    this.getAllPlatfroms();
    this.getAllPlugins();
  }

  public onSubmit(form: NgForm): void {
    this.platformSetting.AccountPlatformID =this.accountPlatformID;
    this.platformSetting.Value = form.value.Value;
    this.platformSetting.Key = form.value.Key;
    this.platformsettingsService.createPlatformsettings(this.platformSetting).subscribe(t => {
      if (t) {
        this.platfromsettingsformForm = false;
        this.getPlatformsettings();
      }
      else {
        this.message = "Please try again!!";
      }
    })
    this.submitted = true;
  }

  public onSubmitUpdate(form: NgForm): void {
    this.platformSetting.ID=form.value.ID;
    this.platformSetting.AccountPlatformID = form.value.AccountPlatformID;
    this.platformSetting.Value = form.value.Value;
    this.platformSetting.Key = form.value.Key;
    this.platformsettingsService.updatePlatformsettings(this.form.value).subscribe(t => {
      if (t) {
        this.editplatfromsettingsformForm = false;
        this.editedplatfromsettings = {};
        this.getPlatformsettings();
      }
      else {
        this.message = "Please try again!!";
      }
    })
    this.submitted = true;
  }

  showEditPlatformSettingsForm(platformsetting: Platformsettings) {
    if (!platformsetting) {
      this.platfromsettingsformForm = false;
      return;
    }
    this.editplatfromsettingsformForm = true;
    this.editedplatfromsettings = clone(platformsetting);
  }

  showAddPlatformsettingsForm() {
    // resets form if edited platfromsettings
    if (this.platformSettings) {
      if (this.platformSettings.length) {
        this.newplatfromsettingsform = {};
      }
    }
    this.platfromsettingsformForm = true;
    this.isNewForm = true;

  }

  updateAccountPlatform() {
    this.platformsettingsService.updatePlatformsettings(this.editedplatfromsettings);
    this.editplatfromsettingsformForm = false;
    this.editedplatfromsettings = {};
  }


  removePlatformsettings(platformsetting: Platformsettings) {
    this.platformsettingsService.deletePlatformsettingsById(platformsetting).subscribe(t => {
      if (t) {
        this.platfromsettingsformForm = false;
        this.getPlatformsettings();
      }
      else {
        this.message = "Please try again!!";
      }
    })
    this.submitted = true;
  }

  getPlatformsettings() {
    this.platformsettingsService.getAllPlatformsettings(this.accountPlatformID).subscribe(p => {
      this.platformSettings = p;
      console.log(this.platformSettings)
    }
    );
  }


  getAllAccountPlatforms() {
    this.services.getAllAccountPlatform().subscribe(p => {
      this.accountplatforms = p;
      console.log(this.accountplatforms);
    }
    );
  }

  getAllPlatfroms() {
    this.services.getAllPlatform().subscribe(p => {
      this.platforms = p;
    }
    );
  }

  getAllPlugins() {
    this.services.getAllPlugin().subscribe(p => {
      this.plugins = p
    }
    );
  }

  cancelNewAccountPlatform() {
    this.newplatfromsettingsform = {};
    this.platfromsettingsformForm = false;
  }

  cancelEdits() {
    this.newplatfromsettingsform = {};
    this.platfromsettingsformForm = false;
  }

}
