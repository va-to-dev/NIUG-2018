import { Component, OnInit, Input } from '@angular/core';
import { eventItem } from '../eventItem.model';

@Component({
  selector: 'app-va-event-item',
  templateUrl: './va-event-item.component.html',
  styleUrls: ['./va-event-item.component.css']
})
export class VaEventItemComponent implements OnInit {
  @Input() event: eventItem;

  constructor() { }

  ngOnInit() {
  }

}
