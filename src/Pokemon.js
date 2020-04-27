import React from "react";
import "./Pokemon.scss";

export default function Pokemon(props) {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body pb-0">
        <h5 className="card-title Pokemon">{props.name}</h5>
        <h6 className="card-subtitle mb-3 text-info">
          {props.awesome ? "An awesome Pokemon" : "Not awesome"}
        </h6>
        <p>
          Weight: {props.weight} kg
          <br />
          <br />
          {props.abilities.length} abilities:
        </p>
      </div>
      <ul className="list-group list-group-flush">
        {props.abilities.map((ability) => {
          return <li className="list-group-item">{ability}</li>;
        })}
      </ul>
      <button className="moreButton">
        <a class="moreButton:hover" target="_blank" rel="nofollow noopener">
          More info
        </a>
      </button>
    </div>
  );
}
