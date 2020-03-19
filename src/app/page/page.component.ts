import { Component, Inject, OnInit } from '@angular/core';
import { Logger, LOGGER_TOKEN } from '../services/placeholder.abstract';
import { Json2Service } from '../services/json2.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(@Inject(LOGGER_TOKEN) private logger: Logger, private json2Service: Json2Service) { }

  title: string;

  ngOnInit() {
    this.title = `${this.logger.somme(3, 5)} est la valeur de mon titre`;
    this.json2Service.test();
  }

}
