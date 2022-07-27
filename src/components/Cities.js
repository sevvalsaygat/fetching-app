import { useState, useEffect } from 'react'

function Cities() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://tr-cities-api.herokuapp.com/cities?page=1&per_page=100')
      .then((res) => res.json())
      .then((data) => setCities(data.cities))
      .catch(e => console.log(e))
      .finally(() => setIsLoading(false));
  }, [])
  
  return (
    <div>
      <h1>Cities</h1>
      {isLoading && <div>Loading...</div>}
      {cities.map(city => (
          <div key={city.id}>{city.name}</div>
        ))}
    </div>
  )
}

export default Cities