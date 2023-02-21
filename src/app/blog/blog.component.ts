import { Component, OnInit } from '@angular/core';
import { Post } from "src/app/blog/post"; 

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  // Add this post array:
  // You can modify this list into a structure that can dynamically update as you add posts. 

  posts: Post[] = [
    { 
      "title": "Remap Keys in Debian Linux using XKB", 
      "description": "The better alternative to Xmodmap",
      "link": "/blog/posts/XKB"
    },
    { 
      "title": "Desing Pattern: Visitor", 
      "description": "The double dispatch pattern",
      "link": "/blog/posts/visitor_pattern"
    },
    { 
      "title": "OAuth2", 
      "description": "The different Authorization Flows AKA Grant Types",
      "link": "/blog/posts/OAuth2"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}