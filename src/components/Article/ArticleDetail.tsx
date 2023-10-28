import Link from 'next/link';

import Article from '@/server/types/article'
import { cagtegoryArticlesURL } from '@/src/lib/markdown/siteMap';

import MarkdownComponent from '../Markdown';
import PublishedAtComponent from './PunlishedAt';
import ArticleTagComponent from './ArticleTag';

type Props = { article: Article }
const ArticleDetail = async ({ article }: Props) => {

    return (
        <article className="flex flex-2 shadow my-4 md:w-3/4">
          {/* <TableOfContents content={article.content} /> */}
          <div className="bg-white p-6 w-full">
            <div className="text-4xl font-bold hover:text-gray-700 pb-4">{ article?.title }</div>
            <Link href={cagtegoryArticlesURL(article.category.slug)} className="text-blue-700 text-sm font-bold pb-4">{ article?.category?.name }</Link>
            <ArticleTagComponent tags={article.tags} />
            <MarkdownComponent content={article.content}/>
            <PublishedAtComponent date={article.updatedAt} />
          </div>
        </article>
      )
}

export default ArticleDetail;