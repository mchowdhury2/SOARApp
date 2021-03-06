import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@Angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component';
import { SearchComponent } from './search/search.component';
// import { ChatComponent } from './chat/chat.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MaterialModule } from './material/material.module';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {MatSelectModule} from '@angular/material/select';




import { FilterPipe } from './filter.pipe';
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    FeedComponent,
    SearchComponent,
    // ChatComponent,
    NewIdeaComponent,
    IdeaDetailComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,


    MaterialModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
  ],

  exports: [
  
       MatToolbarModule, 
       MatButtonModule, 
       MatCardModule, 
       MatInputModule, 
       MatDialogModule, 
       MatTableModule, 
       MatMenuModule,
       MatSelectModule,
       MatIconModule,
       FormsModule,
       MatProgressSpinnerModule
       ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
