import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'; 
import { DataService } from '../data.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  @Input() player;
  selectedRole:string='All Roles';
  selectedNationality:string ='All Nationality';
  selectedBattingStyle:string = 'All Batting Style';
  id:string;
  playersData;
  filteredPlayers = new Array();
  constructor(private route:ActivatedRoute,private router:Router,private dataService:DataService) { 
  }

  ngOnInit() {
    this.playersData = this.dataService.getPlayersData();
    console.log(this.playersData);
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.filterPlayerById(this.id);
  }

  filterPlayerById(id){
    for(let i=0;i<this.playersData.length;i++){
      let player = this.playersData[i];
      if(player['team_id'] == id){
        this.filteredPlayers.push(player);
      }    
    }
    this.player = this.filteredPlayers[0];  
  }

  selectedPlayer(player){
    this.player = player;   
  }
}
