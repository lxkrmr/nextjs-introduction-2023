import { useState } from "react";

function Header({ title }) {
  return <h1>{title || "Develop. Preview. Ship. 🚀"}</h1>;
}

function HomePage() {
  const [likes, setLikes] = useState(0);
  const persons = [
    { name: "Ada Lovelace", id: 1 },
    { name: "Grace Hopper", id: 2 },
    { name: "Margaret Hamilton", id: 3 },
  ];
  const listElements = persons.map(({ id, name }) => <li key={id}>{name}</li>);

  const handleClick = () => setLikes((curr) => curr + 1);

  return (
    <div>
      <Header />
      <Header title="React 💙" />
      <ul>{listElements}</ul>
      <button onClick={handleClick}>💙 Like {likes}</button>
    </div>
  );
}

export default HomePage;
