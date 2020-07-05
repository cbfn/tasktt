import React from "react";
import RootStore from "../stores";
import {
  ListItem as MaterialListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { inject, observer } from "mobx-react";
import { format } from "date-fns";

interface ListItemProps {
  store?: RootStore;
  task: {
    data;
  };
}

function ListItem({ store, task }: ListItemProps) {
  const item = task.data;
  return (
    <MaterialListItem>
      <ListItemText
        primary={item.title}
        secondary={format(item.deadline.toDate(), "MM/dd/yyyy")}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => store?.tasksStore.removeTask(task)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </MaterialListItem>
  );
}

export default inject(({ store }) => ({ store }))(observer(ListItem));
