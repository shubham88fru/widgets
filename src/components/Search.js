import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => term && search(), 500);

    return () => clearTimeout(timeoutId); //Called on every subsequent render before the use effect callback
  }, [term]); // null -> after every render, [] -> only after 1st render, [term] -> 1st render and whenever term changes

  const renderedResults = results.map((res) => {
    return (
      <div className="item" key={res.pageid}>
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${res.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{res.title}</div>
          <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
