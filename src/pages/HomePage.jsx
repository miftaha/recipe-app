import { useEffect } from 'react'
import useFetchRecipes from '../hooks/useFetchRecipes'
import CardList from '../components/CardList'
import Header from '../components/Header'
import Loading from '../components/Loading'

function HomePage() {
  const [fetchRecipes, { recipes, loading, error }] = useFetchRecipes()
  useEffect(() => {
    fetchRecipes()
  }, [])

  const handleSearch = (searchTerm) => {
    console.log(searchTerm)
    if (searchTerm) {
      fetchRecipes(searchTerm)
    }
  }
  return (
    <>
      <Header handleSearch={handleSearch} />
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {recipes && <CardList recipes={recipes} />}
    </>
  )
}
export default HomePage
