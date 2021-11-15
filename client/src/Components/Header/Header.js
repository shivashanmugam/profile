import React from 'react';
import { Row, Col, Button, Space, Menu, Dropdown, Typography } from 'antd';
import { routerLinks, ROUTE_CONST } from 'appConst';

import './header.scss';
const { Link, Title, Text } = Typography;


export default function () {
    return (
        <header>
            <Row justify="center" >
                <Col md={12} sm={24} >
                    <Space direction="horizontal" size="small">
                        <Logo />
                        <MenuLink text="WORKS" Component={routerLinks.works} />
                        <MenuLink text="BLOG" Component={routerLinks.blog} />
                    </Space>
                </Col>
            </Row>
        </header>
    )
}

function Logo() {
    return (
        <div className="header-wrapper">
            <h1><routerLinks.home><span style={{ "color": "black" }}>Siva Kannan</span></routerLinks.home></h1>
        </div>
    )
}

function MenuLink({ text, Component }) {

    const style = {
        padding: '0px 2vw',
        cursor: 'pointer',
        letterSpacing: '2px'
    }

    return (
        <>
            <Title level={5} ><Component><Text style={style} type="secondary">{text}</Text></Component></Title>
        </>
    )
}