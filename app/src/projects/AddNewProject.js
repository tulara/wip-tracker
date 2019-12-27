import React, { useState } from 'react';
import Modal from '../components/Modal';
import NewProjectForm from './NewProjectForm';

const AddNewProject = () => {
    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <>
            <button 
                className="button is-primary"
                onClick={() => { setIsModalActive(true)}}
            >
                Add new project
            </button>
            <Modal
                isModalActive={isModalActive}
                onCloseModal={setIsModalActive}
            >
                <NewProjectForm onCompletedSave={() => { setIsModalActive(false);}} />
            </Modal> 
        </>
    )
}

export default AddNewProject;