import Link from "next/link"

const HeaderTop = props => {
    return (
        <div className={props.className}>
            <div className="container">
                <div className="headerTopMainWrapper">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 col-12 col-lg-3">
                            <ul className="d-flex accountLoginArea">
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i>Via Alberico II, 33 00193 Roma</li>
                            </ul>
                        </div>
                        <div className="col-md-7 col-sm-12 col-12 col-lg-7">
                            <ul className="headerContact">
                                <li><i className="fa fa-phone"></i>06.3200355</li>
                                <li><i className="fa fa-clock-o"></i>LUN-VEN 8:30-13:00 16:00-20:00</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-12">
                            <div className="btnStyle btnStyle2 text-right">
                                <Link href="/contact">Contattaci</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderTop