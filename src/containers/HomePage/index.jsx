import {Link} from '@reach/router'
import { useState } from 'react'
import ContentWrapper from '../../components/ContentWrapper'
import { Page, PageTitle } from '../../components/Page'
import Header from '../Header'
import { ContentContainer, ContentItem, ContentText, ContentTitle, Tab, TabItem } from './components/styled'

const fakeLable = [
    {label:'关注',to:'/follow'},
    {label:'推荐',to:'/reco'},
    {label:'热榜',to:'/hot'},
    {label:'视频',to:'/video'},
]

function HomePage({title}) {
    const [setSelctedVal] = useState(fakeLable[0].label)

    return (
        <Page className="HomePage">
            <PageTitle>{title}</PageTitle>
            <Header />

            <ContentWrapper>
                <ContentContainer>
                    <Tab>
                        {fakeLable.map((tab)=>(
                            <TabItem 
                                as={Link}
                                key={tab.label}  
                                to={tab.to}
                                onClick={()=>setSelctedVal(tab.label)}
                            >
                                {tab.label}
                            </TabItem>
                        ))}
                    </Tab>
                    <ContentItem>
                        <ContentTitle>有哪些第一眼就感到震撼的图片？</ContentTitle>
                        <ContentText>
                        Van： 1.2006年，世界杯上门将布冯令人匪夷所思的神奇扑救（注意看布冯的体态和手臂） 【图片】 2.1976年叛逃美国的前苏联飞行员别连科，最后一次被克格勃特工拍到的照片 【图片】 3.1983年
                        </ContentText>
                    </ContentItem>
                    <ContentItem>
                        <ContentTitle>有哪些第一眼就感到震撼的图片？</ContentTitle>
                        <ContentText>
                        Van： 1.2006年，世界杯上门将布冯令人匪夷所思的神奇扑救（注意看布冯的体态和手臂） 【图片】 2.1976年叛逃美国的前苏联飞行员别连科，最后一次被克格勃特工拍到的照片 【图片】 3.1983年
                        </ContentText>
                    </ContentItem>
                </ContentContainer>
            </ContentWrapper>
        </Page>
    )
    
}

export default HomePage