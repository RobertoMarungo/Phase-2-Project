# MTG Commander

![](https://github.com/RobertoMarungo/Phase-2-Project/blob/main/Screenshot%202023-07-04%20at%2011.25.17%20PM.png)

## Description

This project uses a back end using render to fetch a list of cards and display them on a webpage. It also contains a form to add more commander cards to the list.

## Table of Contents

- [Description](#Description)
- [Getting Started](#GettingStarted)
- [Note](#Note)
- [License](#license)
- [Contact](#contact)

## Code Explanation

1. The component is importing and using the useContext hook from React to access the data and loading state from the CommanderContext.

2. The CommanderContext is expected to provide two values: cardData (an array of commander card objects) and isLoading (a boolean indicating whether the data is still loading).

3. The component checks the isLoading state. If it is true, it renders a Spinner component to indicate that the data is being loaded.

4. If isLoading is false, it renders a <div> element with the CSS class card-list. Inside this <div>, it maps over the cardData array using the map method.

5. For each card object in the cardData array, it renders a CommanderItem component. The key prop is set to the id of the card to ensure React can efficiently update and reorder the components when the list changes. The card prop is set to the card object itself, passing the card data to the CommanderItem component.

6. The CommanderItem component is responsible for rendering an individual commander card based on the given card prop.

7. In summary, the CommanderList component displays a list of commander cards. While the data is loading, it shows a spinner. Once the data is loaded, it renders the list of commander cards using the CommanderItem component for each card.

```javascript
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
```

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Click the form link and fill in the Blanks to add your favorite commander card to the list.

## Note

This project requires an internet connection to fetch cards data from a API using render to host.

## Contact

robmarungo.dev@gmail.com

## License

[MIT](https://choosealicense.com/licenses/mit/)
