import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Add this
import { ProfileComponent } from './profile/profile.component';
import { FeedComponent } from './feed/feed.component'; // Add this
import { SearchComponent } from './search/search.component'; // Add this
import { ChatComponent } from './chat/chat.component'; // Add this
import { NewIdeaComponent } from './new-idea/new-idea.component'; // Add this


const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'profile', component: ProfileComponent},
  {path : 'feed', component: FeedComponent},
  {path : 'search', component: SearchComponent},
  {path : 'chat', component: ChatComponent},
  {path : 'new-idea', component: NewIdeaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
