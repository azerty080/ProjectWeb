import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  searchBar: HTMLElement;

  constructor(private authService: AuthService) {
  }

  ngAfterViewInit() {
    const searchButton = document.getElementById('searchButton');
    this.searchBar = document.getElementById('searchBar');
    console.log(this.searchBar);
    searchButton.addEventListener('click', this.toggleSearchBar);
  }
  toggleSearchBar(e) {
    this.searchBar = document.getElementById('searchBar');
    if (this.searchBar.style.width === '') {
      this.searchBar.style.width = '230px';
      this.searchBar.style.paddingLeft =  '10px';
      this.searchBar.style.paddingRight =  '10px';
      this.searchBar.focus();
    }
    else {
      this.searchBar.style.width = '';
      this.searchBar.style.padding =  '';
    }
  }

  logout() {
    this.authService.logout();
  }
}
