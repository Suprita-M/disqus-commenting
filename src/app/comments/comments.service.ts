import { Injectable } from '@angular/core';
import * as commentsDummyData from '../../comments-json/comments';
import { Comment } from './comment.model';
import { UserService } from '../user-profile/user.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private userService: UserService) {}

  private comments: Comment[] = [];

  getComments(): Comment[] {
    this.comments = commentsDummyData.comments;
    return this.comments;
  }

  addComment(root: Comment = null, message = '') {
    const comment: Comment = {
      commenter: this.userService.getLoggedInUser().username,
      message: message,
      time: new Date(),
      thumbnailUrl: this.userService.getLoggedInUser().thumbnailUrl,
      replyRequested: false
    };

    if (!root) {
      this.comments.push(comment);
    } else {
      if (!root.replies) {
        root.replies = [];
      }
      root.replies.push(comment);
    }
  }

  resetReplyRequests() {
    this.clearAllReplyRequests(this.comments);
  }

  private clearAllReplyRequests(comments) {
    comments.forEach(_comment => {
      _comment.replyRequested = false;
      if (_comment.replies) {
        this.clearAllReplyRequests(_comment.replies);
      }
    });
  }
}
