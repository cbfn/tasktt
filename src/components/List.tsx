import React, { useContext, useRef } from "react";
import { useObserver } from "mobx-react";
import { TaskStoreContext } from "../store/tasks";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function TaskList() {
  const store = useContext(TaskStoreContext);
  const nodeRef = useRef(null);
  return useObserver(() => (
    <ul>
      <TransitionGroup className="task-list">
        {store?.tasks.map((task, index) => (
          <CSSTransition
            key={index}
            nodeRef={nodeRef}
            in
            timeout={600}
            classNames="item"
          >
            <li ref={nodeRef}>
              {task} <span onClick={() => store.removeTask(index)}>DONE</span>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  ));
}
