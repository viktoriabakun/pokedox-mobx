import type { FC } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface IPokemonListItem {
  data: any;
}

const PokemonListItem: FC<IPokemonListItem> = ({ data }: any) => {
  const detailsLink = `details/${data.name as string}`;

  return (
    <Link to={detailsLink} className={styles.itemContainer}>
      <div>
        <img src={data.sprites.front_default} alt="pokemon" width="96" height="96" />
      </div>
      <div className={styles.itemContent}>
        <div>
          #{data.id} <strong>{data.name}</strong>
        </div>
        <div>Types: {data.types.map((t: any) => t.type.name as string).join(', ')}</div>
      </div>
    </Link>
  );
};

export default PokemonListItem;
