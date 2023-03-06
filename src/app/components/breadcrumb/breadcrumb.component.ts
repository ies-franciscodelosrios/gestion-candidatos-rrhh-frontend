import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';

interface Breadcrumb {
  path: string;
  label: string | any;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  public breadcrumbs: Breadcrumb[] =[
  ];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(() => this.activatedRoute),
      map(route => {
        const breadcrumbs:any = [];
        let url = '';
        route.pathFromRoot.forEach(route => {
          if (route.snapshot.url.length > 0) {
            const path = route.snapshot.url.map(segment => segment.path).join('/');
            url += `/${path}`;
            if (route.snapshot.data['breadcrumb']) {
              const breadcrumb = {
                label: route.snapshot.data['breadcrumb'],
                path: url
              };
              breadcrumbs.push(breadcrumb);
            }
          }
        });
        return breadcrumbs;
      })
    ).subscribe(breadcrumbs => {
      console.log(breadcrumbs)
      this.breadcrumbs = breadcrumbs;
    });
  }

  ngOnInit(): void {
  }

}
