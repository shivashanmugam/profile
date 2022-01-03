import { useEffect, useState, useRef } from 'react';
import { Typography, Space, Tag, Avatar, Col, Row, Divider, List, Tabs, Button, Carousel } from 'antd';
import Icon, { GithubFilled, TwitterOutlined, LinkedinOutlined, CaretRightOutlined, PushpinOutlined, TrophyOutlined, DatabaseOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './Home.scss';
import myself from './myself-2.jpeg';
import stackoverflow from './stack.svg';
import { themeConst, themePropConst } from 'Const/themeConst';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { data, JOB_PROPS } from './jobs';
import embibeDesktopOne from './embibe_desktop_1.jpg';
import embibeDesktopTwo from './embibe_desktop_2.jpg';
import embibeDesktopThree from './embibe_desktop_3.jpg';
import embibeDesktopFive from './embibe_desktop_5.jpg';


const { Text, Title } = Typography;
const { TabPane } = Tabs;

export default function Home() {

    const curTheme = useSelector((state) => { return state[themePropConst.THEME][themePropConst.MODE] })
    const [works, setWorks] = useState([])

    return (
        <div className={"home"}>

            <div className={"welcome-message"}>
                <Text >Hi,
                    I am <span className={'name'}>Siva Kannan</span></Text>
                <Row>
                    <Col md={18}>
                        <Space direction="vertical">
                            <Text>
                                <div className={`small-intro ${curTheme}`}>I'm a software engineer emphasis on writing maintainable semantic code, designing beautiful interfaces, and engineering amazing user experiences.<br></br><br></br>
                                Throughout 6 years of my professional career have led many design discussions, engineered complex front-end modules, built libraries, created REST API Server, wrote build configurations and deployment configurations. Had hands-on experience in the full software development cycle.
                                </div>
                            </Text>
                            <Space size="large" direction="horizontal" className={'other-site-links'}>
                                <Text type="secondary"><a target="_blank" href="http://github.com/shivashanmugam/" class="link"><GithubFilled style={{ 'color': curTheme == themeConst.DARK ? 'white' : 'black' }} /> github</a></Text>
                                {/* <Text type="secondary"><a class="link"><TwitterOutlined style={{ 'color': '#5da9dd' }} /> twitter</a></Text> */}
                                <Text type="secondary"><a target="_blank" href="https://stackoverflow.com/users/2264606/siva-kannan" class="link"><StackOverflowIcon /> stackoverflow</a></Text>
                                <Text type="secondary" ><a target="_blank" href="https://www.linkedin.com/in/siva-kannan-28329848/" class="link"><LinkedinOutlined style={{ 'color': '#0073b1' }} /> Linkedin</a></Text>
                                <Text type="secondary"><MailOutlined /> sivashanmugam4444@gmail.com</Text>
                                <Text type="secondary" ><span ><PhoneOutlined className={'rotated-phone'}></PhoneOutlined></span>+91-8508874861</Text>
                            </Space>
                        </Space>
                    </Col>
                    <Col md={6} className={'myself'}>
                        <img src={`${myself}`} />
                    </Col>
                </Row>

            </div>
            <div className={'skills'}>
                <Divider orientation={'left'}><span class="icon-title">🛠️ <Title level={4}>&nbsp;&nbsp;Skills</Title></span></Divider>
                <Row className={"skill-content"}>
                    <Col md={6}><Space direction="vertical"><SkillVertical title={'Languages'} list={['Javascript', 'Nodejs', 'HTML & CSS', 'Typescript', 'C']} /></Space></Col>
                    <Col md={6}><Space><SkillVertical title={'Libraries'} list={['ReactJS', 'Express', 'AngularJS', 'Antd', 'Gatsby']} /></Space></Col>
                    <Col md={6}><Space><SkillVertical title={'Tools'} list={['git', 'Storybook', 'Webpack', 'Puppeteer', 'Grunt & gulp']} /></Space></Col>
                    <Col md={6}><Space><SkillVertical title={'Concepts'} list={['MERN stack', 'JAM stack', 'Test driven development', 'SCRUM', 'CI/CD']} /></Space></Col>
                </Row>
            </div>
            <div className={"work-experience"}>

                <Divider orientation={'left'}><span class="icon-title">💼 <Title level={4}>&nbsp;&nbsp;Professional Experience</Title>  </span></Divider>

                <Row>
                    <Col span={24}>
                        <Tabs tabPosition={'left'} className={'vertical-tab'}>
                            {data.map((d, index) => {
                                return (
                                    <TabPane tab={`${d[JOB_PROPS.COMPANY]}`} key={`${index + 1}`}>
                                        <JobDescription details={data[index]} />
                                    </TabPane>
                                )
                            })}
                        </Tabs>
                    </Col>
                </Row>
            </div>
            <div className={`featured-project ${curTheme}`}>
                <Divider orientation="left"><span className={'icon-title'}>📁 <Title level={4}>&nbsp;&nbsp;Featured Work</Title></span></Divider>
                <Row>
                    <Col md={14}>
                        <div className={'image-slider-big'}>
                            <Carousel>
                                {[embibeDesktopOne, embibeDesktopTwo, embibeDesktopThree, embibeDesktopFive].map(imageEmbibe => {
                                    return (
                                        <img class=" " src={imageEmbibe} />
                                    )
                                })}
                            </Carousel>
                        </div>
                    </Col>
                    <Col md={10} className={"project-description-container"}>
                        <Space direction="vertical">
                            <Title level={2} class="project-title">Embibe educational platform</Title>
                            <Text className={'golden-text'} type="secondary">Awarded as #1 App for Personal Growth in Google play 2021 User choice awards</Text>
                            <div className={`image-slider-text-overlay ${curTheme}`}>
                                At embibe we worked to create world class personlized learning platform for students. Was responsible building test module. Created multiple complex question types during my tenure.
                            </div>
                        </Space>
                    </Col>
                </Row>
            </div>

        </div>
    )
}


export const JobDescription = function ({ details }) {
    return (
        <div className={'job-description'}>
            <Space direction="vertical" size="middle">
                <Text><a class="position-and-company">{details[JOB_PROPS.POSITION]} @ {details[JOB_PROPS.COMPANY]}</a> {details[JOB_PROPS.EXTRA_TITLE]} </Text>
                <Text type="secondary">{details[JOB_PROPS.SPAN]} &nbsp;<Tag><PushpinOutlined /> {details[JOB_PROPS.LOCATION]}</Tag></Text>
                <Space direction="vertical" size="middle">
                    {
                        details[JOB_PROPS.DESCRIPTIVE_LIST].map(d => {
                            return (
                                <Text type="secondary" class="explanatory-item">
                                    <CaretRightOutlined /> <span dangerouslySetInnerHTML={{ __html: d }}></span>
                                </Text>
                            )
                        })
                    }
                </Space>
            </Space>
        </div>
    )
}

export const SkillVertical = function ({ title, list }) {
    return (
        <div class="skill-container">
            <Space direction="vertical">
                <Text type="secondary" className={'title'}>{title}</Text>
                <Space className={"skill-list"} direction="vertical">
                    {list.map(l => {
                        return (<span><span style={{ 'opacity': '0.4' }}></span> {l}</span>)
                    })}
                </Space>
            </Space>

        </div>
    )
}


export const StackOverflowIcon = function () {
    return (
        <img style={{ 'margin-top': '-6px', 'width': '1em' }} src={stackoverflow} />
    )
}