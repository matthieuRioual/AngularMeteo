import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'Appmeteo';

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  changelanguage(event: any) {
    let params = this.route.url.split("/");
    console.log(params)
    params[1] = event.target.value;
    console.log(params)
    let urlTree = this.route.parseUrl(params.join("/"));
    urlTree.queryParams = {};
    console.log(urlTree.toString());
    this.route.navigate([urlTree.toString()], { queryParamsHandling: 'preserve' });

  }

}
