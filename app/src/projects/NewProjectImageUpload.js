import React, {useState} from 'react';

import './new-project.scss';
import placeholder from './images/empty-placeholder.jpg';

const NewProjectImageUpload = ({onFileUpload}) => {
    const [filename, setFilename] = useState("placeholder.jpg");
    const [src, setSrc]= useState();

    const onSelectFile = e => {
        e.persist();
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setFilename(e.target.files[0].name);
                setSrc(reader.result);
            })
            reader.readAsDataURL(e.target.files[0]);
          }
    }

    return (
    <div className="new-project_upload file has-name is-boxed">
        <div className="new-project__thumbnail-container">
                {src ? <img className="new-project__thumbnail-image" src={src} />:
                    <img className="new-project__thumbnail-image" src={placeholder} />}
        </div>
        <label className="file-label">
            <input 
                className="file-input" 
                type="file"
                accept="image/*"
                onChange={onSelectFile} />
            <div className="new-project__thumbnail" >
                <span className="file-cta new-project__thumbnail-cta">
                    <span className="file-icon">
                        <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">
                        Choose a thumbnail
                    </span>
                    <span className="file-name">
                        {filename}
                    </span>
                </span>
            </div>
        </label>
        
        
    </div>
    )
}

export default NewProjectImageUpload;