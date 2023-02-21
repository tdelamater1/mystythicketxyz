import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileModule } from '../profile/profile.module';
import { BlogIntroComponent } from './blog-intro/blog-intro.component';
import { BlogFooterComponent } from './blog-footer/blog-footer.component';


@NgModule({
  declarations: [
    BlogComponent,
    PostsComponent,
    BlogIntroComponent,
    BlogFooterComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MarkdownModule,
    ProfileModule 
  ]
})
export class BlogModule { }
