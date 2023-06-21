import { Component } from '@angular/core';
import {
  Dialog,
  DialogRef,
  DIALOG_DATA,
  DialogModule,
} from '@angular/cdk/dialog';
import { RoosterCreateDialogComponent } from '../rooster-create-dialog/rooster-create-dialog.component';

@Component({
  selector: 'app-rooster-list',
  templateUrl: './rooster-list.component.html',
  styleUrls: ['./rooster-list.component.scss'],
})
export class RoosterListComponent {
  roosters = ['Rooster test testRooster text test test test lol', 'Rooster2'];

  constructor(public dialog: Dialog) {}

  openRoosterCreationDialog(): void {
    const dialogRef = this.dialog.open(RoosterCreateDialogComponent);

    dialogRef.closed.subscribe(result => {
      console.log('Dialog closed!');
    })
  }
}
