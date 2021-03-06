import { Component } from "@angular/core";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    {title: 'First post', content: '1111111'},
    {title: 'Second post', content: '222'},
    {title: 'Third post', content: '3333'},
  ]
}
