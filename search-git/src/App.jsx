import { styled, globalCss } from "@stitches/react";
import styles from "./styles.css";

const Main = globalCss({
  "*": { margin: 0, padding: 0 },
});

const Content = styled("div", {
  display: "flex",
  justifyContent: "center",
});

function App() {
  return (
    <div className={Main()}>
      <div>
        <h1>GitHub Search</h1>
      </div>
    </div>
  );
}

export default App;
