import React from "react";
import { StringNumDictionary } from "../components/YTDisplay";

export interface FilterButtonProps {
  text: string;
  danceType: string;
  filters: StringNumDictionary;
  clickFunction: (danceType: string) => void;
}

const FilterButton = (props: FilterButtonProps) => {
  let currentClassName = "";
  if (props.filters[props.danceType] == 1) {
    currentClassName = props.danceType;
  } else {
    currentClassName = props.danceType + "-gone";
  }
  console.log("currentClassName: ", currentClassName);

  return (
    <button
      className={currentClassName}
      onClick={() => props.clickFunction(props.danceType)}
    >
      {props.text}
    </button>
  );
};

export default FilterButton;
