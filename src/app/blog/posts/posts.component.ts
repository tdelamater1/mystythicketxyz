import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  post?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let articleName = this.route.snapshot.paramMap.get('article');
    this.post = `assets/posts/${articleName}.md`;
  }
}
