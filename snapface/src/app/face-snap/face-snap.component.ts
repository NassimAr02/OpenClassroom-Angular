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
  
  constructor(private faceSnapsService: FaceSnapsService) { }

  SnapText!: string;
  dejaCliquer!: boolean;
  

  ngOnInit(): void {
    this.SnapText = "Cliquer";
    this.dejaCliquer = false;

  }
  unSnap(){
    this.faceSnap.removeSnap();
    this.SnapText = 'Oh snap !';
    this.dejaCliquer = false;
  }
  snap(){
    this.faceSnap.snapFaceSnapById(this.faceSnap.id);
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
