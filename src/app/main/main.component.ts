import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

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
