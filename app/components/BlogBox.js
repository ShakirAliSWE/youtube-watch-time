import Image from "next/image";
import React from "react";

const BlogBox = () => {
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col-auto d-none d-lg-block">
        <Image
          src="https://fakeimg.pl/160/"
          width={160}
          height={160}
          alt="fake-image"
        />
      </div>
      <div className="col p-4 d-flex flex-column position-static">
        <h3 className="mb-0">Featured post</h3>
        <div className="mb-1 text-body-secondary">Nov 12</div>
        <p className="card-text mb-auto">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </p>
        <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
          Continue reading
        </a>
      </div>
    </div>
  );
};

export default BlogBox;
