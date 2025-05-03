import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-home',
  imports: [ RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  games: any = []
  constructor(
    private GamesService: GamesService
  ) { }
  ngOnInit(): void {
    this.setGames()
    //this.playersIcons = Object.values(icons) //offline
  }
  setGames(){
    this.GamesService.getGames().subscribe((data)=>{
      this.games = this.setLogo(data)
      console.log(data)
    })
  }

  setLogo(data: any){
    data.forEach( (element : any) => {
      element.homeLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/"+element.game.home.name+".png"
      element.awayLogo = "https://lexfitcode.github.io/dummieweb/logos%20mlb/"+element.game.away.name+".png"
    });
    return data
  }
}
