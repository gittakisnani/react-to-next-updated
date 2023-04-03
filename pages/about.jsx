import HeadMeta from '../components/HeadMeta';
import AboutPage from '../containers/Pages/AboutPage'
import { TOKEN } from '../services/API';
import { fetcher } from '../utils/fetcher';
const about = ({ articles, categories }) => {
  return (
    <>
      <HeadMeta />
      <AboutPage categories={categories} articles={articles} />
    </>
  )
}

export default about;


export async function getServerSideProps() {
  const token = TOKEN();
  const catsToken = 'Bearer 4a7ebd6bb78eeed5c7a47988b1a67685b43eaec012c9baedf04f1616486150c2f80f3105f594e3453a204c946426a111e00d4931a75a85618ee472f9cdd0b3ce173bb5e483fbf40bc2864c34f5afc8c9dd976d79d211cb09256c6ea4694b121b2d5fc2861f66ca7d2197f4a917e7f90c909d53aa75e4a81d531ccc66220216c0'
  const articles = await fetcher('articolos?populate=*', token);
  const categories = await fetcher('articolos?populate=*', catsToken);


  return {
      props: {
          categories,
          articles
      }
  }
}