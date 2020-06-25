import React, { FormEvent, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { inject, observer } from "mobx-react";
import RootStore from "../../stores";

interface LoginProps {
  store?: RootStore;
}

function Login({ store }: LoginProps) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    store?.userStore
      .login(email, password)
      .then((data) => {
        store.userStore.authenticateUser(data);
        history.push("/");
      })
      .catch((error) => {
        setError(error);
      });
  }

  useEffect(() => {
    if (store?.userStore.isLoggedIn) history.push("/");
  }, [history, store]);

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

export default inject(({ store }) => ({ store }))(observer(Login));
