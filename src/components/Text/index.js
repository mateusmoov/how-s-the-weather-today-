import "./styles.scss";

function Title({ children }) {
  return <h1 id="title">{children}</h1>;
}

function Subtitle({ children }) {
  return <h2 id="subtitle">{children}</h2>;
}

function Location({ children }) {
  return <p id="location">{children}</p>;
}

function Navbar({ children }) {
  return <p id="navbar">{children}</p>;
}

function Text({ type, children }) {
  const types = {
    title: <Title>{children}</Title>,
    subtitle: <Subtitle>{children}</Subtitle>,
    location: <Location>{children}</Location>,
    navbar: <Navbar>{children}</Navbar>,
  };
  return types[type];
}

export default Text;
