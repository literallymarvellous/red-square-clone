import React from "react";
import WorkItem from "../WorkItem/WorkItem";

type WorkListProps = {
  images: string[];
};

const WorkList = ({ images }: WorkListProps) => {
  return (
    <div>
      {images.map((image) => (
        <div key={image}>
          <WorkItem image={image} />
        </div>
      ))}
    </div>
  );
};

export default WorkList;
