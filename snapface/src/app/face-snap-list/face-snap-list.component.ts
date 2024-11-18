import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap';
import { HeaderComponent } from '../header/header.component';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    
    
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps!: FaceSnap[];
  constructor(private faceSnapService: FaceSnapsService) {}
  ngOnInit() : void {
    this.faceSnaps = this.faceSnapService.getFaceSnaps();
    this.faceSnaps[1].setLocation("à la montagne")

}

}
