import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { PostModel } from "../post.model";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<PostModel>();

  onAddPost(form: NgForm){
    if (form.invalid) {return;}
    const post: PostModel = {
      title: form.value.titleTag,
      content: form.value.contentTag
    };
    this.postCreated.emit(post);
  }
}
