import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comments/comment/comment.component';
import { RelativeTimePipe } from './comments/comment/relative-time.pipe';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentComponent,
    RelativeTimePipe,
    UserProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
