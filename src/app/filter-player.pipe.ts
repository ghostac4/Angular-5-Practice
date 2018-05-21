import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPlayer'
})
export class FilterPlayerPipe implements PipeTransform {

  transform(value: any[], selectedRole: string,selectedBattingStyle:string,
    selectedNationality:string): any[] {
      if(selectedRole == 'All Roles' && selectedBattingStyle == 'All Batting Style'
    && selectedNationality == 'All Nationality'){
      console.log(value);
      return value;
    }else{

      if(selectedRole != 'All Roles'){
        value = this.filterFromList(value,selectedRole,'player_role');
      }

      if(selectedBattingStyle != 'All Batting Style'){
        value = this.filterFromList(value,selectedBattingStyle,'player_batting_style');
      }

      if(selectedNationality != 'All Nationality'){
        value = this.filterFromList(value,selectedNationality,'player_nationality');
      }
      
      return value;
    }
  }

  filterFromList(value:any[],section:string,option:string):any[]{
    let filteredList = new Array();

    for(let i=0;i<value.length;i++){
      let player = value[i];
      if(player[option] == section){
        filteredList.push(player);
      }
    }
    return filteredList;
  }

}
