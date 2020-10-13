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
    const params = this.route.url.split("/");
    console.log(event.currentTarget.value)
    params[1] = event.currentTarget.value;
    let urlTree = this.route.parseUrl(params.join("/"));
    urlTree.queryParams = {};
    this.route.navigate([urlTree.toString()], { queryParamsHandling: 'preserve' });

  }

}
