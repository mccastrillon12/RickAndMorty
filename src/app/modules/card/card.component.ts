import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  character: any = '';
  characterImg= '';
  characterName='';
  characterSpecies='';
  characterGender='';
  characterLocation='';


  constructor(private appService: AppService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      params => {
        this.getCharacter(params['id'])
      }
    )
   }

  ngOnInit(): void {
  }
  getCharacter(id:any){
    this.appService.getCharacter(id).subscribe(
      res => {
        this.character= res;
        this.characterImg = res.image;
        this.characterName = res.name;
        this.characterSpecies = res.species;
        this.characterGender = res.gender;
        this.characterLocation = res.location.name



      }
    )
  }
}
