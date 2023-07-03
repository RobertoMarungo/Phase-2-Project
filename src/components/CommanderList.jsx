import CommanderItem from './CommanderItem';
import { useContext } from 'react';
import CommanderContext from '../context/CommanderContext';
import Spinner from './shared/Spinner';

function CommanderList() {
  const { cardData, isLoading } = useContext(CommanderContext);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='card-list'>
      {cardData.map((card) => (
        <CommanderItem
          key={card.id}
          card={card}
        />
      ))}
    </div>
  );
}

export default CommanderList;
