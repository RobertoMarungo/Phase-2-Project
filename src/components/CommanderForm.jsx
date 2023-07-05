import { useState } from 'react';
import { useContext } from 'react';
import CommanderContext from '../context/CommanderContext';

function CommanderForm() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [rarity, setRarity] = useState('Common');
  const [legality, setLegality] = useState('Legal');
  const [text, setText] = useState('');

  const { addCommander } = useContext(CommanderContext);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleRarityChange = (event) => {
    setRarity(event.target.value);
  };

  const handleLegalityChange = (event) => {
    setLegality(event.target.value);
  };

  const handleCardTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCommander = {
      name,
      image,
      rarity,
      legality,
      text,
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
          value={image}
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
        <label htmlFor='text'>Card Text: </label>
        <input
          type='text'
          id='text'
          placeholder='Insert Card Text here...'
          value={text}
          onChange={handleCardTextChange}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default CommanderForm;
