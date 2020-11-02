import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to Star Wars DB</h2>
      <p className="lead">
        This is a Star wars database. Here you can find a lot of helpful information about universe of this awesome film.
      </p>
      <p className="lead">
        There are some information about different <Link to="/planets">Planets</Link>, <Link to="/peoples">Peoples</Link> and <Link to="/starships">Starships</Link>.
      </p>
      <p >
        [Developer note] <br />
        This is a React project, built around this beatiful Star Wars API service ( <a href="https://swapi.dev/" target="_blank" rel="noopener noreferrer">Link</a> ). 
      </p>
      <p>
        If you have some ideas for improving the site, or for another reasons want to contact with a developer and maintainer, please write a mail to <a href="mailto:danzino21@gmail.com">danzino21@gmail.com</a>.
      </p>
    </div>
  )
}

export default HomePage
