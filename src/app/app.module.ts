import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxPaginationModule} from 'ngx-pagination';
import { VaEventListComponent } from './va-event-list/va-event-list.component';
import { VaEventItemComponent } from './va-event-list/va-event-item/va-event-item.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    VaEventListComponent,
    VaEventItemComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,NgxPaginationModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
