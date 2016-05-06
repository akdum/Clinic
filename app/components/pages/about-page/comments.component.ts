import { Component, Input } from '@angular/core';
import { IComment } from '../../../data-interfaces/icomment';
import { CommentViewModel } from '../../../data-interfaces/comment.viewmodel';

@Component({
    selector: 'comments-component',
    templateUrl: '../app/templates/comments.component.html'
})
export class CommentsComponent {
    private _comments: CommentViewModel[]=[];
    
    @Input()
    set comments(comments:IComment[]) {
        if (comments && comments.length > 0) {
            this._comments = comments.map(val=> new CommentViewModel(val.theme,
                                                                     val.short, 
                                                                     val.extended, 
                                                                     false));
            this._comments.forEach(val=>{
                if (val.extended == '-') {
                    val.isExpanded = true;
                    val.extended = "";
                }
            });                                                          
        }       
    }
    
    toggle(comment:CommentViewModel) {
        comment.isExpanded = !comment.isExpanded;
    }

}