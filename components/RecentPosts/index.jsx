import { useState } from 'react'
import Link from 'next/link';



const RecentPosts = ({ className, articles = [], categories = [] }) => {

    const [Articles, setArticles] = useState(articles)

    return (
        <div className={className} >
            <h3>Altri contenuti - <span>Sentenze</span>  </h3>
            <ul>
                {Articles.map((post, i) => (
                    <li key={i} className="postItem">
                        <div className="postImg">
                            <img src="./../images/logo/manzi_logo_menu.png" alt="" />
                        </div>
                        <div className="postContent">
                            <Link className="readmore" href={'/blog-fullwidth/' + post.id + ''}>{post.attributes.Titolo}</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RecentPosts