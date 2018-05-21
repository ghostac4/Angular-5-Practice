import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: "app-team",
  templateUrl: "./team.component.html",
  styleUrls: ["./team.component.css"]
})
export class TeamComponent implements OnInit {
  class: string = "";
  teamInfo;
  constructor(private router: Router, private dataService: DataService) {
    this.dataService
      .getTeamData()
      .subscribe(result => (this.teamInfo = result["teaminfo"]));
    dataService.getPlayersDataAsync();
  }

  ngOnInit() {}

  navigate(i) {
    this.router.navigate(["/home/player", i]);
  }

  changeClass(toggle, data1, data2, data3) {
    if (toggle) {
      document.getElementById(data1).classList.add("image-active");
      document.getElementById(data2).classList.add("text-active");
      document.getElementById(data3).classList.add("data-active");
    } else {
      document.getElementById(data1).classList.remove("image-active");
      document.getElementById(data2).classList.remove("text-active");
      document.getElementById(data3).classList.remove("data-active");
    }
  }
}
