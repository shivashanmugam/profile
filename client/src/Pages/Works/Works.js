import { useEffect, useState, useRef } from 'react';
import { Typography, Space, Tag, Image, Col, Row } from 'antd';
import './works.scss';
import { worksData } from "./data"
import { ErrorBoundary } from 'react-error-boundary'
import { PlayCircleTwoTone, DatabaseTwoTone, ToolOutlined, RightCircleTwoTone, LeftCircleTwoTone } from '@ant-design/icons'

const { Title, Text, Link } = Typography;

const dataBasePath = './data/';

export const WORK_PROP_CONST = {
    TITLE: 'title',
    BANNER: 'banner',
    DESCRIPTION: 'description', //This will be markdown
    FULL_DETAILS: 'full_details',
    DEMO_URL: 'demo_url',
    REPO_URL: 'repo_url',
    TOOL_USED: 'tools_used',
    SCREEN_SHOTS: 'screenshots',
    VIDEO_LINK: 'video_link',
    FOLDER_NAME: 'folder_name'
}

export const Works = function () {
    const [works, setWorks] = useState([])
    const [work, setWork] = useState(null);
    useEffect(() => {
        worksData().then(res => {
            setWorks(res)
            setWork(res[0]);
        })
    }, [])
    return (
        <div className="works-page">
            {work && <div class="works-page__work-card">
                <Row className={"top-portion"}>
                    <Col span={8} className={"banner"}><img src={require(`${dataBasePath}${work[WORK_PROP_CONST.FOLDER_NAME]}/${work[WORK_PROP_CONST.BANNER]}`).default} /></Col>
                    <Col span={16} className={"details"}>
                        <Space direction="vertical" >
                            <Title className={WORK_PROP_CONST.TITLE} level={3}>{work[WORK_PROP_CONST.TITLE]}</Title>
                            <Text className={WORK_PROP_CONST.DESCRIPTION} type={'secondary'}>{work[WORK_PROP_CONST.DESCRIPTION]}</Text>
                            <Space size="large" direction="horizontal"><Link><a target="_blank" href={work[WORK_PROP_CONST.DEMO_URL]}><PlayCircleTwoTone /> Demo</a></Link><Link><a target="_blank" href={work[WORK_PROP_CONST.REPO_URL]} ><DatabaseTwoTone /> Repository</a></Link></Space>
                            <div>
                                <Text type="secondary"><ToolOutlined /> Tools {work[WORK_PROP_CONST.TOOL_USED] &&
                                    work[WORK_PROP_CONST.TOOL_USED].map(tag => {
                                        return (<Tag>{tag}</Tag>)
                                    })
                                }</Text>
                            </div>
                        </Space>
                    </Col>
                </Row>
                <ImageSlider work={work} images={work[WORK_PROP_CONST.SCREEN_SHOTS]} />
            </div>}
        </div>
    )
}


export const ImageSlider = function ({ images, work }) {
    const imagesContainerRef = useRef(null)
    const [isScrollNeeded, setIsScrollNeeded] = useState(false);
    const [imagesLoadedSuccessfully, setImagesLoadedSuccessfully] = useState(false);
    const [imagesFailedToLoad, setImagesFailedToLoad] = useState(0);
    const totalImages = images.length;


    return (
        <div class="image-slider">
            <Row>
                {isScrollNeeded && <Col span={1} className={'slide-arrows'}>
                    <LeftCircleTwoTone class={"slide-left-arrow"} />
                </Col>}
                <Col ref={imagesContainerRef} span={isScrollNeeded ? 22 : 24} className="images-list">
                    <Space direction="horizontal">
                        {images && images.map(image => {
                            return (
                                <ErrorBoundary FallbackComponent={() => { console.log('---siva--'); setImagesFailedToLoad(imagesFailedToLoad + 1) }}>
                                    <Image onLoad={() => { console.log('loaded') }} class=" " height={70} width={100} src={require(`${dataBasePath}${work[WORK_PROP_CONST.FOLDER_NAME]}/screenshots/${image}`)} />
                                </ErrorBoundary>
                            )
                        })}
                    </Space>
                </Col>

                {isScrollNeeded && <Col span={1} className={'slide-arrows'}>
                    <RightCircleTwoTone class={"slide-right-arrow slide-arrows"} />
                </Col>}
            </Row>
        </div>
    )
}

export default Works;

export const work = function ({ title, description, demoLink, repoLink, toolAndTechUsed }) {
    return (
        <>
        </>
    )
}