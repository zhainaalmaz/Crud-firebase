import classes from "./Modal.module.css";

export const Modal = ({ todo }) => {
  return (
    <div className={classes.modal}>
      <form>
        <div>
          <p>{todo.title}</p>
        </div>
      </form>
    </div>
  );
};
