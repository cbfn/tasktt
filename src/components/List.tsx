import React, { useRef, useContext } from "react";
import { useObserver } from "mobx-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TaskForm from "./Form";
import ListItem from "./ListItem";
import { storesContext } from "../store/stores";

export default function TaskList() {
  const nodeRef = useRef(null);
  const { tasksStore: store } = useContext(storesContext);

  return useObserver(() => {
    return (
      <ul>
        <li>
          <TaskForm />
        </li>
        <TransitionGroup className="task-list">
          {store.tasks.map((task: any) => (
            <CSSTransition
              key={task.id}
              nodeRef={nodeRef}
              in
              timeout={600}
              classNames="item"
            >
              <ListItem task={task} fowardRef={nodeRef} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    );
  });
}
