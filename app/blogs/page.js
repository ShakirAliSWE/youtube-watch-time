import React from "react";
import BlogBox from "@/app/components/BlogBox";

const Blogs = () => {
  return [...Array(10)].map(() => {
    return <BlogBox />;
  });
};

export default Blogs;
