import { Component, OnInit, OnDestroy, HostListener, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})
@Injectable()
export class ComponentsComponent implements OnInit, OnDestroy {
    data: Date = new Date();
    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;
    deferredPrompt: any;
    showButton = false;

    state_icon_primary = true;


    @HostListener('window:beforeinstallprompt', ['$event'])
    onbeforeinstallprompt(e) {
        console.log(e);
        this.deferredPrompt = e;
        this.showButton = true;
    }
    addToHomeScreen() {
        // hide our user interface that shows our A2HS button
        this.showButton = false;
        // Show the prompt
        this.deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        this.deferredPrompt.userChoice
            .then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                this.deferredPrompt = null;
            });
    }

    ngOnInit() {
        //  var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('component-page');
    }
    ngOnDestroy() {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('component-page');
    }
}
