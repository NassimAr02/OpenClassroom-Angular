import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass,NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, 
    NgClass,
    UpperCasePipe,
    DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  

  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  SnapText!: string;
  dejaCliquer!: boolean;
  

  ngOnInit(): void {
    this.title ="Archibald";
    this.description = "Mon meilleur ami depuis toujours !";
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.SnapText = "Cliquer";
    this.dejaCliquer = false;

  }
  unSnap(){
    this.faceSnap.removeSnap();
    this.SnapText = 'Oh snap !';
    this.dejaCliquer = false;
  }
  snap(){
    this.faceSnap.addSnap();
    this.SnapText = "Ooops, un Snap !";
    this.dejaCliquer= true;
  }
  onSnap(){
    if(this.dejaCliquer){
      this.unSnap();
    }else{
      this.snap();
    }
  }
}
