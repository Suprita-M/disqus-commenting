import { Component} from '@angular/core';
import { CommentsService } from './comments.service';
import { Comment } from './comment.model';
import { User } from '../user-profile/user.model';
import { UserService } from '../user-profile/user.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  comments: Comment[];
  commentRequested = false;
  user: User;

  constructor(public service: CommentsService, public userService: UserService) {
    this.comments = service.getComments();
    this.user = this.userService.getLoggedInUser();
  }

  addNewComment(element: HTMLTextAreaElement) {
    this.service.addComment(null, element.value);
    element.value = '';
  }

  replyRequest(comment: Comment) {
    this.service.resetReplyRequests();
    comment.replyRequested = true;
  }
}
