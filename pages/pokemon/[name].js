export default function SinglePokemon({ poke }) {
  return (
    <div>
      <img className={styles.cardImage} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="" />
      <h1>Single pokemon={poke.name}</h1>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ctx.query.name}`);
  const poke = await res.json();

  return {
    props: {
      data: poke,
    },
  };
}
