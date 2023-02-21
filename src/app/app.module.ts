import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SecurityContext } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { BlogModule } from './blog/blog.module';
import { MarkdownModule } from 'ngx-markdown'; 
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(routes, {initialNavigation:'enabledBlocking'}),
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }),
    BrowserAnimationsModule,
    ProfileModule,
    BlogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }