import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlDataService {

  private UrlMap = new Map<string, BehaviorSubject<any>>();
  private PreloadQueue: string[] = [];
  
  constructor(private http: HttpClient, private appRef: ApplicationRef, private router: Router) { 
    

    router.events.pipe(filter( e => e instanceof NavigationEnd)).subscribe((e) => {
      this.appRef.isStable.pipe(
        filter(stable => !!stable),
        //take(1) // only one peer page?
      ).subscribe(() => {
        this.processPreload();
      })
    });
  }

  

  // push to Queue
  public preload(url: string){
    this.PreloadQueue.push(url);
  }

  // pop first in Queue
  private processPreload(){
    if(!this.PreloadQueue.length ) {
      this.postPreload();
      return;
    }

    const next:string = this.PreloadQueue.shift()!;

    if(!this.UrlMap.has(next)) this.load(next);


    this.processPreload();
  }

  private postPreload(){
    console.log("finished preload");
    console.log(this.PreloadQueue);
  }

  
  public get(url:string = ''): Observable<any> {
    if(!url) url = this.router.url;

    if (!this.UrlMap.has(url)) this.load(url);
    

    return this.UrlMap.get(url)!.asObservable();
  }  




  private load(url:string = ''): Observable<any> {
    if(!url) url = this.router.url;
    
    if (!this.UrlMap.has(url)) {
      this.UrlMap.set(url, new BehaviorSubject(null));
    }

    this.http.get(`http://localhost:3000${url}`).subscribe(data => {
      const storeEntry = this.UrlMap.get(url)

      console.log("store entry", url, storeEntry);

      storeEntry?.next(data);

      console.log("store entry after", storeEntry?.value);
    });

    
    return this.UrlMap.get(url)!.asObservable();
  }
}
