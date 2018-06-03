import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name: string = 'User';

  @ViewChild('searchBar') searchBar: ElementRef;
  @Input() disableImg: Boolean = false;

  constructor(private authService: AuthService) {
    this.authService.authObj.subscribe((v) => {
      if (v && v.firstname) {
        this.name = v.firstname;
      }
    });
  }

  toggleSearchBar() {
    if (this.searchBar.nativeElement.style.width === '') {
      this.searchBar.nativeElement.style.width = '230px';
      this.searchBar.nativeElement.style.paddingLeft =  '10px';
      this.searchBar.nativeElement.style.paddingRight =  '10px';
      this.searchBar.nativeElement.focus();
    }
    else {
      this.searchBar.nativeElement.style.width = '';
      this.searchBar.nativeElement.style.padding =  '';
    }
  }

  logout() {
    this.authService.logout();
  }
}
