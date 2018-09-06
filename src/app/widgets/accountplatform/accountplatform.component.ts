import { AccountPlatformService } from './accountplatform.service';
import { AccountPlatform } from '../../core/data/AccountPlatform';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Platform } from '../../core/data/Platform';
import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { clone } from 'lodash';
import { Services } from '../../core/commonservices/services';
import { Plugin } from '../../core/data/Plugin';
import { MyGlobal } from '../../core/data/global';
import { Platformsettings } from '../../core/data/PlatformSettings';
import { PlatformsettingsService } from '../platformsetting/platformsettings.service';
import { IntegrationFilterService } from '../integrationfilters/integrationfilter.service';
import { IntegrationFilter } from '../../core/data/integrationfilter';
import { FilterCondition } from '../../core/data/FilterCondition';
import { FilterType } from '../../core/data/FilterType';
import { Account } from '../../core/data/Acount';



@Component({
  templateUrl: './accountplatform.component.html',
  selector: 'widget-accountplatform',
  providers: [
    AccountPlatformService,
    AccountPlatform,
    Services,
    MyGlobal,
    PlatformsettingsService,
    Platformsettings,
    IntegrationFilterService,
    IntegrationFilter,
  ]
})
export class AccountPlatformWidgetComponent implements OnInit, DoCheck {
  //global varibale
  public form: FormGroup;
  public submitted: boolean = false;
  platforms: Platform[];
  plugins: Plugin[];
  filterConditions: FilterCondition[];
  filterTypes: FilterType[];
  returnUrl: string;
  message: string;
  globalAccountPlatfromID: number;

  //Accountplatforms variable
  accountplatforms: AccountPlatform[]
  accounPlatformForm: boolean = false;
  editAcountPlatformForm: boolean = false;
  editedAccountPlatform: any = {};
  newAccountPlatform: any = {};

  //Platformsettings variable
  platformSettings: Platformsettings[];
  platformsettingsdefault: Platformsettings[];
  createPlatformSettings: boolean = false;
  platformSettingList: boolean = false;
  editPlatformSettings: boolean = false;
  editedPlatformSettings: any = {};
  newplatfromsettingsform: any = {};

  //IntegrationFilters variable
  integrationFilters: IntegrationFilter[];
  integrationFiltersdefault: IntegrationFilter[];
  createIntegrationFilters: boolean = false;
  IntegrationFilterList: boolean = false;
  editIntegrationFilters: boolean = false;
  editedIntegrationFilters: any = {};
  newIntegrationFiltersform: any = {};

  constructor(
    private accountPlatformService: AccountPlatformService,
    private platformSettingService: PlatformsettingsService,
    private integrationFilterService: IntegrationFilterService,
    private platformSetting: Platformsettings,
    private integrationFilter: IntegrationFilter,
    private services: Services,
    private accountPlatform: AccountPlatform,
    private router: Router,
    private accountIdForToken: MyGlobal,
    private actvatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.getAllAccountPlatforms();
    this.getAllFilterType();
    this.getAllFilterCondition();
    this.getAllPlatforms();
    this.getAllPlugins();
  }

  ngDoCheck() {
  }

  // AccountPlatform methods
  public onSubmit(form: NgForm): void {
    this.accountPlatform.AccountID = parseInt(localStorage.getItem("accountID"));
    this.accountPlatform.PlatformID = form.value.PlatformID;
    this.accountPlatform.PluginID = form.value.PluginID;
    this.accountPlatform.Type = form.value.Type;
    this.accountPlatform.Key = form.value.Key;
    if (form.value.IsActive === undefined) {
      this.accountPlatform.IsActive = false;
    }
    else {
      this.accountPlatform.IsActive = form.value.IsActive;
    }
    this.accountPlatformService.createAccountPlatform(this.accountPlatform).subscribe(t => {
      if (t) {
        this.accounPlatformForm = false;
        this.getAllAccountPlatforms();
      }
      else {
        this.message = "Please try again!!";
      }
    })
    this.submitted = true;
  }

  public onSubmitUpdate(form: NgForm): void {
    this.accountPlatform.ID = form.value.ID;
    this.accountPlatform.AccountID = 1;
    this.accountPlatform.PlatformID = form.value.PlatformID;
    this.accountPlatform.PluginID = form.value.PluginID;
    this.accountPlatform.Type = form.value.Type;
    this.accountPlatform.Key = form.value.Key;
    this.accountPlatform.IsActive = form.value.IsActive;
    this.accountPlatformService.updateAccountPlatform(this.accountPlatform).subscribe(t => {
      if (t) {
        this.accounPlatformForm = false;
        this.getAllAccountPlatforms();
        this.editAcountPlatformForm = false;
        this.editedAccountPlatform = {};
      }
      else {
        this.message = "Please try again!!";
      }
    })
    this.submitted = true;
  }

  showEditAccountPlatformForm(accountPlatform: AccountPlatform) {
    if (!accountPlatform) {
      this.accounPlatformForm = false;
      return;
    }
    this.editAcountPlatformForm = true;
    this.editedAccountPlatform = clone(accountPlatform);
    this.accounPlatformForm = false;
  }

  showAddAccountPlatformForm() {
    // resets form if edited accountPlatform
    if (this.accountplatforms.length) {
      this.newAccountPlatform = {};
    }
    this.accounPlatformForm = true;
    this.editAcountPlatformForm = false;
    this.platformSettingList = false;
  }


  removeAccountPlatform(accountPlatform: AccountPlatform) {
    this.accountPlatformService.deleteAccountPlatformById(accountPlatform).subscribe(t => {
      if (t) {
        this.accounPlatformForm = false;
        this.editAcountPlatformForm=false;
        this.getAllAccountPlatforms();
        this.IntegrationFilterList = false;
        this.platformSettingList = false;
      }
      else {
        this.message = "Please try again!!";
      }
    })
    this.submitted = true;
  }

  getAllAccountPlatforms() {
    this.accountPlatformService.getAllAccountPlatform().subscribe(p => {
      if (p.length === 42) {
        this.accountplatforms = [];
      }
      else {
        this.accountplatforms = p;
      }
    }
    );
  }

  cancelNewAccountPlatform() {
    this.newAccountPlatform = {};
    this.accounPlatformForm = false;
  }

  cancelEdits() {
    this.editedAccountPlatform = {};
    this.editAcountPlatformForm = false;
  }


  // Platformsettings methods

  public onSubmitPlatfromsettings(form: NgForm): void {
    this.platformSetting.AccountPlatformID = this.globalAccountPlatfromID;
    this.platformSetting.Value = form.value.Value;
    this.platformSetting.Key = form.value.Key;
    this.platformSettingService.createPlatformsettings(this.platformSetting).subscribe(t => {
      if (t) {
        this.createPlatformSettings = false;
        this.getAllPlatfromSettingsByAccountPlatformID(this.globalAccountPlatfromID);
      }
      else {
        this.message = "Please try again!!";
      }
    })
    this.submitted = true;
  }

  public onSubmitUpdatePlatfromsettings(form: NgForm): void {
    this.platformSetting.AccountPlatformID = this.globalAccountPlatfromID;
    this.platformSetting.ID = form.value.ID;
    this.platformSetting.Value = form.value.Value;
    this.platformSetting.Key = form.value.Key;
    this.platformSettingService.updatePlatformsettings(this.platformSetting).subscribe(t => {
      if (t) {
        this.editPlatformSettings = false;
        this.getAllPlatfromSettingsByAccountPlatformID(this.globalAccountPlatfromID);
      }
      else {
        this.message = "Please try again!!";
      }
    }, error => {
      this.message = "Please try again"
    }
    )
    this.submitted = true;
  }


  showAddPlatformsettingsForm() {
    // resets form if edited accountPlatform
    // if (this.platformSettings.length==undefined) {
    this.newplatfromsettingsform = {};
    // }
    this.createPlatformSettings = true;
    this.editPlatformSettings = false;

  }

  showEditPlatformsettingsForm(editplatformsettings: Platformsettings) {
    if (!editplatformsettings) {
      this.createPlatformSettings = false;
      return;
    }
    this.editPlatformSettings = true;
    this.editedPlatformSettings = clone(editplatformsettings);
    this.createPlatformSettings = false;
  }
  showEditIntegrationFilters(editIntegrationFilters: IntegrationFilter) {
    if (!editIntegrationFilters) {
      this.createIntegrationFilters = false;
      return;
    }
    this.editIntegrationFilters = true;
    this.editedIntegrationFilters = clone(editIntegrationFilters)
    this.createIntegrationFilters = false;
  }

  getAllPlatfromSettingsByAccountPlatformID(accountplatformID: number) {
    this.platformSettingService.getAllPlatformsettings(accountplatformID).subscribe(p => {
      if (p.length !== 42) {
        this.platformSettingList = true;
        this.platformSettings = p;
      }
      else {
        this.platformSettingList = true;
        this.platformSettings = [];
      }
    })
  }

  getPlatformsettingByDefault(accountplatform: AccountPlatform) {
    this.platformSettingService.getPlatformsettingByDefault(accountplatform.ID).subscribe(p => {
      this.platformSettingList = true;
      this.platformsettingsdefault = p;
    })
  }

  removePlatformsettings(platformsetting: Platformsettings) {
    console.log(this.accountPlatform);
    this.platformSettingService.deletePlatformsettingsById(platformsetting).subscribe(t => {
      if (t) {
        this.editAcountPlatformForm=false;
        this.getAllPlatfromSettingsByAccountPlatformID(this.globalAccountPlatfromID);
      }
      else {
        this.message = "Please try again!!";
      }
    })
    this.submitted = true;
  }

  //IntegrationFilters Method
  public onSubmitIntegrationFilters(form: NgForm): void {
    this.integrationFilter.AccountPlatformID = this.globalAccountPlatfromID;
    this.integrationFilter.Value = form.value.Value;
    this.integrationFilter.key = form.value.key;
    this.integrationFilter.FilterCondition = form.value.FilterCondition;
    this.integrationFilter.FilterType = form.value.FilterType;
    this.integrationFilter.Result = form.value.Result;
    this.integrationFilterService.createIntegrationFilters(this.integrationFilter).subscribe(t => {
      if (t) {
        this.createIntegrationFilters = false;
        this.getAllIntegrationFiltersByAccountPlatformID(this.globalAccountPlatfromID);
      }
      else {
        this.message = "Please try again!!";
      }
    })
    this.submitted = true;
  }

  public onSubmitUpdateIntegrationFilters(form: NgForm): void {
    this.integrationFilter.AccountPlatformID = form.value.AccountPlatformID;
    this.integrationFilter.ID = form.value.ID;
    this.integrationFilter.key = form.value.key;
    this.integrationFilter.FilterType = form.value.FilterType;
    this.integrationFilter.Value = form.value.Value;
    this.integrationFilter.Result = form.value.Result;
    this.integrationFilter.FilterCondition = form.value.FilterCondition;
    this.integrationFilterService.updateIntegrationFilters(this.integrationFilter).subscribe(t => {
      if (t) {
        this.editIntegrationFilters = false;
        this.getAllIntegrationFiltersByAccountPlatformID(this.globalAccountPlatfromID);
      }
      else {
        this.message = "Please try again";
      }
    }, error => {
      this.message = "Please try again";
    })
  }

  showAddIntegrationFiltersForm() {
    if (this.integrationFilters.length) {
      this.newIntegrationFiltersform = {};
    }
    this.createIntegrationFilters = true;
    this.editIntegrationFilters = false;
  }

  getAllIntegrationFiltersByAccountPlatformID(accountplatformID: number) {
    this.integrationFilterService.getAllIntegrationFilters(accountplatformID).subscribe(p => {
      console.log(p.length);
      if (p.length == 52) {
        this.IntegrationFilterList = true;
        this.integrationFilters = [];
      } else {
        this.IntegrationFilterList = true;
        this.integrationFilters = p;
      }

    });
  }

  getIntegrationFiltersByDefault(accountplatform: AccountPlatform) {
    this.integrationFilterService.getIntegrationFiltersByDefault(accountplatform.ID).subscribe(p => {
      this.IntegrationFilterList = true;
      this.integrationFiltersdefault = p;
      console.log(this.integrationFiltersdefault);
    });

  }

  removeIntegrationFilters(integrationfilter: IntegrationFilter) {
    console.log(this.globalAccountPlatfromID);
    this.integrationFilterService.deleteIntegrationFiltersById(integrationfilter).subscribe(t => {
      if (t) {
        this.editIntegrationFilters=false;
        this.getAllIntegrationFiltersByAccountPlatformID(this.globalAccountPlatfromID);
      }
      else {
        this.message = "Please try again!!";
      }
    })
    this.submitted = true;
  }

  getAllFilterCondition() {
    this.services.getFilterCondition().subscribe(p => {
      this.filterConditions = p;
    });
  }

  getAllFilterType() {
    this.services.getFilterType().subscribe(p => {
      this.filterTypes = p;
    });
  }

  //Common methods


  getAllPlatforms() {
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

  cancelNewPlatformSettings() {
    this.newplatfromsettingsform = {};
    this.createPlatformSettings = false;
    this.editPlatformSettings = false;
  }

  cancelIntegrationFilters() {
    this.newIntegrationFiltersform = {};
    this.createIntegrationFilters = false;
  }

  cancelEditIntegrationFilters() {
    this.editedIntegrationFilters = {};
    this.editIntegrationFilters = false;
    this.createIntegrationFilters = false;
  }

  goPlatformSettings(accountplatform: AccountPlatform) {
    this.getAllPlatfromSettingsByAccountPlatformID(accountplatform.ID);
    this.getPlatformsettingByDefault(accountplatform);
    this.globalAccountPlatfromID = accountplatform.ID;
  }

  goIntegrationFilters(accountplatform: AccountPlatform) {
    this.getAllIntegrationFiltersByAccountPlatformID(accountplatform.ID);
    this.getIntegrationFiltersByDefault(accountplatform);
    this.globalAccountPlatfromID = accountplatform.ID;
  }


}
