import { Component } from '@angular/core';
import { FaceSnapComponent }   from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  faceSnaps!: FaceSnap[];

  ngOnInit() : void {
    this.faceSnaps = [
      new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      new Date(),
      0,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    ),
    new FaceSnap(
      
    )
    
  
];
this.faceSnaps[1].setLocation('à la montagne')
}

}
