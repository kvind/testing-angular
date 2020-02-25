import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildTestComponent implements OnInit {

  @Input() inputObs: Observable<string>;

  constructor() { }

  ngOnInit() {
  }

}
