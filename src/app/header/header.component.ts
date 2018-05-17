import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor(private authService: AuthService) {
  }

  ngAfterViewInit() {
    const searchButton = document.getElementById('searchButton');
    const searchBar = document.getElementById('searchBar');

    searchButton.addEventListener('click', this.toggleSearchBar);
  }
  toggleSearchBar(e) {
    if (searchBar.style.width === '') {
      searchBar.style.width = '230px';
      searchBar.style.paddingLeft =  '10px';
      searchBar.style.paddingRight =  '10px';
      searchBar.focus();
    }
    else {
      searchBar.style.width = '';
      searchBar.style.padding =  '';
    }
  }

  logout() {
    this.authService.logout();
  }
}
