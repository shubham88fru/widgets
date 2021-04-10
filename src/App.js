import React from 'react';

import Accordian from './components/Accordian';
import Search from './components/Search';

const items = [
  {
    title: 'what is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'why use React?',
    content: 'React is a favorite JS lib among engineers',
  },
  {
    title: 'How to use React?',
    content: 'You use React by creating components',
  },
];

const App = () => {
  return (
    <div>
      {/* <Accordian items={items} /> */}
      <Search />
    </div>
  );
};

export default App;
