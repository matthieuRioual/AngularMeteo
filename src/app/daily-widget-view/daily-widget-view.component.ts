import { Component, OnInit, Input } from '@angular/core';
import { dailyMeteo } from '../static/Models/dailyMeteo';

@Component({
  selector: 'app-daily-widget-view',
  templateUrl: './daily-widget-view.component.html',
  styleUrls: ['./daily-widget-view.component.css']
})
export class DailyWidgetViewComponent implements OnInit {

  @Input() meteoData: dailyMeteo;

  constructor() { }

  ngOnInit(): void {
  }

}
