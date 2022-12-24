import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../images/logo/manzi_logo_menu.png'

const RecentPublication = ({ className, publications }) => {

    return (
        <div className={className}>
            <h3>Altri contenuti - <span>Pubblicazioni</span> </h3>


            <ul>
                {publications.map((post, i) => (
                    <li key={i} className="postItem">
                        <div className="postImg">
                            <Image src={Logo} alt="" />
                        </div>
                        <div className="postContent">
                            <Link className="readmore" href={'/pubblicazioni-single/' + post.id + ''}>{post.attributes.Titolo}</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default RecentPublication