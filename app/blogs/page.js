import React from "react";
import BlogBox from "@/app/components/BlogBox";

const Blogs = () => {
  return [...Array(10)].map((i, key) => {
    return <BlogBox key={key} />;
  });
};

export default Blogs;
