import { useState } from 'react';
import { useContext } from 'react';
import CommanderContext from '../context/CommanderContext';

function CommanderForm() {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [rarity, setRarity] = useState('Common');
  const [legality, setLegality] = useState('Legal');
  const [cardText, setCardText] = useState('');

  const { addCommander } = useContext(CommanderContext);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleRarityChange = (event) => {
    setRarity(event.target.value);
  };

  const handleLegalityChange = (event) => {
    setLegality(event.target.value);
  };

  const handleCardTextChange = (event) => {
    setCardText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCommander = {
      name,
      imageUrl,
      rarity,
      legality,
      cardText,
    };
    addCommander(newCommander);
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          id='name'
          placeholder='Enter a Commander Name...'
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor='image'>Image Url: </label>
        <input
          type='text'
          id='image'
          placeholder='Insert Image Url...'
          value={imageUrl}
          onChange={handleImageChange}
        />
        <br />
        <label htmlFor='rarity'>Rarity: </label>
        <select
          id='rarity'
          value={rarity}
          onChange={handleRarityChange}>
          <option value='Common'>Common</option>
          <option value='Uncommon'>Uncommon</option>
          <option value='Rare'>Rare</option>
          <option value='Mythic Rare'>Mythic Rare</option>
        </select>
        <br />
        <label htmlFor='legality'>Legality: </label>
        <select
          id='legality'
          value={legality}
          onChange={handleLegalityChange}>
          <option value='Legal'>Legal</option>
          <option value='Banned'>Banned</option>
        </select>
        <br />
        <label htmlFor='cardText'>Card Text: </label>
        <input
          type='text'
          id='cardText'
          placeholder='Insert Card Text here...'
          value={cardText}
          onChange={handleCardTextChange}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default CommanderForm;
