export class Comment {
    commenter: string;
    message: String;
    time: Date;
    thumbnailUrl ? = '';
    replies?: Array<Comment> = [];
    replyRequested: boolean;
}
