import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlDataService } from 'src/services/url-data.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  public hardData = 0;

  public data$: Observable<any> = this.urlDataService.get('/products')?.pipe(
    tap((val) => {
      console.log('xxcvb', val);
      this.cd.detectChanges();
    })
  )
  
  //undefined; //= this.urlDataService.get('/products');

  constructor(private urlDataService: UrlDataService, private cd: ChangeDetectorRef){}



  ngOnInit(){
    this.data$ = this.urlDataService.get('/products')?.pipe(
      tap((val) => {
        console.log('xxcvb', val);
        this.hardData = val?.length;

        
      })
    )
    /*
    ?.subscribe(val => {
      console.log('xxcvb', val);
      this.cd.markForCheck();
    })
    */
  }
}
