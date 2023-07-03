import Card from './shared/Card';

function CommanderItem({ card }) {
  return (
    <Card>
      <h2>
        <strong>{card.name} 🦇</strong>
      </h2>

      <img
        src={card.imageUrl || 'https://i.imgur.com/LdOBU1I.jpg'}
        alt='mtg-card'></img>

      <h4>
        {card.rarity}{' '}
        {card.legalities.map((legal) =>
          legal.format === 'Commander' ? (
            <p key={card.id}>
              {legal.format} : {legal.legality}
            </p>
          ) : null
        )}
      </h4>
      <p>{card.originalText}</p>
    </Card>
  );
}
export default CommanderItem;
