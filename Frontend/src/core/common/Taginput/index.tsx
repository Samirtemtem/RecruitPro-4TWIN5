import React from "react";
import { TagsInput } from "react-tag-input-component";

interface CommonTagsInputProps {
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string; // Optional placeholder for the input
    className?: string;   // Optional custom class for styling
}

const CommonTagsInput: React.FC<CommonTagsInputProps> = ({
    value,
    onChange,
    placeholder = "Add a tag", // Default placeholder
    className = "input-tags form-control", // Default class
}) => {
    return (
        <TagsInput
            value={value}
            onChange={onChange}
            placeHolder={placeholder}
            
        />
    );
};

export default CommonTagsInput;
