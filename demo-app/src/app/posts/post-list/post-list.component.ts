import { Component, Input } from "@angular/core";
import { PostModel } from "../post.model";
import { PostsService } from "../posts.services";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts: PostModel[] = [];
  constructor(public postsService: PostsService){}
}
