import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './/material.module';
import { TeamComponent } from './team/team.component';
import { AppRoutingModule } from './/app-routing.module';
import { PlayersComponent } from './players/players.component';
import { DataService } from './data.service';
import { PlayerComponent } from './player/player.component';
import { FilterPlayerPipe } from './filter-player.pipe';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeamComponent,
    PlayersComponent,
    PlayerComponent,
    FilterPlayerPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
