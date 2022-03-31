import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoLibrary } from 'src/app/models/videoLibrary';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
openVideo : boolean = false;
videoLibrary : VideoLibrary = new VideoLibrary();
videoUrl: string = "";
routeVideo : string ="";

  constructor(private sanitizer : DomSanitizer) {};



  ngOnInit(): void {
  }



  hideVideo(){
    this.openVideo = false;
  }



  OpenVideo(videoUrl: string){
    console.log(videoUrl)

   this.openVideo= true
   this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl) as string;

 }

}
