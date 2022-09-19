import { Component } from '@angular/core';
import { UrlDataService } from 'src/services/url-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data$ =  this.urlDataService.get('/');

  constructor(private urlDataService: UrlDataService){}

}


