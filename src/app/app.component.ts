import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { LocalSaveService } from './shared/services/local-save.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Appmeteo';

  constructor(private route: Router, private auth: AuthService,private storage: LocalSaveService) { }

  ngOnInit(): void {
  }

  changelanguage(event: any) {
    const params = this.route.url.split("/");
    params[1] = event.currentTarget.value;
    let urlTree = this.route.parseUrl(params.join("/"));
    urlTree.queryParams = {};
    this.route.navigate([urlTree.toString()], { queryParamsHandling: 'preserve' });
  }

  onDisconnect() {
    this.auth.setLogedIn(false);
    this.storage.clear();
    this.route.navigate(['/login']);

  }

}
