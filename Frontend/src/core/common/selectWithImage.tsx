import React, { useState } from "react";
import ImageWithBasePath from "./imageWithBasePath";
import { Dropdown } from "primereact/dropdown";

export const SelectWithImage = () => {
  const options = [
    {
      label: "Sophie",
      value: "user-40.jpg",
      image: "assets/img/users/user-40.jpg",
    },
    {
      label: "Cameron",
      value: "user-58.jpg",
      image: "assets/img/users/user-58.jpg",
    },
    {
      label: "Doris",
      value: "user-42.jpg",
      image: "assets/img/users/user-42.jpg",
    },
    {
      label: "Rufana",
      value: "user-10.jpg",
      image: "assets/img/users/user-10.jpg",
    },
    {
      label: "Michael",
      value: "user-39.jpg",
      image: "assets/img/users/user-39.jpg",
    },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const customOptionTemplate = (option: any) => (
    <div className="p-clearfix">
      <ImageWithBasePath alt={option.label} src={option.image} />
      <span>{option.label}</span>
    </div>
  );

  const customValueTemplate = (option: any) => {
    if (!option) {
      return <span>{"Choose Employee"}</span>;
    }
    return (
      <div className="p-clearfix">
        <ImageWithBasePath alt={option.label} src={option.image} />
        <span>{option.label}</span>
      </div>
    );
  };
  return (
    <div>
      <Dropdown
        value={selectedOption}
        options={options}
        optionLabel="label"
        optionValue="value"
        itemTemplate={customOptionTemplate}
        valueTemplate={customValueTemplate}
        onChange={(e) => setSelectedOption(e.value)}
        style={{ width: "100%" }}
        placeholder="Choose Owner"
      />
    </div>
  );
};
