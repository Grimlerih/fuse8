import { FC } from 'react';
import style from './Card.module.css';
import { IUser } from '../../constants/interface';

export const Card: FC<IUser> = ({
  name,
  carModel,
  carMake,
  activated,
  created,
}) => {
  return (
    <li className={style.container}>
      <a
        href={`https://user.ru/${name}`}
        target='_blank'
        className={style.card}
      >
        <p className={style.card_name}>{name}</p>
        <div className={style.card_info}>
          <p>Car Model: {carModel}</p>
          <p>Car Make: {carMake}</p>
          <p>activated: {activated}</p>
          <p>created: {created}</p>
        </div>
      </a>
    </li>
  );
};
