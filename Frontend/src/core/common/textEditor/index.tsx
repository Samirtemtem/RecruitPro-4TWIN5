import React, { useState } from 'react';
import DefaultEditor from "react-simple-wysiwyg";

interface CommonTextEditorProps {
    defaultValue?: string; // Optional prop for the default value
}

const CommonTextEditor: React.FC<CommonTextEditorProps> = ({ defaultValue }) => {
    const [value, setValue] = useState(defaultValue || ""); // Use defaultValue as the initial value

    const handleChange = (e: any) => {
        setValue(e.target.value);
    };

    return (
        <>
            <DefaultEditor value={value} onChange={handleChange} />
        </>
    );
}

export default CommonTextEditor;
