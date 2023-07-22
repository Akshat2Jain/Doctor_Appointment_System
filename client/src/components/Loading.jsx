import React from "react";
import { SpinnerDotted } from "spinners-react";

const Loading = () => {
  const styles = {
    marginLeft: "800px",
    marginTop: "350px",
  };
  return (
    <>
      <SpinnerDotted color="Blue" size={100} style={styles} />
    </>
  );
};

export default Loading;
