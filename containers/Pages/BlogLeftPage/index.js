import React, { Fragment } from 'react'
import Link from 'next/link'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import SearchSidebar from '../../../components/SearchSidebar'
import CetagorySidebar from '../../../components/CetagorySidebar'
import RecentPublication from '../../../components/RecentPublication'
import BlogPost from '../../../components/BlogPost'
import Tags from '../../../components/Tags'
import Instagram from '../../../components/Instagram'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Sentenze' }
]

const BlogLeftPage = ({ articles = [], categories = [], publications }) => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Sentenze"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className="blogPostArea blogPostLeftArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <BlogPost articles={articles} categories={categories} />
                        </div>
                        <div className="col-lg-4">
                            <aside>

                                {/*   <CetagorySidebar
                                    title="Categoria"
                                    className="cetagoryWrap" />
                                <SearchSidebar className="searchSidebarWrapper" />
                                <RecentPosts className="recentPostWrapper" />
                                <Tags/>
    <Instagram/>*/}
                                <RecentPublication publications={publications} className="recentPostWrapper" />
                            </aside>
                        </div>

                    </div>
                </div>
            </div>
            { /*<NewsLetter
                className="newsLetterArea"
    />*/}
            <FooterArea />
        </Fragment>
    )
}
export default BlogLeftPage

