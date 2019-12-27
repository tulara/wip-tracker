import React, { useState } from 'react';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import Modal from '../components/Modal';

const SAVE_NEW_PROJECT = gql`
    mutation saveProject($name: String!, $recipient: String) {
      saveProject(name:$name, recipient: $recipient)
    }
`

const NewProjectButton = () => {
    const [isModalActive, setIsModalActive] = useState(false);
    const [name, setName] = useState();
    const [recipient, setRecipient]= useState();

    const [saveProject] = useMutation(SAVE_NEW_PROJECT,
        {
            onCompleted() {
                setIsModalActive(false);
            }
    });

    const handleNameChange = event => {
        const name = event.target.value;
        setName(name);
    }

    const handleRecipientChange = event => {
        const recipient = event.target.value;
        setRecipient(recipient);
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
                <form 
                        className="box"
                        onSubmit={(event) => {
                            event.preventDefault();
                            saveProject({ variables: { name, recipient }});
                        }}>
                        <h1 className="title">Add a new project</h1>
                        <div className="field">
                            <div className="control">
                                <input 
                                    className="input"
                                    onChange={handleNameChange}
                                    type="text"
                                    placeholder="Name of your project" />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control has-icons-left">
                                <input 
                                    className="input"
                                    onChange={handleRecipientChange}
                                    type="text"
                                    placeholder="Who's it for?" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                            </div>
                        </div>
                        <button 
                            className="button is-primary"
                            type="submit"
                        >
                            Add
                        </button> 
                    </form>
            </Modal> 
        </>
    )
}

export default NewProjectButton;