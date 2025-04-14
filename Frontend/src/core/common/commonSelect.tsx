import React, { useEffect, useState } from "react";
import Select from "react-select";

export type Option = {
  value: string;
  label: string;
};

export interface SelectProps {
  options: Option[];
  defaultValue?: Option;
  className?: string;
  styles?: any; 
}

const CommonSelect: React.FC<SelectProps> = ({ options, defaultValue, className }) => {
  const [selectedOption, setSelectedOption] = useState<Option | undefined>(defaultValue);

 

  const handleChange = (option: Option | null) => {
    setSelectedOption(option || undefined);
  };
  useEffect(() => {
    setSelectedOption(defaultValue || undefined);
  }, [defaultValue])
  
  return (
    <Select
     classNamePrefix="react-select"
      className={className}
      // styles={customStyles}
      options={options}
      value={selectedOption}
      onChange={handleChange}
      placeholder="Select"
    />
  );
};

export default CommonSelect;
