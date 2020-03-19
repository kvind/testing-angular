import { Component, OnInit, ViewChild } from '@angular/core';
import { Json2Service } from '../services/json2.service';
import { GenericDialogComponent } from '../generic-dialog/generic-dialog.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor(private json2Service: Json2Service) { }

  @ViewChild(GenericDialogComponent) genericDialog: GenericDialogComponent;

  ngOnInit() {
    // this.json2Service.test();
  }

  onClicked() {
    this.json2Service.test();
  }

  open() {
    this.genericDialog.open();
  }

}
