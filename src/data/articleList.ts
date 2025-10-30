import { articles, type Article } from './articles';

export type ArticleListItem = Pick<
  Article,
  'id' | 'title' | 'excerpt' | 'image' | 'category' | 'readTime' | 'published' | 'author' | 'views'
>;

export const articleList: ArticleListItem[] = articles.map(
  ({ id, title, excerpt, image, category, readTime, published, author, views }) => ({
    id,
    title,
    excerpt,
    image,
    category,
    readTime,
    published,
    author,
    views,
  })
);

export { articles };
export type { Article };
