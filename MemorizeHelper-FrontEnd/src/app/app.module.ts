import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AddMemoryUitComponent } from './add-memory-uit/add-memory-uit.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ViewUnitComponent } from './view-unit/view-unit.component';
import { EditUnitComponent } from './edit-unit/edit-unit.component';
import { SearchComponent } from './search/search.component';
import {PopupModule} from 'ng2-opd-popup';
import { PopularMemUnitsComponent } from './popular-mem-units/popular-mem-units.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    AddMemoryUitComponent,
    UserprofileComponent,
    ViewUnitComponent,
    EditUnitComponent,
    SearchComponent,
    PopularMemUnitsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    PopupModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, data: { animation: 'login' } },
      { path: 'signup', component: SignupComponent, data: { animation: 'signup' } },
      { path: 'user', component: UserComponent}, //canActivate: [AuthGuard] },
	  { path: 'addmemoryunit', component: AddMemoryUitComponent},
	  { path: 'myprofile', component: UserprofileComponent},
	  { path: 'viewunit', component: ViewUnitComponent},
	  { path: 'editunit', component: EditUnitComponent},
      { path: 'search', component: SearchComponent},
      { path: 'popular-mem-units', component: PopularMemUnitsComponent},
      { path: '**', redirectTo: '/login' }
    ], {
        useHash: true
      })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
