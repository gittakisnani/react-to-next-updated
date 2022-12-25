import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/BreadCumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import SearchSidebar from '../../../components/SearchSidebar'
import CetagorySidebar from '../../../components/CetagorySidebar'
import RecentPosts from '../../../components/RecentPosts'
import BlogPost from '../../../components/BlogPost'
import Tags from '../../../components/Tags'
import Instagram from '../../../components/Instagram'
// images
const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'News' }
]

const BlogRightPage = ({ articles = [], categories = [], sideBarCategories = []}) => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="News"
                breadcumbMenu={breadcumbMenu}
                background={'breadcumb/1.jpg'}
            />
            <div className="blogPostArea blogPostLeftArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <BlogPost articles={articles} categories={categories} />
                        </div>
                        <div className="col-lg-4">
                            <aside>
                                <SearchSidebar className="searchSidebarWrapper" />
                                <CetagorySidebar
                                    title="Cetagory"
                                    className="cetagoryWrap" 
                                    categories={sideBarCategories}    
                                    />
                                <RecentPosts categories={categories} articles={categories} className="recentPostWrapper" />
                                <Tags />
                                <Instagram />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea />
        </Fragment>
    )
}
export default BlogRightPage