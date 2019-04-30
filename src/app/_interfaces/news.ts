import {SafeHtml} from '@angular/platform-browser';

export interface INews {
  title: string;
  content: string | SafeHtml;
  published: Date;
}
