import { heroes } from "../data/heroes"


export const getHeroById = ( id = '') => {
    console.log('getHerobyid called')
    return heroes.find(hero => hero.id === id)
}