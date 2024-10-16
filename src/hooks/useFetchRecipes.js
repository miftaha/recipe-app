import axios from 'axios'
import { useState } from 'react'

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '20',
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

  const fetchRecipes = async (searchTerm) => {
    setLoading(true)
    setError(null)
    setRecipes([])
    try {
      const reqOption = { ...options }
      if (searchTerm) {
        reqOption.params.q = searchTerm
      }
      const response = await axios.request(reqOption)
      setRecipes(response.data.results)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return [fetchRecipes, { recipes, loading, error }]
}

export default useFetchRecipes
