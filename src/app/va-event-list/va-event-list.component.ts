import { Component, OnInit } from '@angular/core';
import {eventItem} from './eventItem.model';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-va-event-list',
  templateUrl: './va-event-list.component.html',
  styleUrls: ['./va-event-list.component.css']
})
export class VaEventListComponent implements OnInit {

  events:eventItem[] = new Array();

  constructor(private http: HttpClient) { 

  }

   ngOnInit() {

    this.getIMISEvents().subscribe(data=>this.events=data);

   }


  getIMISEvents (): Observable<eventItem[]> {

    let baseURL = 'https://dev.visualantidote.com/' ;
   // let url = baseURL + '/api/event?StartDateTime=gt:'+new Date().toLocaleDateString();
    let url = baseURL + '/api/event?Status=A';
    let authToken = (document.getElementById('__RequestVerificationToken') as HTMLInputElement).value;
   
  
     return this.http.get(url, {headers: { 'RequestVerificationToken': authToken }})
      .map((res:any)=> {
        let results = res.Items.$values.map ( item => {
            return new eventItem(
                item.Name,
                item.Description, 
                item.EventId,
                item.StartDateTime,
                item.ImageUrl.replace('~',''),
                item.Location.Name
                )
        });
        return results;
    });

  }

   
  

}
