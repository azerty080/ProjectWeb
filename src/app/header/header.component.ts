import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, trigger, state, style, transition, animate } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { State } from '../common/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('openNavigation',
      [state('0',
        style({ transform: 'translateX(-50%) translateY(-50%) scale(0)', opacity: '0' })),
        state('1', style({ transform: 'translateX(-50%) translateY(-50%) scale(1)', opacity: '1' })),
        transition('0 => 1', animate('300ms ease-in')),
        transition('1 => 0', animate('300ms ease-out')),
      ]),
  ]
})
export class HeaderComponent {
  name: 'User';
  visible: false;

  @ViewChild('searchBar') searchBar: ElementRef;
  @Input() disableImg: Boolean = false;
  @Input() disableNav: Boolean = false;

  constructor(private authService: AuthService, private store: Store<State>) {
    store.select('responsiveNagivation').subscribe((v) => this.visible = v );
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
    } else {
      this.searchBar.nativeElement.style.width = '';
      this.searchBar.nativeElement.style.padding =  '';
    }
  }

  logout() {
    this.authService.logout();
  }

  toggleNav() {
    this.store.dispatch({ type: 'SET_NAVIGATION' });
  }
}
