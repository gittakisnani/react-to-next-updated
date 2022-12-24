import Image from 'next/image'
import Link from 'next/link'
const footerLinks = [
    {
        title: 'Quick Link', menus: [
            { name: 'Home', route: '/' },
            { name: 'Aree di attività', route: 'practice' },
            { name: 'Persone', route: 'attorneys' },
            { name: 'Sentenze', route: 'blog-left' },
            { name: 'Pubblicazioni', route: 'pubblicazioni' },
        ]
    },

    {
        title: 'Contatti', menus: [
            { name: 'Indirizzo' },
            { name: 'Via Alberico II, n. 33 ', },
            { name: '00193 Roma', },
            { name: 'Tel: 06.3200355', },
            { name: 'Email: info@studiolegalemanzi.it', },

        ]
    }

]

const FooterArea = () => {
    return (
        <footer className="footerArea">
            <div className="footerTopArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footerLogo">
                                <Link href="/">
                                    <Image height={55} width={200} src="https://api.studiolegalemanzi.eu/uploads/STUDIO_LEGALE_MANZI_E_ASSOCIATI_921_200_px_2_8ee13c0afc.png" alt="logo studio legale manzi" />
                                </Link>
                                <p></p>
                            </div>
                        </div>
                        {footerLinks.map((menu, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footerWrap">
                                    <h3>{menu.title}</h3>
                                    <ul>
                                        {menu.menus.map((item, i) => (
                                            <li key={i}>{item.route ? <Link href={`/${item.route}`}>{item.name}</Link> : `${item.name}`}</li>

                                        ))}

                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footerWrap">
                                <h3>Mappa e Orari</h3>
                                <ul>
                                    <li>Mappa</li>
                                    <li> <button className="readmore" onClick={() => window.open("https://goo.gl/maps/1Cd3nCPJtfReAfdw5", '_blank')} >INDICAZIONI STRADALI </button></li>
                                    <li>Orari</li>
                                    <li>LUN-VEN 8:30-13:00 16:00-20:00</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="footerBottomArea">
                <div className="container">
                    <div className="footerBottomContent">
                        <div className="row">
                            <div className="col-md-8 col-sm-10 col-12">
                                <span>  <a href="" className="  readmore iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a>  | © 2022 Studio Legale Manzi. Tutti i diritti riservati</span>
                            </div>

                            {/*  <div className="col-md-4 col-sm-2 col-12">
                                <ul className="socialListFooter">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                                        </div>*/}

                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
export default FooterArea