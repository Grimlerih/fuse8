import { FC } from 'react';
import style from './Search.module.css';
import { ISearch } from '../../constants/interface';

export const Search: FC<ISearch> = ({ text, setText }) => {
  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      className={style.container}
      type='text'
      placeholder='Search users by name or rating...'
      autoFocus
    ></input>
  );
};
