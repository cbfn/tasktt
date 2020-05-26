import React, { useContext } from "react";
import styled from "styled-components";
import { storesContext } from "../store/stores";
import Gravatar from "react-gravatar";

export default function Header({ history }) {
  const { userStore: store } = useContext(storesContext);

  function handleClick() {
    store.logout();
    history.push("/login");
  }

  return (
    <StyledHeader className="App-header">
      <h1>tasktt</h1>
      <div className="avatar">
        <Gravatar email={store.currentUser.email} />
        <div onClick={handleClick} className="logout">
          Logout
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: salmon;
  color: white;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  position: fixed;
  width: calc(100% - 40px);

  h1 {
    font-family: "Anron", sans-serif;
    font-size: 2em;
    font-weight: 400;
  }

  .avatar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    img {
      border-radius: 40px;
      width: 40px;
      height: 40px;
      margin: 0 20px;
    }
    .logout {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 24px;
      padding: 10px 20px;
      font-weight: 700;
      font-size: 0.75em;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;
