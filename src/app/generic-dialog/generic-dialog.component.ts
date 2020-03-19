import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.scss']
})
export class GenericDialogComponent implements OnInit {

  @Input() template: TemplateRef<any>;

  @Input() config: MatDialogConfig;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  open() {
    this.dialog.open(this.template, this.config);
  }

}
