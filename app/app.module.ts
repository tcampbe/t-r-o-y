import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './views/login/login.component';
import { HomeViewComponent } from './views/home/home.component';
import { CatalogViewComponent } from './views/catalog/catalog.component';

const routes: Route[] = [
  {path: 'login', component: LoginViewComponent},
  {path: 'home', component: HomeViewComponent},
  {path: 'catalog', component: CatalogViewComponent}
];

@NgModule({
  declarations: [ 
  AppComponent,
  LoginViewComponent,
  HomeViewComponent,
  CatalogViewComponent],
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    RouterModule.forRoot(routes)
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
