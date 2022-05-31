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
  marginTop: 50,

  img: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
  },
  p: {
    fontSize: "28px",
    color: "Bisque",
    fontWeight: "bold",
  },
});

const MainContent = styled("div", {
  backgroundColor: "#12263A",
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
    color: "Bisque",
  },
});

const ButtonDoMal = css({
  width: "170px",
  padding: "10px 10px",
  borderRadius: "10px",
  border: "none",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#fff",
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
  padding: "10px",
});

const ContainerRepos = styled("div", {
  backgroundColor: "#F4EDEA",
  margin: "20px auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ContainerReposInfos = styled("div", {
  width: "150px",
  height: "220px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "LightGrey",
  borderRadius: "20px",

  p: {
    color: "#34030378",
    fontFamily: "system-ui",
    fontWeight: "800",
    fontSize: "18px",
  },
});

function App() {
  const [nick, setNick] = useState();
  const [userGitData, setUserGitData] = useState();
  const [userGitRepos, setUserGitRepos] = useState();

  const [array, setArray] = useState([]);

  const handleChangeInput = (e) => {
    setNick(e.target.value);
  };

  const handleClickSearch = () => {
    axios.get(`https://api.github.com/users/${nick}`).then((response) => {
      axios.get(response.data.repos_url).then((responseRepos) => {
        setUserGitRepos(responseRepos.data);
      });
      setUserGitData(response.data);
    });
  };

  useEffect(() => {
    console.log("dados do estado", userGitRepos);
    setArray(userGitData);
  }, [nick, userGitRepos]);

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
        <ContainerRepos>
          <h4>Seus repositórios mais recentes</h4>
          <dic>repos aqui</dic>
          {userGitRepos?.slice(0, 5).map((item) => (
            <ContainerReposInfos>
              <p>{item.name}</p>
            </ContainerReposInfos>
          ))}
        </ContainerRepos>
      </MainContent>
    </div>
  );
}

export default App;
