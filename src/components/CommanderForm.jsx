function CommanderForm() {
  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='Commander Name'
        />
        <br />
        <label for='rarity'>Choose a Rarity: </label>
        <select
          name='rarity'
          id='rarity'>
          <option value='Common'>Common</option>
          <option value='Uncommon'>Uncommon</option>
          <option value='Rare'>Rare</option>
          <option value='Mythic Rare'>Mythic Rare</option>
        </select>
        <br />
        <label for='legality'>Choose a Legality: </label>
        <select
          name='legality'
          id='legality'>
          <option value='Common'>Legal</option>
          <option value='Uncommon'>Banned</option>
        </select>
      </form>
    </div>
  );
}
export default CommanderForm;
