import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FirstpagebodyComponent } from './firstpagebody/firstpagebody.component';
import { TeamComponent } from './team/team.component';
import { TraineelandingComponent } from './traineelanding/traineelanding.component';
import { TrainerlandingComponent } from './trainerlanding/trainerlanding.component';
import { TraineecompletedComponent } from './traineecompleted/traineecompleted.component';
import { TraineecurrentComponent } from './traineecurrent/traineecurrent.component';
import { SearchtabComponent } from './searchtab/searchtab.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { EditskillsComponent } from './editskills/editskills.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TraineeheaderComponent } from './traineeheader/traineeheader.component';
import { TrainerheaderComponent } from './trainerheader/trainerheader.component';
import { TrainerregisterComponent } from './trainerregister/trainerregister.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstpagebodyComponent,
    TeamComponent,
    TraineelandingComponent,
    TrainerlandingComponent,
    TraineecompletedComponent,
    TraineecurrentComponent,
    SearchtabComponent,
    AboutusComponent,
    PaymenthistoryComponent,
    EditskillsComponent,
    LoginComponent,
    RegisterComponent,
    TraineeheaderComponent,
    TrainerheaderComponent,
    TrainerregisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
