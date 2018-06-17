import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VoterComponent } from './07-integration-testing/01-voter/voter.component';
import { TodosComponent } from './07-integration-testing/02-todos/todos.component';
import { UserDetailsComponent } from './07-integration-testing/03-user-details/user-details.component';


import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';
import { HighlightDirective } from './highlight.directive';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    HighlightDirective,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
