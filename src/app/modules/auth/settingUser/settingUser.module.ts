import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingUserComponent } from './settingUser.component';
import { ShareModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { settingRoute } from './settingUser.routing';

@NgModule({
  imports: [CommonModule,ShareModule,RouterModule.forChild(settingRoute)
  ],
  declarations: [SettingUserComponent]
})
export class SettingUserModule { }
