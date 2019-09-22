import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    @ViewChild('openModal', { static: false }) openModal: ElementRef;
    data: Date = new Date();
    focus;
    focus1;
    user = {
        email: '',
        password: ''
    };
    constructor(private router: Router, private authService: AuthService, private modalService: NgbModal) { }

    signInWithEmail(content) {
        this.authService.signInRegular(this.user.email, this.user.password)
            .then((res) => {
                console.log(res);
                this.router.navigate(['no-shared/dashboard']);
            })
            .catch((error) => {
                this.modalService.open(content, { });
            });
    }
    closeModal(content) {
        this.modalService.dismissAll(content);
    }
    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
