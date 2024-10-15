const Card = () => {
  return (
    <div className="card">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCE-ZmH20TpGVBXpHOmZnhAIPUiW6JnXFvww&s"
        alt=""
      />
      <div className="card-content">
        <h3>title</h3>
        <div className="card-info">
          <div className="tag">
            <p>healthy Eating</p>
          </div>
          <p className="time-text">30 mins</p>
        </div>
      </div>
    </div>
  )
}

export default Card
