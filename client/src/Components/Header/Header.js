import React from 'react';
import { Row, Col, Button, Space, Menu, Dropdown, Typography } from 'antd';
import { routerLinks, ROUTE_CONST } from 'appConst';
import { useSelector, useDispatch } from 'react-redux';
import './header.scss';
import { withRouter } from 'react-router';
import { themeConst, themeTextconst, themePropConst } from 'Const/themeConst';
import { setTheme } from 'Reducers/themeSlice';
const { Link, Title, Text } = Typography;



const Header = function () {
    const dispatch = useDispatch()
    const curTheme = useSelector((state) => { console.log(state); return state[themePropConst.THEME][themePropConst.MODE] })
    const themeToSwitch = curTheme == themeConst.LIGHT ? themeConst.DARK : themeConst.LIGHT
    console.log('theme');
    console.log(curTheme);
    return (
        <header>
            <Row justify="center" >
                <Col md={24} sm={24} >
                    <Space direction="horizontal" size="small">
                        <Logo />
                        <MenuLink text="WORKS" Component={routerLinks.works} />
                        <MenuLink text="BLOG" Component={routerLinks.blog} />
                        <Button onClick={() => { dispatch(setTheme(themeToSwitch)) }} style={{ 'margin-top': '-7px', 'margin-left': '300px' }} size="medium" shape="round">{themeTextconst[themeToSwitch]}</Button>
                    </Space>
                </Col>
            </Row>
        </header>
    )
}

export default Header;

function Logo() {
    return (
        <div className="header-wrapper">
            <Title level={3} ><routerLinks.home><Text>Siva Kannan</Text></routerLinks.home></Title>{/* style={{ "color": "rgb(204, 214, 246)" }} */}
        </div>
    )
}

function MenuLink({ text, Component, type }) {

    const style = {
        padding: '0px 2vw',
        cursor: 'pointer',
        letterSpacing: '2px',
        // color: 'rgb(204, 214, 246)'
    }

    return (
        <>
            <Title level={5} >
                <Component>
                    <Text style={style} >{text}</Text>
                </Component>
            </Title>
        </>
    )
}