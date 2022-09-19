import { Component, Input, OnInit } from '@angular/core';
import { UrlDataService } from 'src/services/url-data.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() href = "/";

  constructor(private urlDataService: UrlDataService) {}

  ngOnInit(): void {
    this.preload();  
  }

  preload(){
    this.urlDataService.preload(this.href);
  }

}
