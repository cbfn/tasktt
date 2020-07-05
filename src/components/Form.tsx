import React, { useState } from "react";
import { inject, observer } from "mobx-react";
import { TextField, Button } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import RootStore from "../stores";

interface TaskFormProps {
  store?: RootStore;
  onClose: VoidFunction;
}

function TaskForm({ store, onClose }: TaskFormProps) {
  const [task, setTask] = useState("");
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date());

  function handleChange(event) {
    setTask(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (task === "") {
      alert("Please provide a task name!");
      return false;
    }

    store?.tasksStore.addTask(task, selectedDate);
    setTask("");
    onClose();
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name of the task"
        value={task}
        onChange={handleChange}
      />

      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        label="Date picker inline"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />

      <Button
        type="submit"
        style={{
          marginTop: 20,
          color: "white",
          background: "salmon",
          width: "100%",
        }}
      >
        ADD TASK
      </Button>
    </form>
  );
}

export default inject(({ store }) => ({ store }))(observer(TaskForm));
