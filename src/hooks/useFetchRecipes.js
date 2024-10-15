import axios from 'axios'
import { useEffect, useState } from 'react'

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '20',
    tags: 'under_30_minutes',
  },
  headers: {
    'x-rapidapi-key': '2ac28022camsh312fe7d6a4d6522p1bef0ajsne28e79f5f806',
    'x-rapidapi-host': 'tasty.p.rapidapi.com',
  },
}

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const fetchRecipes = async () => {
    setLoading(true)
    setError(null)
    setRecipes([])
    try {
      const response = await axios.request(options)
      setRecipes(response.data.results)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRecipes()
  }, [])
  return [recipes, loading, error]
}

export default useFetchRecipes
