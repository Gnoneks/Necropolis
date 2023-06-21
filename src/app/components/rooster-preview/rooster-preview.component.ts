import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rooster-preview',
  templateUrl: './rooster-preview.component.html',
  styleUrls: ['./rooster-preview.component.scss'],
})
export class RoosterPreviewComponent implements OnInit {
  // subscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      console.log(param);
    });
  }
}
