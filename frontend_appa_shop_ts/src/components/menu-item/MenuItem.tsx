import React from 'react';
import './MenuItem.css';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface Props extends RouteComponentProps {
    title: string;
    subTitle?: string;
    imgUrl: string;
    linkUrl: string;
    size?: string;
}

const MenuItem: React.FC<Props> = function ({ title, subTitle, imgUrl, size, history, linkUrl, match }) {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{ backgroundImage: `url(${imgUrl})` }} />
            <div className="content">
                <h1 className="title">{title}</h1>

                <span className="subtitle">{subTitle ? subTitle : 'Shop Now'}</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
