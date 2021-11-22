import { useEffect, useState, useRef } from 'react';
import { Typography, Space, Tag, Image, Col, Row, Divider } from 'antd';
import './works.scss';
import imageNotFound from './image_404.jpg'
import { worksData } from "./data"
import { ErrorBoundary } from 'react-error-boundary'
import { PlayCircleFilled, PlayCircleOutlined, DatabaseOutlined, ToolOutlined, RightCircleTwoTone, LeftCircleTwoTone, YoutubeOutlined } from '@ant-design/icons'

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
    useEffect(() => {
        worksData().then(res => {
            setWorks(res)
        })
    }, [])

    const isExternalLinkPresent = function (work) {
        return work[WORK_PROP_CONST.DEMO_URL] || work[WORK_PROP_CONST.REPO_URL] || work[WORK_PROP_CONST.VIDEO_LINK]
    }

    const isWorkCardOddIndex = function (index) {
        return index % 2 == 0
    }

    return (
        <div className="works-page">
            {works.map((work, index) => {
                return (<><Divider orientation={isWorkCardOddIndex(index) ? "left" : "right"}>{index + 1} . {work[WORK_PROP_CONST.TITLE]}</Divider><div class="works-page__work-card">
                    <Row className={"top-portion"}>
                        {isWorkCardOddIndex(index) && <Col span={8} className={"banner"}><img src={require(`${dataBasePath}${work[WORK_PROP_CONST.FOLDER_NAME]}/${work[WORK_PROP_CONST.BANNER]}`).default} /></Col>}
                        <Col span={16} className={"details"}>
                            <Space direction="vertical" >
                                {/* <Title className={WORK_PROP_CONST.TITLE} level={4}>{work[WORK_PROP_CONST.TITLE]}</Title> */}
                                <Text className={WORK_PROP_CONST.DESCRIPTION} type={'secondary'}>{work[WORK_PROP_CONST.DESCRIPTION]}</Text>
                                {isExternalLinkPresent(work) && <Space size="large" direction="horizontal">
                                    {work[WORK_PROP_CONST.DEMO_URL] && <Link><a target="_blank" href={work[WORK_PROP_CONST.DEMO_URL]}><PlayCircleOutlined /> Demo&#x2197;</a></Link>}
                                    {work[WORK_PROP_CONST.REPO_URL] && <Link><a target="_blank" href={work[WORK_PROP_CONST.REPO_URL]} ><DatabaseOutlined /> Repository&#x2197;</a></Link>}
                                    {work[WORK_PROP_CONST.VIDEO_LINK] && <Text class="video" ><a target="_blank" href={work[WORK_PROP_CONST.VIDEO_LINK]}><YoutubeOutlined />  Video&#x2197;</a></Text>}
                                </Space>}
                                <div>
                                    <Text type="secondary"><ToolOutlined /> Tools {work[WORK_PROP_CONST.TOOL_USED] &&
                                        work[WORK_PROP_CONST.TOOL_USED].map(tag => {
                                            return (<Tag>{tag}</Tag>)
                                        })
                                    }</Text>
                                </div>
                            </Space>
                        </Col>
                        {!isWorkCardOddIndex(index) && <Col span={8} className={"banner"}><img src={require(`${dataBasePath}${work[WORK_PROP_CONST.FOLDER_NAME]}/${work[WORK_PROP_CONST.BANNER]}`).default} /></Col>}
                    </Row>
                    {/* {work[WORK_PROP_CONST.SCREEN_SHOTS].length > 0 && <ImageSlider work={work} images={work[WORK_PROP_CONST.SCREEN_SHOTS]} />} */}
                </div></>)
            })}
        </div>
    )
}


export const ImageSlider = function ({ images, work }) {
    const imagesContainerRef = useRef(null)
    const [isScrollNeeded, setIsScrollNeeded] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState({
        success: 0,
        failed: 0
    });
    const totalImages = images.length;

    const evaluateIsScrollNeeded = function () {
        console.log(imagesContainerRef)
        setIsScrollNeeded(imagesContainerRef.current.scrollWidth > imagesContainerRef.current.clientWidth, 0);
        console.log(imagesContainerRef.current.scrollWidth > imagesContainerRef.current.clientWidth, 0)
    }

    const dynamicallyImportingScreenShots = function (screenshots) {
        let importedScreenshots = [];
        screenshots.forEach(screenshot => {
            let imported;
            try {
                imported = require(`${dataBasePath}${work[WORK_PROP_CONST.FOLDER_NAME]}/screenshots/${screenshot}`).default
                importedScreenshots.push(imported)
            } catch (err) {
                importedScreenshots.push(imageNotFound)
                console.log(err);
            }
        })
        return importedScreenshots;
    }

    const imageLoaded = function (status) {
        const imagesLoadedTemp = { ...imagesLoaded };
        if (status) imagesLoadedTemp.success++;
        else if (status == false) imagesLoadedTemp.failed++;
        setImagesLoaded(imagesLoadedTemp);
        if ((imagesLoadedTemp.success + imagesLoadedTemp.failed) == totalImages) {
            evaluateIsScrollNeeded();
        }
    }

    const onScrollArrowClick = function (isRightArrow) {
        const element = imagesContainerRef.current;
        let portionToScroll = element.scrollWidth - element.offsetWidth;
        let currentlyScrolled = element.scrollLeft;
        const scrollMovementWidth = portionToScroll / 2; // 4 is reasonable number 
        if (isRightArrow) {
            if (currentlyScrolled < portionToScroll) { element.scroll(currentlyScrolled + scrollMovementWidth, 0) }
        } else {
            if (currentlyScrolled > 0) { element.scroll(currentlyScrolled - scrollMovementWidth, 0) }
        }
    }

    const importedScreenshots = dynamicallyImportingScreenShots(images);

    return (
        <div class="image-slider">
            <Row>
                {isScrollNeeded && <Col span={1} className={'slide-arrows'}>
                    <LeftCircleTwoTone onClick={() => { onScrollArrowClick(false) }} class={"slide-left-arrow"} />
                </Col>}
                <Col ref={imagesContainerRef} span={isScrollNeeded ? 22 : 24} className="images-list">
                    <Space direction="horizontal">
                        {importedScreenshots && importedScreenshots.map(image => {
                            return (
                                <Image onLoad={() => { imageLoaded(true) }} fallback={imageNotFound} onError={() => { imageLoaded(false) }} class=" " height={70} width={100} src={image} />
                            )
                        })}
                    </Space>
                </Col>

                {isScrollNeeded && <Col span={1} className={'slide-arrows'}>
                    <RightCircleTwoTone onClick={() => { onScrollArrowClick(true) }} class={"slide-right-arrow slide-arrows"} />
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