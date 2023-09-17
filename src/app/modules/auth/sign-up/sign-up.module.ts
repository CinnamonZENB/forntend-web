import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { signUpRoutes } from './sign-up.routing';
import { RouterModule } from '@angular/router';
import { PrimeNgModule } from 'src/app/shared/module/primeng.module';

@NgModule({
  imports: [CommonModule, PrimeNgModule, RouterModule.forChild(signUpRoutes)],
  declarations: [SignUpComponent],
})
export class SignUpModule {}
