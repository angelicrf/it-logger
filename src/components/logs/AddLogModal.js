import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addLog} from "../../actions/logAction";

const AddLogModal = ({addLog}) => {
     const [message,setMessage] = useState('');
     const [attention,setAttention] = useState(false);
     const[tech,setTech] = useState('');

     const onsubmit = () => {
         if(message === '' || tech === '') {
             M.toast({html: 'Please enter a message and tech'});
         } else {
             const newLog = {
                 message,
                 attention,
                 tech,
                 data: new Date()
             };
             addLog(newLog);
             M.toast({html: `Log Added by ${tech}`});
             setMessage('');
             setTech('');
             setAttention(false);
         }
     };
        return (
            <div id='add-log-modal' className='modal' style={modalStyle}>
                <div className="modal-content">
                    <h4>Enter System Log</h4>
                    <div className="row">
                        <div className="input-feild">
                            <input type="text"
                                   name='message' value={message}
                                   onChange={e => setMessage(e.target.value)}/>
                            <label htmlFor='message' className='active'> Log Message</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-feild">
                            <select name="tech" value={tech}
                                    className='browser-default'
                                    onChange={ e => setTech(e.target.value)}>
                                <option value="" disabled> Select Technician</option>
                                <option value="Sarah Johnes">Sarah Johnes</option>
                                <option value="John Mc Cormik">John Mc Cormik</option>
                                <option value="Larry King">Larry King</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-feild">
                            <p>
                                <label>
                                    <input type="checkbox" className='filled-in'
                                           checked={attention} value={attention}
                                           onChange={e => setAttention(!attention)}/>
                                           <span>Needs Attention</span>
                                </label>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" onClick={onsubmit}
                       className='modal-close waves-effect blue waves-light btn'>Enter</a>
                </div>
            </div>
        );
};
AddLogModal.protoType = {
    addLog: PropTypes.func.isRequired,
};
const modalStyle = {
    width: '75%',
    height: '75%'
};

export default connect(null, {addLog})(AddLogModal);
