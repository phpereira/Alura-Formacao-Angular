import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
    declarations: [SignInComponent, SignUpComponent],
    imports: [FormsModule, ReactiveFormsModule, CommonModule, VMessageModule, RouterModule]
})
export class HomeModule {

}