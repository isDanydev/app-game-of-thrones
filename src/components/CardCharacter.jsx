import PropTypes from "prop-types";

const CardCharacter = ({ img, imgCharacter, title, fullName, family }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={img} alt={imgCharacter} className="img-character" />
        <div className="card-body">
          <h5 className="card-title" title={title}>
            {title}
          </h5>
          <span>Nombre : {fullName}</span>
          <br />
          <span>Casa : {family}</span>
        </div>
      </div>
    </div>
  );
};

CardCharacter.propTypes = {
  img: PropTypes.string.isRequired,
  imgCharacter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
};

export default CardCharacter;
