import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {deleteLog, setCurrent} from "../../actions/logAction";
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({log, deleteLog, setCurrent}) => {
    const onDelete = () => {
        deleteLog(log.id);
        M.toast({html: 'Log deleted'});
    };
    return (
        <li className="collection-item">
            <div>
            <a href="#edit-log-modal" className={`model-trigger 
            ${log.attention ? 'red-text' : 'blue-text'}`}
            onClick={() => setCurrent(log)}
            >{log.message}</a>
            <br/>
            <span className='grey-text'>
                <span className="black-text">ID: {log.id}</span>
                <br/>
               <span className='black-text'>{log.tech}</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
            </span>
            <a href="#!" onClick={onDelete} className="secondary-content"><i className="material-icons grey-text">delete</i></a>
            </div>
        </li>

    );
};
LogItem.protoType = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
};

export default connect(null, {deleteLog, setCurrent})(LogItem);
