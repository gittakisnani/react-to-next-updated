import { Fragment } from 'react';
import Link from 'next/link';
import Moment from 'moment';

import blog1 from '../../images/blog-page/1.jpg'
import blog2 from '../../images/blog-page/2.jpg'
import blog3 from '../../images/blog-page/3.jpg'
import blog4 from '../../images/blog-page/4.jpg'
import blog5 from '../../images/blog-page/5.jpg'
import avatar from '../../images/blog-page/6.jpg'






const Pubblicazioni = ({ publications = []}) => {
    return (
        <Fragment>

            {publications.map((pubblicazione, i) => (
                <div key={i} className="blogPostWrapper">
                    <div className="blogPostContent">
                        <ul className="blogPostMeta">
                            <Fragment>
                                {/* <li><em>{pubblicazione.attributes.categoria.data.attributes.Nome}</em></li>*/}
                                <li>{Moment(pubblicazione.attributes.publishedAt).format('DD-MM-YYYY')}</li>
                            </Fragment>

                        </ul>
                        <h3><Link href={'/pubblicazioni-single/' + pubblicazione.id + ''}>{pubblicazione.attributes.Titolo}</Link></h3>
                        <p>{pubblicazione.attributes.Descrizione}</p>
                        <Link className="readmore" href={'/pubblicazioni-single/' + pubblicazione.id + ''}>Vai alla pubblicazione completa</Link>
                    </div>
                </div>

            ))}
        </Fragment>
    )
}

{/** <div key={i} className="blogPostWrapper">
                    <div className="blogPostContent">
                        <ul className="blogPostMeta">
                            <Fragment>
                                <li>{blog.attributes.autore.data.attributes.username} </li>
                                <li><em>{blog.attributes.categoria.data.attributes.Nome}</em></li>
                                <li>{blog.attributes.publishedAt}</li>
                            </Fragment>

                        </ul>
                        <h3><Link to='blog-details'>{blog.attributes.Titolo}</Link></h3>
                        <p>{blog.atributes.Descrizione}</p>

                        <Link className="readmore" to='blog-details'>Read more..</Link>
                    </div>
                </div> */}
export default Pubblicazioni