import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ApplicationRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';

const UrlMap = new Map<string, BehaviorSubject<any>>();

//let instance: UrlDataService;
const STATE_KEY_ITEMS = makeStateKey('items');

@Injectable({
  providedIn: 'root'
})
export class UrlDataService {
  public PreloadQueue: string[] = [];

  public serializedUrlMap: string = 'empty';

  public static instance:UrlDataService;

  
  constructor(
    private http: HttpClient, 
    private appRef: ApplicationRef, 
    private router: Router,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { 
    // client
    if(isPlatformBrowser(this.platformId)){
      this.hydrateClient()
      
      router.events.pipe(filter( e => e instanceof NavigationEnd)).subscribe((e) => {
        this.appRef.isStable.pipe(
          filter(stable => !!stable),
          //take(1) // only one peer page?
        ).subscribe(() => {
          this.processPreload();
        })
      });
    }
  }

  // push to Queue
  public preload(url: string){
    this.PreloadQueue.push(url);

    if(isPlatformServer(this.platformId)){
      this.processPreload();
    }
  }

  // pop first in Queue
  private processPreload(){
    if(!this.PreloadQueue.length ) {
      this.postPreload();
      return;
    }

    const next:string = this.PreloadQueue.shift()!;
    if(!UrlMap.has(next)) this.load(next);
    this.processPreload();
  }

  private postPreload(){
   
  }
  
  public get(url?:string): Observable<any> {
    if (!url) url = this.router.url;
    if (!UrlMap.has(url) || !UrlMap.get(url)?.value) this.load(url);
    
    return UrlMap.get(url)!.asObservable()

      // hydrate server after a simple page load
      .pipe(tap(() => {
        if(isPlatformServer(this.platformId)){
          this.hydrateServer();
        }
      }));
  }  

  private load(url:string = ''): Observable<any> {
    if(!url) url = this.router.url;

    if (!UrlMap.has(url)) {
      UrlMap.set(url, new BehaviorSubject(null));
    }

    this.http.get(`http://localhost:3000${url}`).subscribe(data => {
      const storeEntry = UrlMap.get(url)
      storeEntry?.next(data);
    });

    return UrlMap.get(url)!.asObservable()
  }

  hydrateClient(){
    if(isPlatformBrowser(this.platformId)){
      const data = this.transferState.get(STATE_KEY_ITEMS, <any>'empty');
      if(data !== 'empty') {
        JSON.parse(data).forEach(([key, value]:[string, any]) => {
          UrlMap.set(key, new BehaviorSubject(value));
        });
      }
    }
  }

  hydrateServer(){
    if(isPlatformServer(this.platformId)){
      const x = Array.from(UrlMap.entries())
          .map(([key, value]) => [key, value.value])
          .filter(([, value]) => !!value);

      this.serializedUrlMap = JSON.stringify(x);
      this.transferState.set(STATE_KEY_ITEMS, <any>this.serializedUrlMap);
    };
  }
}
