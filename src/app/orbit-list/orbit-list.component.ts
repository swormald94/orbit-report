import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {
  warning: boolean = false;

  @Input() satellites?: Satellite[];
  constructor() {
  }

  ngOnInit(): void {
  }

  shouldShowWarning = function (this: any) {
    for (let i = 0; i < this.sourceList.length; i++) {
      if (this.sourceList[i].type === 'Space Debris') {
        this.warning = true;
      } else {
        this.warning = false;
      }
    }
    return this.warning;
  }

}
