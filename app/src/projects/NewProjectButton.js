import React, { useState } from 'react';
import Modal from '../components/Modal';
import NewProjectForm from './NewProjectForm';

const NewProjectButton = ({ saveProject }) => {
    const [isModalActive, setIsModalActive] = useState(false);

    const saveAndCloseModal = async (vars) => {
        await saveProject(vars);
        setIsModalActive(false);
    }

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
                <NewProjectForm 
                    onCompletedSave={() => { setIsModalActive(false);}}
                    saveProject={saveAndCloseModal}    
                />
            </Modal> 
        </>
    )
}

export default NewProjectButton;