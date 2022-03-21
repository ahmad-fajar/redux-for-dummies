import React, { Fragment, useState } from 'react';

const RightColumn = props => {
  const {
    abilities,
    height,
    species,
    stats,
    weight,
  } = props;

  const properify = s => s.replace('-', ' ').toProperCase();

  const pokeAbilities = abilities.map((a, idx) => {
    return (
      <Fragment key={a}>
        <span className="table-list">- {properify(a)}</span>
        {(idx !== (abilities.length - 1)) && <br/>}
      </Fragment>
    );
  });

  const pokeStats = stats.map((s, idx) => {
    const {
      base_stat,
      name: statName,
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
            <td>{species.toProperCase()}</td>
          </tr>

          <tr>
            <td>Stats</td>
            <td>{pokeStats}</td>
          </tr>

          <tr>
            <td>Weight</td>
            <td>{weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RightColumn;
