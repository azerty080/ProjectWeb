import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('searchBar') searchBar: ElementRef;

  constructor(private authService: AuthService) {
  }

  ngAfterViewInit() {
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
