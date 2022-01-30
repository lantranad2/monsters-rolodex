import { Card } from './Card';
import './CardList.css';

export const CardList = (props) => {
  // console.log(props.monsters);
  return (
    <div className="CardList">
      {props.monsters.map((m) => (
        <Card key={m.id} monster={m} />
      ))}
    </div>
  );
};
