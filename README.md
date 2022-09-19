# ShowCaseShop
This example shows how you can greatly improve the perceived performance event if you have a very slow api behind. The API behind this example delayes every request by 2 seconds. 

## Install 
`npm install`

## Run
start mock api with `npm run mock` and frontend with `npm run start`  


## What it does 
While rendering a link component it pushes a preload command for this url into queue. After as soon as the application has nothing to do it starts preloading content this urls and stores the results. So in theory the enrty page is preloaded by ssr and all other page by this system.


## Todo
- add flags for preloading and priority to the link component
- preload only links in the viewport
- maybe add a expire time for the stored content
- look for images in the loaded content and preload them as well
- abuse the angular universal express server as a middleware to bundle requests for every page