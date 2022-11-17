import classes from "./Backdrop.module.css";

const Backdrop = ({ onConfirm }) => {
  return <div className={classes.backdrop} onConfirm={onConfirm} />;
};

export default Backdrop;
