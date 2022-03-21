import React, { Fragment } from 'react';

import StatBar from './StatBar';

import './style.css';

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
        <span className="table-list">
          <code>{properify(a)}</code>
        </span>
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
        <code><strong>{base_stat}</strong></code>
        <StatBar stat={base_stat} />
        {(idx !== (stats.length - 1)) && <br/>}
      </Fragment>
    );
  });

  const rowGenerator = (name, desc) => (
    <tr className="poke-table_row">
      <td className="poke-table_name-col">{name}</td>
      <td className="poke-table_desc-col">{desc}</td>
    </tr>
  );


  return (
    <div className="right-column">
      <table id="poke-stat-table">
        <tbody>
          {rowGenerator('Abilities', pokeAbilities)}

          {rowGenerator('Height', height)}

          {rowGenerator('Species', species.toProperCase())}

          {rowGenerator('Base Stats', pokeStats)}

          {rowGenerator('Weight', weight)}
        </tbody>
      </table>
    </div>
  );
};

export default RightColumn;
