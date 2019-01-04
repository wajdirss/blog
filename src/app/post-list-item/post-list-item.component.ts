import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/post.model';
@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveit: number;
  @Input() postCreated:Date;
  @Input() post:Post;
  constructor() { }

  ngOnInit() {
  }
  OnLove(){ 
    this.postLoveit++;
    this.post.loveIts=this.postLoveit;
  }
  onDontLove(){ 
    this.postLoveit--;
    this.post.loveIts=this.postLoveit;
  }
}
