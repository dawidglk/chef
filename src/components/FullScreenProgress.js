import React from "react";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const styles = {
  div: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(36, 41, 41, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 900000,
  },
  circular: { color: "#ffff33" },
};

const FullScreenProgress = ({ isOpen }) => {
  return isOpen.length > 0 ? (
    <div style={styles.div}>
      <CircularProgress style={styles.circular} size={100} />
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  isOpen: state.fullScreenProgress.circurals,
});

export default connect(mapStateToProps, null)(FullScreenProgress);
