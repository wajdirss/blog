import { Component } from '@angular/core';
import { Post } from './model/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [ {
    title: 'cuisine',
    content: 'ywiygudb ouhurhhf yquyffyd iuirp pofvjn iuqguigd bchvn de7iua zasw poj hfgret woiic nbvhfee tfta tertd kuuhuhv apooien mnft qrrs uau ttfw fppdndt',
    loveIts: -4,
    created_at: new Date()
  } ,
  {
    title: 'sport',
    content: 'ywiygudb ouhurhhf yquyffyd iuirp pofvjn iuqguigd bchvn de7iua zasw poj hfgret woiic nbvhfee tfta tertd kuuhuhv apooien mnft qrrs uau ttfw fppdndt',
    loveIts: 1,
    created_at: new Date()
  } ,
  {
    title: 'films',
    content: 'ywiygudb ouhurhhf yquyffyd iuirp pofvjn iuqguigd bchvn de7iua zasw poj hfgret woiic nbvhfee tfta tertd kuuhuhv apooien mnft qrrs uau ttfw fppdndt',
    loveIts: 0,
    created_at: new Date()
  } ,
];
  title = 'blog';
}
