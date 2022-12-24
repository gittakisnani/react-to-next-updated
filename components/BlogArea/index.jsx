import SectionTitle from '../Title'
import Link from 'next/link'

// images
import blog1 from '../../images/blog/1.jpg'
import blog2 from '../../images/blog/2.jpg'
import blog3 from '../../images/blog/3.jpg'
import avatar from '../../images/blog-page/6.jpg'

const blogs = [
    {
        images: blog1, title: 'Appalti pubblici: il caro prezzi ed i recenti provvedimenti legislativi in materia di revisione dei prezzi', meta: {
            avatar: avatar, name: 'Avv. ', time: 'Giu 28/2022'
        }
    },
    {
        images: blog1, title: 'Appalti pubblici: il caro prezzi ed i recenti provvedimenti legislativi in materia di revisione dei prezzi', meta: {
            avatar: avatar, name: 'Avv. ', time: 'Giu 28/2022'
        }
    }, {
        images: blog1, title: 'Appalti pubblici: il caro prezzi ed i recenti provvedimenti legislativi in materia di revisione dei prezzi', meta: {
            avatar: avatar, name: 'Avv. ', time: 'Giu 28/2022'
        }
    },
]


const BlogArea = ({ className, title, subTitle }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle
                            title={title}
                            subTitle={subTitle}
                        />
                    </div>
                    {blogs.map((blog, i) => (
                        <div key={i} className="col-lg-4 col-sm-6 col-12" >
                            <div className="blogWrap">
                                {/*<div className="blogImage">
                                    <img src={blog.images} alt="" />
                                </div>  */}
                                <div className="blogContent">
                                    <h3><Link href="/blog-fullwidth">{blog.title}</Link></h3>
                                    <ul className="blogMeta">

                                        <li>{blog.meta.name}</li>
                                        <li>{blog.meta.time}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default BlogArea