import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth/auth.service';

import { environment } from '../environments/environment';
import { ComponentsModule } from './components/components.module';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './shared/login/login.component';
import { AboutComponent } from './shared/about/about.component';

import { RegisterLocalComponent } from './shared/register-local/register-local.component';
import { ListLocalComponent } from './shared/list-local/list-local.component';
import { EvaluateLocalComponent } from './shared/evaluate-local/evaluate-local.component';
import { FavoriteLocalComponent } from './shared/favorite-local/favorite-local.component';

import { DashboardComponent } from './no-shared/dashboard/dashboard.component';
import { MergeLocalComponent } from './no-shared/merge-local/merge-local.component';
import { NotifyLocalComponent } from './no-shared/notify-local/notify-local.component';
import { UserComponent } from './no-shared/user/user.component';
import { ListCardComponent } from './shared/list-local/list-card/list-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EvaluateScreenComponent } from './shared/evaluate-local/evaluate-screen/evaluate-screen.component';
import { UserActionComponent } from './no-shared/user/user-action/user-action.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import * as firebase from 'firebase';

firebase.initializeApp(environment.firebase);

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        AboutComponent,
        RegisterLocalComponent,
        ListLocalComponent,
        EvaluateLocalComponent,
        DashboardComponent,
        MergeLocalComponent,
        NotifyLocalComponent,
        UserComponent,
        ListCardComponent,
        EvaluateScreenComponent,
        UserActionComponent,
        FavoriteLocalComponent        
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        NgbModule.forRoot(),
        NgxMaskModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        HttpModule,
        NgxPaginationModule,
        ServiceWorkerModule.register('ngsw-worker.js')
    ],
    providers: [AuthService, AngularFirestore],
    bootstrap: [AppComponent]
})
export class AppModule { }
