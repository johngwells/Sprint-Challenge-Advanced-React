import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div>
      {console.log(player)}
      <h1>Player: {player.name}</h1>
      <p>{player.searches}</p>
    </div>
  );
}

export default PlayerCard;
