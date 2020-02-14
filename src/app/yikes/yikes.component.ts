import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'; // requête web
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-yikes',
  templateUrl: './yikes.component.html',
  styleUrls: ['./yikes.component.css']
})
export class YikesComponent implements OnInit {
  Variable: any;
  Liste;
  constructor(private Http: HttpClient,private route: ActivatedRoute, private router : Router) { 
    route.paramMap.subscribe(param => {this.Variable = param.get("id");});
    Http.get("http://api.mateimartin.ca:8082/levels").subscribe(Result => {this.Liste = Result;});
  }

  ngOnInit(): void {
  }

}
