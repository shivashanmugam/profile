import { Link } from 'react-router-dom';

export const appBasePath = ''

export const routerLinks = {

    works: (prop) => {
        return (<>{generateLink(ROUTE_CONST.WORKS, prop.text, prop)}</>)
    },
    home: (prop) => {
        return (<>{generateLink(ROUTE_CONST.HOME, prop.text, prop)}</>)
    },
    blog: (prop) => {
        return (<>{generateLink(ROUTE_CONST.BLOG, prop.text, prop)}</>)
    },

}

function generateLink(url, text, prop) {
    return (<Link to={url}>{text ? text : prop.children}</Link>)
}

export const ROUTE_CONST = {
    HOME: `/`,
    WORKS: `/works`,
    BLOG: `/blog`
}