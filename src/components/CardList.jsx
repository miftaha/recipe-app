import Card from './Card'

const CardList = ({ recipes }) => {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card recipe={recipe} key={recipe.id} />
      ))}
    </section>
  )
}

export default CardList
