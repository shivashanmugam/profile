import { Link } from 'react-router-dom';

export const appBasePath = ''

const LINK_TYPE = {
    ANCHOR: 'anchor',
    REACT_ROUTE_LINK: 'react_route_link'
}

export const routerLinks = {

    works: (prop) => {
        return (<>{generateLink(ROUTE_CONST.WORKS, prop.text, prop)}</>)
    },
    home: (prop) => {
        return (<>{generateLink(ROUTE_CONST.HOME, prop.text, prop)}</>)
    },
    blog: (prop) => {
        return (<>{generateLink(ROUTE_CONST.BLOG, prop.text, prop, LINK_TYPE.ANCHOR)}</>)
    },

}

function generateLink(url, text, prop, linkType) {
    if (linkType == LINK_TYPE.ANCHOR) {
        return (<a href={url}>{text ? text : prop.children}</a>)
    } else {
        return (<Link to={url}>{text ? text : prop.children}</Link>)
    }

}

export const ROUTE_CONST = {
    HOME: `/`,
    WORKS: `/works`,
    BLOG: `/blog`
}