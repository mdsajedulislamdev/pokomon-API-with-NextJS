import styles from "../../styles/pokeDetails.module.css";

export default function pokeDetails() {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src="/Assets/Logo.png"></img>
      </div>
      <div className={styles.poke_info_container}>
        <div className={styles.description_container}>
          <h1 className={styles.pokemon_name}>Pokemon #001</h1>
          <p className={styles.pokemon_description}>
            Pikachu is a popular Electric-type Pokémon that has the appearance of a yellow rodent with red cheeks, black-tipped ears, and a lightning bolt-shaped tail. It evolves.
          </p>
          <div className={styles.weight_height_div}>
            <div className={styles.height_container}>
              <div>
                <h2 className={styles.height}>Height</h2>
                <p>2.015</p>
              </div>
              <div>
                <h2 className={styles.weight}>Weight</h2>
                <p>5.210 lbs</p>
              </div>
            </div>
            <div className={styles.category_container}>
              <div>
                <h2 className={styles.category}>Categories</h2>
                <p>Seed</p>
              </div>
              <div>
                <h2 className={styles.ability}>Abilities</h2>
                <p>Overglow blaze</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image_container}>
          <img src="/Assets/poke.png"></img>
        </div>
        <div>
          <div>
            <div className={styles.types_container}>
              <h2>Types</h2>
              <button>Button1</button>
              <button>Button2</button>
            </div>
            <div className={styles.weakness_container}>
              <h2>Weakness</h2>
              <button>Button1</button>
              <button>Button2</button>
              <button>Button3</button>
              <button>Button4</button>
            </div>
            <div className={styles.stats_container}>
              <h2>Stats</h2>
              <p>HP</p>
              <p>Attack</p>
              <p>Defense</p>
              <p>Special Attack</p>
              <p>Special Defense</p>
              <p>Speed</p>
            </div>
          </div>
        </div>
      </div>
      <>
        <img className={styles.left_side_style} src="/Assets/Left.png" alt="left" />
        <img className={styles.right_side_style} src="/Assets/Left.png" alt="right" />
      </>
    </div>
  );
}

// export async function getServerSideProps(ctx) {
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ctx.query.name}`);
//   const poke = await res.json();

//   return {
//     props: {
//       data: poke,
//     },
//   };
// }
