import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  teamData;
  playerData;
  constructor(private http:Http) { }

  getTeamData():Observable<any[]>{
    return this.http.get('./assets/JSON/newTeamInfo.json')
     .map(x => x.json())
     .map(data => this.teamData = data)
   }

   getPlayersDataAsync(){
   this.http.get('./assets/JSON/newPlayerInfo.json')
     .map(x => x.json())
     .map(data => this.playerData = data).subscribe(result => this.playerData=result['Playersinfo'])
   }

   getPlayersData(){
     return this.playerData;
   }
}
