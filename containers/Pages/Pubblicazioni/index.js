import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/BreadCumb'
import FooterArea from '../../../components/FooterArea'
import RecentPosts from '../../../components/RecentPosts'
import Pubblicazioni from '../../../components/Pubblicazioni'
// images
const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Pubblicazioni' }
]

const BlogLeftPage = ({ publications, categories, articles }) => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Pubblicazioni"
                breadcumbMenu={breadcumbMenu}
                background={'breadcumb/1.jpg'}
            />
            <div className="blogPostArea blogPostLeftArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <Pubblicazioni publications={publications} />
                        </div>
                        <div className="col-lg-4">
                            <aside>

                                {/*
                                <SearchSidebar className="searchSidebarWrapper" />
                                <CetagorySidebar
                                    title="Cetagory"
                                    className="cetagoryWrap" />
                                      <Tags />
                                <Instagram />
                                    
                                    */}
                                <RecentPosts categories={categories} articles={articles} className="recentPostWrapper" />

                            </aside>
                        </div>

                    </div>


                </div>
            </div>

            <FooterArea />
        </Fragment>
    )
}
export default BlogLeftPage