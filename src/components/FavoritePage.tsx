
import PlanetNav from './PlanetNav'



type Props = {
    planetList : PlanetType[]
}


function FavoritePage({ planetList } : Props) {
  return (
    <div>
        <p>FavoritePage</p>
        <PlanetNav/>
        <PlanetsTitle/>
    </div>
  )
}

export default FavoritePage