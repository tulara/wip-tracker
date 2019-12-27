import React from 'react';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const SAVE_NEW_PROJECT = gql`
    mutation saveProject($name: String!, $recipient: String) {
      saveProject(name:$name, recipient: $recipient)
    }
`

const NewProjectButton = () => {
    const [saveProject] = useMutation(SAVE_NEW_PROJECT);
    const project = {
        name: "A fancy project",
        recipient: "someone special"
    }

    return (
        <button 
            className="button is-primary"
            onClick={() => { saveProject({ variables: project })}}
        >
            Add new project
        </button> 
    )
}

export default NewProjectButton;