import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{TraineecurrentComponent} from './traineecurrent/traineecurrent.component'
import{TraineecompletedComponent} from './traineecompleted/traineecompleted.component';
import{TraineelandingComponent} from './traineelanding/traineelanding.component';
import{SearchtabComponent} from './searchtab/searchtab.component';
import{TeamComponent} from './team/team.component';
import{FirstpagebodyComponent} from './firstpagebody/firstpagebody.component';
import{AboutusComponent} from './aboutus/aboutus.component';
import{TrainerlandingComponent} from './trainerlanding/trainerlanding.component';
import{PaymenthistoryComponent} from './paymenthistory/paymenthistory.component';
import{EditskillsComponent} from './editskills/editskills.component';
import{LoginComponent} from './login/login.component';
import{RegisterComponent} from './register/register.component';
import{TrainerregisterComponent} from './trainerregister/trainerregister.component';



const routes: Routes = [
{path:'',component:FirstpagebodyComponent},
{path:'traineecompleted' ,component:TraineecompletedComponent},
{path:'traineelanding' ,component:TraineelandingComponent},
{path:'traineecurrent' ,component:TraineecurrentComponent},
{path:'searchtab' , component:SearchtabComponent},
{path:'team' ,component:TeamComponent},
{path:'firstpagebody', component:FirstpagebodyComponent},
{path:'aboutus',component:AboutusComponent},
{path:'trainerlanding' ,component:TrainerlandingComponent},
{path:'paymenthistory' ,component:PaymenthistoryComponent},
{path:'editskills',component:EditskillsComponent},
{path:'login',component:LoginComponent},
{path:'register' ,component:RegisterComponent},
{path:'trainerregister' ,component:TrainerregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
