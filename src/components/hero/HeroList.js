import { HeroCards } from "./HeroCards";
import { getHeroesByPublisher } from "../../selectores/getHeroByPublisher";

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
        {
            heroes.map( (hero) => (
                <HeroCards
                  key={hero.id} 
                  {...hero}
                />
            ))
        }
    </div>
  );
};
