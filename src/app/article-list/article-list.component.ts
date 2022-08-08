import { Component, OnInit } from '@angular/core';
import articles from './articles';
import articleData, { type Article } from './articles';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public keyword = '';
  public selectedTags: string[] = [];

  ngOnInit(): void {
    this.selectedTags = this.generateTags(articleData);
  }

  public get searchArticles(): Article[] {
    return articleData.filter(
      article => article.title.toLocaleLowerCase().indexOf(this.keyword.toLocaleLowerCase()) !== -1
    )
  }
  public get filterArticles(): Article[] {
    return this.searchArticles.filter(
      article => article.tags.some(
        tag => this.selectedTags.includes(tag)
      )
    )
  }

  private generateTags(articles: Article[]): string[] {
    return articles.reduce(
      (prev, current) => {
        current.tags.forEach(
          tag => {
            if (!prev.includes(tag)) {
              prev.push(tag);
            }
          }
        )
        return prev;
      },
      [] as string[]
    )
  }

  public get chips(): string[] {
    return this.generateTags(this.searchArticles)
  }

  public setSelectedTags(event: MouseEvent, tag: string): void {
    event.stopPropagation();
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(
        item => item !== tag
      )
    }
    else {
      this.selectedTags.push(tag)
    }
  }

}
