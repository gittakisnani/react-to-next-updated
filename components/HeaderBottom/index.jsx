import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeaderBottom = props => {
    const [search, setSearch] = useState()
    const [responsive, setResponsive] = useState(false)
    const [trigger, setTrigger] = useState(false)
    const submitHandler = e => {
        e.preventDefault()
        console.log(search)
    }
    const clickHandler = () => {
        setTrigger(!trigger)
    }
    const responsiveHandler = () => {
        setResponsive(!responsive)
    }

    
    return (

        <div className={props.className}>
            <div className="container">
                <div className="headerBottomMainWrapper">
                    <div className="row">
                        <div className="col-lg-3 col-md-10 col-sm-6 col-8">
                            <div className="logo">
                                <Link href="/">
                                    <Image height={55} width={400} src="https://api.studiolegalemanzi.eu/uploads/STUDIO_LEGALE_MANZI_E_ASSOCIATI_921_200_px_2_8ee13c0afc.png" alt="logo studio legale manzi" />
                                </Link>
                            </div>

                        </div>
                        <div className={responsive ? "col-lg-8 responsiveWrapper active" : "col-lg-8 responsiveWrapper"}>
                            <ul className="mainMenuWrap">
                                <li><Link href='/'>Home</Link>
                                    {/* <ul className="subMenu">
                                        <li><Link href='/'>Home One</Link></li>
                                        <li><Link href='/home-two'>Home Two</Link></li>
                                        <li><Link href='/home-three'>Home Three</Link></li>
    </ul> */}
                                </li>
                                <li><Link href='/about'>Lo Studio</Link>
                                    <ul className="subMenu">
                                        <li><Link href='/about'>Lo Studio</Link></li>
                                        <li><Link href='/case-stadies'>Galleria </Link></li>
                                    </ul>
                                </li>
                                <li><Link href='/attorneys'>Persone</Link>
                                    {/* <ul className="subMenu">
                                        <li><Link href='/attorneys'>Attorneys</Link></li>
                                        <li><Link href='/attorneys-single'>Attorneys single</Link></li>
</ul>*/}
                                </li>

                                { /*   <li><Link href='/case-stadies'>Cases</Link>
                                    <ul className="subMenu">
                                        <li><Link href='/case-stadies'>Cases</Link></li>
                                        <li><Link href='/case-stadies-details'>Case single</Link></li>
                                    </ul>
</li>*/}

                                <li><Link href='/blog-left'>Attività</Link>
                                    <ul className="subMenu">
                                        <li><Link href='/practice'>Aree di attività</Link></li>
                                        <li><Link href='/pubblicazioni'>Pubblicazioni</Link></li>
                                        <li><Link href='/blog-left'>Selezione di sentenze</Link></li>
                                        { /*  <li><Link href='/blog-right'>Blog Right sidebar</Link></li>
<li><Link href='/blog-fullwidth'>Blog FullWidth</Link></li>*/}
                                    </ul>
                                </li>

                                <li><Link href='/contact'>Contatti</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-1 col-md-2 col-sm-6 col-4">
                            <div className="searchMenuWrapper">
                                {/*   <div className="searchWrap">
                                    <i onClick={clickHandler} className="fa fa-search"></i>

                                    <div className={trigger ? 'searchform active' : 'searchform'}>
                                        <form onSubmit={submitHandler}>
                                            <input
                                                placeholder="search here"
                                                value={search}
                                                type="text"
                                                onChange={event => setSearch(event.target.value)}
                                            />
                                            <button><i className="fa fa-search"></i></button>
</form>
                                    </div>
                                </div>*/}
                                <div onClick={responsiveHandler} className="responsiveTrigger">
                                    <span className="first"></span>
                                    <span className="second"></span>
                                    <span className="third"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderBottom