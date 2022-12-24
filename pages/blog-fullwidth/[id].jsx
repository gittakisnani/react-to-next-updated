import HeadMeta from '../../components/HeadMeta';
import BlogFullWidth from '../../containers/Pages/BlogFullWidth'
import { TOKEN } from '../../services/API';
import { fetcher } from '../../utils/fetcher';

const BlogFullWidthPage = ({ article }) => {
  return (
    <>
      <HeadMeta />
      <BlogFullWidth article={article} />
    </>
  )
}

export default BlogFullWidthPage


export async function getStaticProps(context) {
  const token = TOKEN();
  //Fetching Single Article
  const article = await fetcher(`articolos/${context.params.id}?populate=*`, token);

  return {
      props: {
        article
      }
  }
}

export async function getStaticPaths() {
  const token = TOKEN();
  const articles = await fetcher('articolos?populate=*', token);


  return {
    paths: articles.map(article => ({ params: { id: String(article.id) } })),
    fallback: false
  }
}