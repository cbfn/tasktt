import React, { FormEvent, useContext, useState } from "react";
import { storesContext } from "../../store";

export default function Login(props) {
  const { userStore, tasksStore } = useContext(storesContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    userStore
      .login(email, password)
      .then((res: any) => {
        userStore.authenticateUser(res);
        tasksStore.fetchTasks();
        props.history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <div className="login">
      <h1>tasktt</h1>
      <form onSubmit={handleSubmit}>
        {error !== null && <div className="error">{error}</div>}
        <input
          name="email"
          type="email"
          placeholder="demo@demo.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="123qwe"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
