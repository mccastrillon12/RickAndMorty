import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  filterData='';
  data: any[] = [];


  constructor(private appService: AppService, private router: Router) { }


  ngOnInit(): void {
this.getCharacter();
      }

getCharacter(){

  var characterData;

    for (let i = 1; i <=20; i++){
      this.appService.getCharacter(i).subscribe(
        res => {
          characterData = {
            position: i,
            img: res.image,
            name: res.name,
            gender: res.gender,
            species: res.species,
            location: res.location.name,


          };
            this.data.push(characterData)



        },

      )
    }
  }
  getCar(id: number){
    console.log(id)
    this.router.navigateByUrl(`card/${id}`)

  }

  }
