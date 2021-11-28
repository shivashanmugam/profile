import { Typography, Space, Tag, Avatar, Col, Row, Divider, List, Tabs, Button, Carousel } from 'antd';
import { themeConst, themePropConst } from 'Const/themeConst';
import { useSelector } from 'react-redux';
import Icon, { GithubFilled, TwitterOutlined, LinkedinOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { StackOverflowIcon } from 'Pages/Home/Home';
import './footer.scss';
const { Text, Title } = Typography;
function Footer() {

    const curTheme = useSelector((state) => { return state[themePropConst.THEME][themePropConst.MODE] })
    return (
        <footer >
            <Space direction="vertical">
                <Space direction="horizontal" size="large">
                    <Text type="secondary"><MailOutlined /> sivashanmugam4444@gmail.com</Text>
                    <Text type="secondary" ><span ><PhoneOutlined className={'rotated-phone'}></PhoneOutlined></span>+91-8508874861</Text>
                </Space>
                <Space size="large" direction="horizontal">

                    <Text className={'footer-icons'} type="secondary"><a target="_blank" href="http://github.com/shivashanmugam/" class="link"><GithubFilled style={{ 'color': curTheme == themeConst.DARK ? 'white' : 'black' }} /></a></Text>
                    {/* <Text type="secondary"><a class="link"><TwitterOutlined style={{ 'color': '#5da9dd' }} /> twitter</a></Text> */}
                    <Text className={'footer-icons'} type="secondary"><a target="_blank" href="https://stackoverflow.com/users/2264606/siva-kannan" class="link"><StackOverflowIcon /></a></Text>
                    <Button size="small" className={'resume'}>Resume</Button>
                    <Text className={'footer-icons'} type="secondary" ><a target="_blank" href="https://www.linkedin.com/in/siva-kannan-28329848/" class="link"><LinkedinOutlined style={{ 'color': '#0073b1' }} /></a></Text>
                    <Text className={'footer-icons'} type="secondary" ><a target="_blank" href="https://twitter.com/_siva_kannan"><TwitterOutlined style={{ 'color': '#5da9dd' }} /></a></Text>

                </Space>
                <Space direction="horizontal" size="large">

                    <a target="_blank" href="https://github.com/shivashanmugam/profile"><Text underline type="secondary">site engineered by siva kannan ( fork here )&#x2197;</Text></a>
                </Space>
            </Space>
        </footer>
    )
}

export default Footer;