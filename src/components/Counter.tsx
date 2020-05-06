import React, { useContext, useState, useEffect } from "react";
import { useObserver } from "mobx-react";
import { TaskStoreContext } from "../store/tasks";

export default function TasksCounter() {
  const store = useContext(TaskStoreContext);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(counterInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(counterInterval);
    };
  });

  return useObserver(() => (
    <div className="counter">
      <div className="task-counter">You have: {store?.tasksCount} tasks!</div>
      <div className="task-timer">
        Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  ));
}
