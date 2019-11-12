import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
declare var device;
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

import { Location, DOCUMENT } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';

var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    private _router: Subscription;
    @ViewChild(NavbarComponent, { static: true }) navbar: NavbarComponent;
    

    // tslint:disable-next-line: max-line-length
    constructor(private renderer: Renderer,
        private router: Router,
        @Inject(DOCUMENT)
        private document: any,
        private element: ElementRef,
        public location: Location) { }

    ngOnInit() {
        document.addEventListener("deviceready", function() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
            }, false);
        // Controle da navbar
        var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 100;
            } else {
                window.document.activeElement.scrollTop = 100;
            }
            this.navbar.sidebarClose();

            this.renderer.listenGlobal('window', 'scroll', (event) => {
                const number = window.scrollY;
                let _location = this.location.path();
                _location = _location.split('/')[2];

                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });
    }
}
