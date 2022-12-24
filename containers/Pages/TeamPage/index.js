import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import TeamMember from '../../../components/TeamMember'
import FooterArea from '../../../components/FooterArea'
// images
const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Persone' }
]


const TeamPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Persone"
                breadcumbMenu={breadcumbMenu}
                background={'breadcumb/1.jpg'}
            />
            <TeamMember
                title="Avvocati e Collaboratori"
                subTitle="Persone"
                className="teamArea teamAreaStyleTwo"
                noGutters={true}
            />
            <FooterArea />
        </Fragment>
    )
}
export default TeamPage