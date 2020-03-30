import React, {useState} from 'react';
import M from "materialize-css/dist/js/materialize.min";
import {connect} from 'react-redux';
import {addTechs} from "../../actions/techActions";
import PropTypes from 'prop-types';

const AddTechModal = ({addTechs}) => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    const onsubmit = () => {
        if(firstName === '' || lastName === '') {
            M.toast({html: 'Please enter a first and last name'});
        } else {
           addTechs({
               firstName,
               lastName
           });
            M.toast({html: `${firstName} ${lastName} was added as tech`});
            setFirstName('');
            setLastName('');
        }
    };
    return (
        <div id="tech-modal" className='modal'>
            <div className="modal-content">
                <h4>New technician</h4>
                <div className="row">
                    <div className="input-feild">
                        <input type="text"
                               name='firstName' value={firstName}
                               onChange={e => setFirstName(e.target.value)}/>
                        <label htmlFor='firstName' className='active'> First Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-feild">
                        <input type="text"
                               name='lastName' value={lastName}
                               onChange={e => setLastName(e.target.value)}/>
                        <label htmlFor='lastName' className='active'> Last Name</label>
                    </div>
                </div>
            <div className="modal-footer">
                <a href="#!" onClick={onsubmit}
                   className='modal-close waves-effect blue waves-light btn'>Enter</a>
            </div>
        </div>
        </div>
    );
};
AddTechModal.propTypes = {
    addTechs: PropTypes.func.isRequired
};

export default connect(null, {addTechs})(AddTechModal);
