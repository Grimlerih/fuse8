import { useEffect, useState } from 'react';
import style from './App.module.css';
import { Search } from './components/Search/Search';
import { Card } from './components/Card/Card';
import { useDebounce } from './hooks/useDebounce';
import { users } from './data/data';
import { IUser } from './constants/interface';

function App() {
  const [text, setText] = useState<string>('');
  const [data, setData] = useState<IUser[]>([]);

  const deboucedText = useDebounce(() => {
    setData(() =>
      users.filter((el) => {
        if (text.length > 0) {
          return (
            el.name.toLowerCase() === text.toLowerCase() ||
            (el.carModel.toLowerCase() === text.toLowerCase() &&
              el.carModel.length)
          );
        } else {
          return true;
        }
      })
    );
  }, 500);

  useEffect(() => {
    deboucedText();
  }, [text]);

  return (
    <div className={style.container}>
      <Search text={text} setText={setText} />
      {text.length > 0 && (
        <p className={style.text}>Found users: {data.length}</p>
      )}
      <ul className={style.list}>
        {text.length > 0 && data.map((el) => <Card key={el.id} {...el} />)}
      </ul>
    </div>
  );
}

export default App;
