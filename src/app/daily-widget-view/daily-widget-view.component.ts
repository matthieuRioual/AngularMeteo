import { Component, OnInit, Input } from '@angular/core';
import { DailyMeteo } from '../shared/models/DailyMeteo';

@Component({
  selector: 'app-daily-widget-view',
  templateUrl: './daily-widget-view.component.html',
  styleUrls: ['./daily-widget-view.component.css']
})
export class DailyWidgetViewComponent implements OnInit {

  @Input() displayMethod: string;
  @Input() meteoData: DailyMeteo;

  constructor() { }

  ngOnInit(): void {
  }

}
