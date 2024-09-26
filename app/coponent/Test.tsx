import React from "react";

interface Mprops {
  text: string;
}
const Test: React.FC<Mprops> = ({ text }) => {
  return <p>{text}</p>;
};

export default Test;
