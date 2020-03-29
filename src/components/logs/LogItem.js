import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const LogItem = ({log}) => {
    return (
        <li className="collection-item">
            <div>
            <a href="#edit-log-modal" className={`model-trigger 
            ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
            <br/>
            <span className='grey-text'>
                <span className="black-text">ID: {log.id}</span>
                <br/>
               <span className='black-text'>{log.tech}</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
            </span>
            <a href="#!"  className="secondary-content"><i className="material-icons grey-text">delete</i></a>
            </div>
        </li>

    );
};
LogItem.protoType = {
    log: PropTypes.object.isRequired
};

export default LogItem;
