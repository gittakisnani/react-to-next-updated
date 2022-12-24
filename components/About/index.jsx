import Link from 'next/link'
import 'react-modal-video/scss/modal-video.scss'
import Image from 'next/image'

const About = ({ subTitle, title, videoId, className, signature, pragraphs, images, images3, orderLast, button_profile }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className="row">
                    <div className={orderLast ? `${orderLast} col col-lg-6` : 'col col-lg-6'}>
                        <div className="aboutImageWrap">
                            <Image height={400} src={images} alt="" />

                        </div>
                        <div className="aboutImageWrap">
                            {images3 && <Image height={400} src={images3} alt="" />}
                        </div>


                    </div>
                    <div className="col-lg-6">
                        <div className="aboutContent">
                            {subTitle && <span>{subTitle}</span>}
                            <h2>{title}</h2>
                            {pragraphs.map((pragraph, i) => (
                                <p key={i}>{pragraph.text}</p>
                            ))}


                            {button_profile ? (<div className="btnStyle">
                                <Link href='/attorneys-single/andrea-manzi'> Vai a Profilo </Link>
                            </div>) : (

                                <div className="btnStyle">
                                    <Link href='/about'>Più sullo studio...</Link>
                                </div>
                            )}

                            {/*signature && <div className="signature">
                                <img src={signature} alt="" />
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About