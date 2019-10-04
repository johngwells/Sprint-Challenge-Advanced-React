import React from 'react';

const PlayerCard = ({ player }) => {
  return (
    <div>
      {console.log(player)}
      <h1>Player: {player.name}</h1>
    </div>
  );
}

export default PlayerCard;
