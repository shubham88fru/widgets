import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log('Hi');
  }); // null -> after every render, [] -> only after 1st render, [term] -> 1st render and whenever term changes

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="ipt">Enter Search Term</label>
          <input
            id="ipt"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
