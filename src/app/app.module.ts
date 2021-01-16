import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { IonicStorageModule } from "@ionic/storage";
export const firebaseConfig = {
  apiKey: "AIzaSyBtyA38WCye89JB2wgz280Cp70QDigwFrk",
  authDomain: "note-list-27407.firebaseapp.com",
  databaseURL: "https://note-list-27407.firebaseio.com",
  projectId: "note-list-27407",
  storageBucket: "note-list-27407.appspot.com",
  messagingSenderId: "215924740883",
  appId: "1:215924740883:web:07ab214bf242946514c0e6",
  measurementId: "G-47P9BGHHDD"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireDatabaseModule,],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
