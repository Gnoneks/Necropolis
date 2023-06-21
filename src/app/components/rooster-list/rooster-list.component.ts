import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-rooster-list',
  templateUrl: './rooster-list.component.html',
  styleUrls: ['./rooster-list.component.scss'],
})
export class RoosterListComponent {
  roosters = ['Rooster1', 'Rooster2'];


  // handleSelectRooster(roosterName: string) {
  //   console.log('selecting rooster: ' + roosterName);
  //   this.router.navigate([roosterName]);
  // }
}
