import useFetchRecipes from '../../hooks/useFetchRecipes'
import CardList from '../CardList'
import Header from '../Header'
import Loading from '../Loading'

function HomePage() {
  const [recipes, loading, error] = useFetchRecipes()
  return (
    <>
      <Header />
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {recipes && <CardList recipes={recipes} />}
    </>
  )
}
export default HomePage
