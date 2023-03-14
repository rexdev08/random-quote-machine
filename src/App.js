import React, { useState, useEffect } from "react";
import QuoteMachine from "./components/QuoteMachine";
import styled from "styled-components";
import colors from "./helpers/colors";

function App() {
  const url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  const [info, setInfo] = useState([]);
  const [ramdon, setRandom] = useState(0);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data.quotes);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const colorRamdon = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = colorRamdon;
    setColor(colorRamdon);
  }, [ramdon]);

  if (!loading) {
    return (
      <AppContainer>
        <div>
          <QuoteMachine
            info={info[ramdon]}
            color={color}
            clickHandler={() =>
              setRandom(Math.floor(Math.random() * info.length))
            }
          />
          <Link
            className="link"
            rel="noreferrer"
            href="https://rexdev08.github.io/"
            target="_blank"
          >
            <span>Hecho por Raimundo Rincon</span>
          </Link>
        </div>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  height: 100vh;
  background-color: red;
  display: grid;
  place-items: center;
  background-color: transparent;
`;

const Link = styled.a`
  text-decoration: none;
  text-align: center;
  display: block;
  margin-top: 1rem;
  font-size: 1.4rem;
  font-weight:900;
  color: #fafafa;
  /* background-color: aqua; */
`;

export default App;
