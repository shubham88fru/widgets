import React, { useState } from 'react';

import Accordian from './components/Accordian';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordian items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        options={options}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default App;
