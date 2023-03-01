import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { HttpService } from './http.service';
import { Http2Service } from './http2.service';


const routes: Routes = [
    
  {path: "", loadChildren: () => import("./main/main.module").then(m => m.MainModule)},
  {path: "second", providers:[{provide: HttpService, useExisting: Http2Service}] ,loadChildren: () => import("./second/second.module").then(m => m.SecondModule)},

]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }