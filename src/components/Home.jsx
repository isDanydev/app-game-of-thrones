import { useState } from "react";
import { useEffect } from "react";
import CardCharacter from "./CardCharacter";
import { Link } from "react-router-dom";

const Home = () => {
  const [character, setCharacter] = useState([]);
  const apiGame = async () => {
    const api = await fetch("https://thronesapi.com/api/v2/Characters");

    const data = await api.json();

    setCharacter(data);
    console.log(data);
  };

  useEffect(() => {
    apiGame();
  }, []);

  return (
    <div className="container-fluid mt-2">
      <h1 className="text-light text-uppercase">Personajes Populares</h1>
      <div className="row m-0">
        {character.map((character) => (
          <div key={character.id} className="col-6 col-lg-4">
            <Link to={"/personajes/view/" + character.id}>
              <CardCharacter
                linkView={character.id}
                characterID={character.id}
                img={character.imageUrl}
                imgCharacter={character.fullName}
                title={character.title}
                fullName={character.fullName}
                family={
                  character.family === "" ? "Desconocido" : character.family
                }
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
