import React, { Fragment, useState, useEffect } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/BreadCumb'
import BannerSidebar from '../../../components/BannerSidebar'
import SingleContentArea from '../../../components/SingleContentArea'

// images

// config file 
import { ServiziConfig } from '../../../services-config/servizi-studio';
import { useRouter } from 'next/router'


const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Servizi', route: '/practice' },
    { name: 'Servizio dettaglio' }
]



const PracticeSinglePage = () => {
    const router = useRouter();
    const id = router.query?.id;
    const Allservice = ServiziConfig()
    const [service, setService] = useState({})



    useEffect(() => {
        const found = Allservice?.find(obj => {
            console.log('obj', obj)
            return obj.id == id;
        });

        setService(found);
        console.log('service  found :', service);



    }, [id]);


    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea " />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Dettagli Servizio"
                breadcumbMenu={breadcumbMenu}
                background={'breadcumb/1.jpg'}
            />
            <div className="singleArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <aside className=" pr25">
                                <BannerSidebar
                                    image={service?.image}
                                    className="bannerWrapper"
                                />
                                {/* <CetagorySidebar
                                    title="Category"
                                    className="cetagoryWrap"
    />*/}
                            </aside>
                        </div>
                        <div className="col-lg-8">
                            <SingleContentArea
                                title={service?.title}
                                content={service?.content}
                                className="singleContentArea"
                                image={service?.image}
                                avatar={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
            { /*    <NewsLetter
                className="newsLetterArea"
            />
<FooterArea />*/}
        </Fragment>
    )
}
export default PracticeSinglePage