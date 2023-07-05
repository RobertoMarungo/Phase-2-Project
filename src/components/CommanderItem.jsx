import Card from './shared/Card';

function CommanderItem({ card }) {
  return (
    <Card>
      <h2>
        <strong>{card.name}</strong> <br />
      </h2>

      <img
        src={card.image || 'https://i.imgur.com/LdOBU1I.jpg'}
        alt='mtg-card'></img>

      <h4>
        {card.rarity}
        <br />
        Commander: {card.legality}
      </h4>
      <p>{card.text}</p>
    </Card>
  );
}
export default CommanderItem;
