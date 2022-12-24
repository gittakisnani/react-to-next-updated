import React, { Fragment, useState, useEffect } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import SearchSidebar from '../../../components/SearchSidebar'
import CetagorySidebar from '../../../components/CetagorySidebar'
import RecentPosts from '../../../components/RecentPosts'
import BlogPost from '../../../components/BlogPost'
import Tags from '../../../components/Tags'
import Instagram from '../../../components/Instagram'


import Moment from 'moment';
import { TOKEN } from '../../../services/API';
import { fetcher } from '../../../utils/fetcher'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Dettaglio Sentenze' }

]


const BlogFullWidth = ({ article  }) => {

    //pdf start
    //pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [renderNavButtons, setRenderNavButtons] = useState(false);

    const onSuccess = ({ numPages }) => {
        setNumPages(numPages);
        // alert('PDF document loaded successfully!');
        setPageNumber(1);
        setRenderNavButtons(true);
    }

    const changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
    const previousPage = () => { changePage(-1); }
    const nextPage = () => { changePage(+1); }
    //pdf end 
    const url_api = "https://api.studiolegalemanzi.eu";
    const [Article, setArticle] = useState([]);
    let ArticleTmp = [];

    useEffect(() => {
        if (article) {
            ArticleTmp.push(article)
            setArticle(ArticleTmp);
        }
    }, [article])



    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Sentenze"
                breadcumbMenu={breadcumbMenu}
                background={'breadcumb/1.jpg'}
            />
            <div className="blogPostArea blogFullWidth">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {Article.map((blog, i) => (
                                <div key={i} className="blogPostWrapper">
                                    <div className="blogPostContent">
                                        <ul className="blogPostMeta">
                                            <Fragment>
                                                { /*<li><em>{blog.attributes.categoria.data.attributes.Nome}</em></li>*/}
                                                <li>{Moment(blog.attributes.publishedAt).format('DD-MM-YYYY')}</li>
                                            </Fragment>

                                        </ul>
                                        <h3>{blog.attributes.Titolo}</h3>
                                        <p>{blog.attributes.Descrizione}</p>
                                    </div>
                                    {blog.attributes.media.data.attributes.url ? (
                                        <div className="col-12">
                                            <a className="readmore" href={url_api + blog.attributes.media.data.attributes.url} target="_blank" rel="noopener noreferrer">
                                                Scarica contenuto
                                            </a>
                                        </div>
                                    ) : (<div className="col-12">

                                    </div>)}


                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>
            { /*   <NewsLetter
                className="newsLetterArea"
            />
                            <FooterArea />*/}
        </Fragment>
    )
}
export default BlogFullWidth


export async function getStaticProps() {
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