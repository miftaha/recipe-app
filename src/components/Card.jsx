import { useNavigate } from 'react-router-dom'

/* eslint-disable react/prop-types */
const Card = ({ recipe }) => {
  const { id, thumbnail_url, topics, total_time_minutes, name } = recipe
  const navigate = useNavigate()

  const navigateToRecipePage = () => {
    navigate(`/recipe/${id}`)
  }
  return (
    <div className="card" onClick={navigateToRecipePage}>
      <img src={thumbnail_url} alt="" />
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <div className="tag">
            {topics.length > 0 ? <p>{topics[0].name}</p> : null}
          </div>
          {total_time_minutes ? (
            <p className="time-text">{total_time_minutes} mins</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Card
