import{ Fragment } from 'react'
import Link from 'next/link';
import Moment from 'moment';

import blog1 from '../../images/blog-page/1.jpg'
import blog2 from '../../images/blog-page/2.jpg'
import blog3 from '../../images/blog-page/3.jpg'
import blog4 from '../../images/blog-page/4.jpg'
import blog5 from '../../images/blog-page/5.jpg'
import avatar from '../../images/blog-page/6.jpg'
import { fetcher } from '../../utils/fetcher';






const blogPost = [

    {
        image: blog1,
        title: ' Il caro prezzi ed i recenti provvedimenti legislativi in materia di revisione dei prezzi',
        text: 'L\’istituto della revisione dei prezzi è stato oggetto di diverse riforme nel corso degli anni, giacché lo stesso dopo essere stato soppresso dall’art. 3, co.1, del D.L. 11 luglio 1992 n.333, è stato dapprima sostituito – con un meccanismo affine solo in parte al precedente (il c.d. prezzo chiuso) – dal D.Lgs. n. 163/2006 ',
        meta: [
            { avatar: avatar, name: 'Avv ', level: 'Appalti pubblici', date: 'Giu 28/2022' }
        ]

    },
    {
        image: blog1,
        title: ' Il caro prezzi ed i recenti provvedimenti legislativi in materia di revisione dei prezzi',
        text: 'L\’istituto della revisione dei prezzi è stato oggetto di diverse riforme nel corso degli anni, giacché lo stesso dopo essere stato soppresso dall’art. 3, co.1, del D.L. 11 luglio 1992 n.333, è stato dapprima sostituito – con un meccanismo affine solo in parte al precedente (il c.d. prezzo chiuso) – dal D.Lgs. n. 163/2006 ',
        meta: [
            { avatar: avatar, name: 'Avv ', level: 'Appalti pubblici', date: 'Giu 28/2022' }
        ]

    }, {
        image: blog1,
        title: ' Il caro prezzi ed i recenti provvedimenti legislativi in materia di revisione dei prezzi',
        text: 'L\’istituto della revisione dei prezzi è stato oggetto di diverse riforme nel corso degli anni, giacché lo stesso dopo essere stato soppresso dall’art. 3, co.1, del D.L. 11 luglio 1992 n.333, è stato dapprima sostituito – con un meccanismo affine solo in parte al precedente (il c.d. prezzo chiuso) – dal D.Lgs. n. 163/2006 ',
        meta: [
            { avatar: avatar, name: 'Avv ', level: 'Appalti pubblici', date: 'Giu 28/2022' }
        ]

    },
]
const BlogPost = ({ articles = [] }) => {
    return (
        <Fragment>

            {articles.map((blog, i) => (
                <div key={i} className="blogPostWrapper">
                    <div className="blogPostContent">
                        <ul className="blogPostMeta">
                            <Fragment>
                                { /*<li><em>{blog.attributes.categoria.data.attributes.Nome}</em></li>*/}
                                <li>{Moment(blog.attributes.publishedAt).format('DD-MM-YYYY')}</li>
                            </Fragment>

                        </ul>
                        <h3><Link href={'/blog-fullwidth/' + blog.id + ''}>{blog.attributes.Titolo}</Link></h3>
                        <p>{blog.attributes.estratto}</p>
                        <Link className="readmore" href={'/blog-fullwidth/' + blog.id + ''}>Vai all articolo completo...</Link>
                    </div>
                </div>

            ))}
        </Fragment>
    )
}

export default BlogPost


