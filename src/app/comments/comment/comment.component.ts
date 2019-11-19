import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommentsService } from '../comments.service';
import { Comment } from '../comment.model';
import { UserService } from 'src/app/user-profile/user.service';
import { User } from 'src/app/user-profile/user.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input() comment: Comment;
  @Output() replyRequest = new EventEmitter();
  user: User;

  constructor(public service: CommentsService, public userService: UserService) {
      this.user = userService.getLoggedInUser();
   }

  showReply() {
    this.replyRequest.emit(this.comment);
    this.comment.replyRequested = true;
    setTimeout(() => {
      const replyBox: HTMLElement = document.querySelector('.add-reply textarea');
      replyBox.focus();
    }, 100);
  }

  addNewComment(element: HTMLTextAreaElement) {
    this.service.addComment(this.comment, element.value);
    this.comment.replyRequested = false;
  }

  reply(comment) {
    this.service.resetReplyRequests();
    comment.replyRequested = true;
  }

}
