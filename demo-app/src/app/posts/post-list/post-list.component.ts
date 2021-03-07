import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PostModel } from "../post.model";
import { PostsService } from "../posts.services";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
  posts: PostModel[] = [];
  private postsSub: Subscription
  constructor(public postsService: PostsService){}

  ngOnInit(){
    this.posts = this.postsService.getPosts();
    this.postsService.getPostUpdateListener().subscribe((posts:PostModel[])=>{
      this.posts = posts;
    });
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
}
