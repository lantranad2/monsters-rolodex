import './Card.css';

export const Card = (props) => {
  return (
    <div className="Card">
      <img
        className="Card__img"
        src={props.monster.image}
        alt={props.monster.name}
      />
      <h2 className="Card__title">{props.monster.name}</h2>
      <p className="Card__email">{props.monster.email}</p>
    </div>
  );
};
