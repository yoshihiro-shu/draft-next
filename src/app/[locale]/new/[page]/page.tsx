import ArticleList from '@/src/components/Article/ArticleList'
import Article from '@/server/types/article';
import Pager from '@/server/types/pager';

import apiClient from '@/server/client';
import getNewArticlesApi from '@/server/api/newArticles';
import configs from '@/config/index';


type NewArticlesData = {
    articles: Article[],
    pager: Pager,
  }

const NewArticles = async({
    params: { page },
  }: {
    params: { page: string }
  }) => {
  const res = await apiClient.Get<NewArticlesData>(configs.BackendAPI + getNewArticlesApi(page));

  const articles: Article[] = res.data.articles;
  const pager: Pager = res.data.pager;

  const getLink = (slug: number): string => {
    // TODO Page RoutingのPlugin的なものを作る
    return `/new/${slug}`
  }

  if (articles.length === 0) {
    return <div>Articles not found</div>
  }

  return (
    <ArticleList articles={articles}/>
  )
}

export default NewArticles;