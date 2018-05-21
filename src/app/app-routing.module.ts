import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {PlayersComponent} from '../app/players/players.component';
import { TeamComponent } from './team/team.component';
import { AppComponent } from './app.component';

const routes : Routes =[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:AppComponent,children:[
    {path:'',redirectTo:'team',pathMatch:'full'},
    {path:'team',component:TeamComponent},
    {path:'player/:id',component:PlayersComponent}
  ]}
];
@NgModule({
  exports:[RouterModule],
  imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule{
}

