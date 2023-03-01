import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

   constructor(
     private httpService: HttpService
   ){}

   //get all posts using the injected service
   public posts$!: Observable<any[]>;
   componentGetAllPosts(){
      this.posts$ = this.httpService.getAllPosts(); 
   }
 
 
   ngOnInit(): void {
     this.componentGetAllPosts();
   }
}
