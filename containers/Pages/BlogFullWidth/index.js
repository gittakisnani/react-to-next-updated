import React, { Fragment, useState, useEffect } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/BreadCumb'


import Moment from 'moment';

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