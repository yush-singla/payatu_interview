import React from "react";
import { data } from "../../data";
import Comments from "../Comments";
const AllComments = () => {
  // console.log(data);
  return <Comments data={data} />;
};

export default AllComments;
