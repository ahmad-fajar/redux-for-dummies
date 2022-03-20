import React, { Fragment, useState } from 'react';

const RightColumn = props => {
  const {
    abilities,
    height,
    species: {
      name: speciesName,
    },
    stats,
  } = props;

  const properify = s => s.replace('-', ' ').toProperCase();

  const pokeAbilities = abilities.map((ab, idx) => {
    console.log(ab)
    const { ability: { name: abilityName } } = ab;
    return (
      <Fragment key={abilityName}>
        <span className="table-list">- {properify(abilityName)}</span>
        {(idx !== (abilities.length - 1)) && <br/>}
      </Fragment>
    );
  });

  const pokeStats = stats.map((s, idx) => {
    const {
      base_stat,
      stat: { name: statName },
    } = s;

    return (
      <Fragment key={statName}>
        {properify(statName)} &nbsp;
        {base_stat}
        {(idx !== (stats.length - 1)) && <br/>}
      </Fragment>
    );
  });


  return (
    <div className="right-column">
      <table>
        <tbody>
          <tr>
            <td>Abilities</td>
            <td>{pokeAbilities}</td>
          </tr>

          <tr>
            <td>Height</td>
            <td>{height}</td>
          </tr>

          <tr>
            <td>Species</td>
            <td>{speciesName.toProperCase()}</td>
          </tr>

          <tr>
            <td>Stats</td>
            <td>{pokeStats}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RightColumn;
