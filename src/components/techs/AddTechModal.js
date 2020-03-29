import React, {useState} from 'react';
import M from "materialize-css/dist/js/materialize.min";

const AddTechModal = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const[tech,setTech] = useState('');

    const onsubmit = () => {
        if(firstName === '' || lastName === '') {
            M.toast({html: 'Please enter a first and last name'});
        } else {
            console.log(firstName,lastName);
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

export default AddTechModal;
