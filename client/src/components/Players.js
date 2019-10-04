import React from 'react';
// import PlayerCard from './PlayerCard';

const Players = ({ players }) => {
  return (
    <div>
      {players.map((player) => (
        <div className='player-container' key={player.id}>
          {console.log(player)}
          <h2>{player.name}</h2>
          <p>{player.country}</p>
          <p>({player.searches})</p>
        </div>
      ))}
    </div>
  );
}

export default Players;