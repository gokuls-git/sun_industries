import React from "react";
import Career from "./Career";
import HomeBanner from "./HomeBanner";

const Components = {
  HomeBanner: HomeBanner,
  Career: Career
};

const ComponentFunc = (block) => {
  if (typeof Components[block.slug] !== "undefined") {
    return React.createElement(Components[block.slug], {
      key: Math.random(),
      props: block,
    });
  }
  return React.createElement(
    () => <div>The component {block.slug} has not been created yet.</div>,
    { key: Math.random() }
  );
};
export default ComponentFunc;
