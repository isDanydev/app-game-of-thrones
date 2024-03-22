import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetallePersonaje = () => {
  const { id } = useParams();
  const [detailedCharacter, setDetailedCharacter] = useState([]);
  const [cuotesCharacter, setCuotesCharacter] = useState([]);

  const getDetailedCharacter = async () => {
    try {
      const api = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`);
      const data = await api.json();
      setDetailedCharacter(data);
      getCuotesCharacter(data.firstName.toLowerCase());
    } catch (error) {
      console.error("Error al obtener los detalles del personaje:", error);
    }
  };

  const getCuotesCharacter = async (nameCharacter) => {
    try {
      const api = await fetch(
        `https://api.gameofthronesquotes.xyz/v1/character/${nameCharacter}`
      );
      const data = await api.json();
      setCuotesCharacter(data);
      console.log(data);
    } catch (error) {
      console.error("Error al obtener las citas del personaje:", error);
    }
  };

  useEffect(() => {
    getDetailedCharacter();
  }, []);

  return (
    <div className="d-flex flex-column gap-3 mt-3">
      <div className="container p-3 d-flex align-items-center justify-content-evenly">
        <img
          src={detailedCharacter.imageUrl}
          alt=""
          width={300}
          height={300}
          className="rounded"
          style={{ border: "5px solid white", objectFit: "cover" }}
        />
        <div className="text-light w-50">
          <div className="mb-2 w-100 bg-light text-dark text-center rounded p-2">
            <h3 className="m-0">{detailedCharacter.title}</h3>
          </div>
          <div className="mb-2">
            <h4 className="m-0">Nombre Completo</h4>
            <i>{detailedCharacter.fullName}</i>
          </div>
          <div className="mb-2">
            <h4 className="m-0">Casa</h4>
            <i>{detailedCharacter.family}</i>
          </div>
        </div>
      </div>

      <div className="container ">
        {cuotesCharacter.length > 0 ? (
          cuotesCharacter.map((coutes, index) => (
            <div key={index} className="p-3">
              <h2 className="text-light text-center mb-4">
                🟡Dichos de {coutes.name}🟡
              </h2>
              {coutes.quotes.map((quote, index) => (
                <div key={index}>
                  <li className="text-warning">{quote}</li>
                </div>
              ))}
            </div>
          ))
        ) : (
          <div>
            <h2 className="text-center text-light">
              ❌ No hay datos disponibles. ❌
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetallePersonaje;
