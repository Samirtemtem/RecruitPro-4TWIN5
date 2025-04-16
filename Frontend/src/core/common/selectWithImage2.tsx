import React, { useState } from "react";
import ImageWithBasePath from "./imageWithBasePath";
import { Dropdown } from "primereact/dropdown";

export const SelectWithImage2 = () => {
  const options = [
    {
      label: "Darlee Robertson",
      value: "avatar-19.jpg",
      image: "assets/img/profiles/avatar-19.jpg",
    },
    {
      label: "Sharon Roy",
      value: "avatar-20.jpg",
      image: "assets/img/profiles/avatar-20.jpg",
    },
    {
      label: "Vaughan",
      value: "avatar-21.jpg",
      image: "assets/img/profiles/avatar-21.jpg",
    },
    {
      label: "Jessica",
      value: "avatar-23.jpg",
      image: "assets/img/profiles/avatar-23.jpg",
    },
    {
      label: "Carol Thomas",
      value: "avatar-16.jpg",
      image: "assets/img/profiles/avatar-16.jpg",
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
      return <span>{"Choose"}</span>;
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
        placeholder="Choose"
      />
    </div>
  );
};
