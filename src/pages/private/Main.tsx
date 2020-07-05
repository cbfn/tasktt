import React, { useState } from "react";
import TaskList from "../../components/List";
import TaskForm from "../../components/Form";
import Header from "../../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Modal } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 200,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Main() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Header />
      <main>
        <TaskList />
        <Fab
          aria-label="add"
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            color: "white",
            background: "salmon",
          }}
          onClick={handleOpen}
        >
          <AddIcon />
        </Fab>
      </main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Add task</h2>
          <TaskForm onClose={handleClose} />
        </div>
      </Modal>
    </>
  );
}

export default Main;
