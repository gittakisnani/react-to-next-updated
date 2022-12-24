import React, { Fragment, useState } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import Service from '../../../components/Service'
import ServiceArea from '../../../components/ServiceArea'
import FooterArea from '../../../components/FooterArea'
// images
import { ServiziConfig } from '../../../services-config/servizi-studio';

const aboutText = [
    { text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,' },
    { text: 'and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum' },
]




const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Servizi Legali' }
]

const PracticePage = () => {
    const [services, setservices] = useState(ServiziConfig())

    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea " />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Servizi dello studio"
                breadcumbMenu={breadcumbMenu}
                background={'breadcumb/1.jpg'}
            />
            <Service className="serviceArea" />
            <ServiceArea
                className="ourServiceArea ourServiceAreaStyleThree bgFFF"
                title="Servizi"
                subTitle="Aree di competenza"
                services={services}
            />
            {  /*   <PricingTable
                className="pricingTableArea"
                title="Pricing Table"
                subTitle="Our Pricing Plan"
            />
            <Testmonial
                className="testmonialArea pt100"
    />
     <NewsLetter
                className="newsLetterArea"
            />
    */}

            <FooterArea />
        </Fragment>
    )
}
export default PracticePage