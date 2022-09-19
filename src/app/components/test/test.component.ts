import { Component } from '@angular/core';
import { UrlDataService } from 'src/services/url-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  data$ =  this.urlDataService.get('/test');

  constructor(private urlDataService: UrlDataService){}

}


