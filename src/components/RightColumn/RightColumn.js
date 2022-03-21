import React, { Fragment } from 'react';

import StatBar from './StatBar';

import './style.css';

const RightColumn = props => {
  const {
    abilities,
    evolution_chain = [],
    evolves_from,
    height,
    is_legendary,
    is_mythical,
    showPokemon = () => {},
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

  const evolutionList = ((chain) => {
    if (!chain?.length) {
      return 'None';
    }

    const list = chain.map(c => {
      const steps = c.split('|');
      const stepElem = steps.map(s => {
        if (s === species) {
          return <span key={s}><strong>{s.toProperCase()}</strong></span>;
        }
        return (
          <span key={s} className="link" onClick={() => showPokemon(s)}>
            {s.toProperCase()}
          </span>
        );
      });

      return (
        <p key={c} className="evolution-path">
          {stepElem}
        </p>
      );
    });

    return list;
  })(evolution_chain);

  return (
    <div className="right-column">
      <table id="poke-stat-table">
        <tbody>
          {rowGenerator('Legendary', is_legendary ? 'Yes' : 'No')}

          {rowGenerator('Mythical', is_mythical ? 'Yes' : 'No')}

          {rowGenerator('Abilities', pokeAbilities)}

          {rowGenerator('Height', height)}

          {rowGenerator('Weight', weight)}

          {rowGenerator('Species', species.toProperCase())}

          {rowGenerator('Evolves from', evolves_from ? evolves_from.toProperCase() : '-')}

          {rowGenerator('Evolution path', evolutionList)}

          {rowGenerator('Base Stats', pokeStats)}

        </tbody>
      </table>
    </div>
  );
};

export default RightColumn;
