import React from "react";

interface Props {
  isUpdate?: boolean;
}

const Loading: React.FC<Props> = ({ isUpdate = false }) => {
  return <p>{isUpdate ? "Updating..." : "Loading..."}</p>;
};

export default Loading;
