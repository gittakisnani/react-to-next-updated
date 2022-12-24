import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import RecentPosts from '../../../components/RecentPosts'
import Moment from 'moment';


const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Dettaglio Pubblicazione' }

]

const PubblicazioniSingle = ({ categories, articles, publication }) => {
    const url_api = "https://api.studiolegalemanzi.eu";
    const [Article, setArticle] = useState([publication]);


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




    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Pubblicazioni"
                breadcumbMenu={breadcumbMenu}
                background={'breadcumb/1.jpg'}
            />
            <div className="blogPostArea ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {Article.map((blog, i) => (
                                <div key={i} className="blogPostWrapper">
                                    <div className="blogPostContent">
                                        <ul className="blogPostMeta">
                                            <Fragment>
                                                {/*<li><em>{blog.attributes.categoria.data.attributes.Nome}</em></li>*/}
                                                <li>{Moment(blog.attributes.publishedAt).format('DD-MM-YYYY')}</li>
                                            </Fragment>

                                        </ul>
                                        <h3>{blog.attributes.Titolo}</h3>
                                        <p>{blog.attributes.Descrizione}</p>


                                    </div>
                                    <div>
                                        <>
                                            <div>
                                                { /*<Document
                                                    file={url_api + blog.attributes.Media.data.attributes.url}
                                                    onLoadSuccess={onSuccess}
                                                >
                                                    <Page pageNumber={pageNumber} />
                            </Document>*/}
                                                <div className="col-12">
                                                    <Link className="readmore" href={url_api + blog.attributes.Media?.data.attributes.url} target="_blank" rel="noopener noreferrer">
                                                        Scarica contenuto
                                                    </Link>
                                                </div>
                                            </div>

                                            {/*renderNavButtons &&
                                                <div className="btnStyle">
                                                    <button
                                                        disabled={pageNumber <= 1}
                                                        onClick={previousPage}
                                                    >
                                                        Pagina precedente
                                                    </button>
                                                    {"  "}
                                                    <button
                                                        disabled={pageNumber === numPages}
                                                        onClick={nextPage}
                                                    >
                                                        Pagina successiva
                                                    </button>
                                                </div>*/}
                                        </>
                                    </div>


                                    {blog.attributes.link ? (
                                        <div className="col-12">
                                            <button type="submit"> <Link className="readmore" href={'' + blog.attributes.link + ''} >Vai al libro</Link></button>
                                        </div>
                                    ) : (<div className="col-12">
                                    </div>)}
                                </div>


                            ))}

                        </div>
                        <RecentPosts
                            categories={categories}
                            articles={articles}
                            className="recentPostWrapper"
                        />
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
export default PubblicazioniSingle