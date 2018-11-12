import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AddMemoryUitComponent } from './add-memory-uit/add-memory-uit.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    AddMemoryUitComponent,
    UserprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, data: { animation: 'login' } },
      { path: 'signup', component: SignupComponent, data: { animation: 'signup' } },
      { path: 'user', component: UserComponent}, //canActivate: [AuthGuard] },
	  { path: 'addmemoryunit', component: AddMemoryUitComponent},
	  { path: 'myprofile', component: UserprofileComponent},
      { path: '**', redirectTo: '/login' }
    ], {
        useHash: true
      })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
