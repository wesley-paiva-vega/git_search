import { styled, globalCss, css } from "@stitches/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Main = globalCss({
  "*": { margin: 0, padding: 0 },
});

const SessionGitData = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  gap: "30px",
  width: "550px",

  img: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
  },
  p: {
    fontSize: "28px",
    color: "Bisque",
    fontWeight: "bold",
  },
});

const MainContent = styled("div", {
  backgroundColor: "#3760DB",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  div: {
    display: "flex",
    gap: "20px",
    padding: "20px",
  },

  h1: {
    marginTop: "20px",
    color: "#E8A92E",
  },
});

const ButtonDoMal = css({
  width: "110px",
  padding: "10px 10px",
  borderRadius: "10px",
  border: "none",
  fontSize: "18px",
  fontWeight: "bold",
  color: "white",
  fontFamily: "system-ui",
  backgroundColor: "#030f3478",

  "&:hover": {
    filter: "brightness(0.6);",
    cursor: "pointer",
  },
});

const InputDoMal = styled("input", {
  width: "350px",
  outline: "none",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#2c7bd0",
  fontFamily: "system-ui",
});

function App() {
  const [nick, setNick] = useState();
  const [userGitData, setUserGitData] = useState();

  const handleChangeInput = (e) => {
    setNick(e.target.value);
  };

  const handleClickSearch = () => {
    axios.get(`https://api.github.com/users/${nick}`).then((response) => {
      setUserGitData(response.data);
    });
  };

  useEffect(() => {
    console.log("dados do estado", userGitData?.login);
  }, [nick, userGitData]);

  return (
    <div className={Main()}>
      <MainContent>
        <h1>GitHub Searchh</h1>
        <div>
          <InputDoMal
            placeholder="Digite um nick do github para pesquizar"
            type="text"
            onChange={(e) => handleChangeInput(e)}
          />
          <button onClick={() => handleClickSearch()} className={ButtonDoMal()}>
            Pesquisar github
          </button>
        </div>
        <SessionGitData>
          <p>{`Seja Bem vindo ${userGitData?.login ?? ""}`}</p>
          <img src={userGitData?.avatar_url} alt="" />
        </SessionGitData>
      </MainContent>
    </div>
  );
}

export default App;
