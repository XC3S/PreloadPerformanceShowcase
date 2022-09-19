import { Component, NgZone } from '@angular/core';
import { UrlDataService } from 'src/services/url-data.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-base',
  template: '',
  styleUrls: []
})
export class BaseComponent {
  protected data = null;

  constructor(private urlDataService: UrlDataService, private zone: NgZone){
    this.urlDataService.get().pipe(
        tap((val) => {
            this.zone.run(() => {
                this.data = val;
            })        
        })
    ).subscribe()
  }
}
