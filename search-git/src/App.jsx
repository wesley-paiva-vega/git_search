import { styled, globalCss, css } from "@stitches/react";

const Main = globalCss({
  "*": { margin: 0, padding: 0 },
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
  return (
    <div className={Main()}>
      <MainContent>
        <h1>GitHub Searchh</h1>
        <div>
          <InputDoMal
            placeholder="Digite um nick do github para pesquizar"
            type="text"
          />
          <button className={ButtonDoMal()}>Pesquisar github</button>
        </div>
      </MainContent>
    </div>
  );
}

export default App;
