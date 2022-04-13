import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Photo from '../components/Photo';

const Photos = () => {
  const [photo, setPhoto] = useState({
    user: { username: "" },
    urls: { thumb: "" }
  })
  const { toto, id } = useParams();

  useEffect(() => {
    axios.get(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS}&topics=${id}`)
      .then(res => setPhoto(res.data))
      .catch(err => console.error(err))
  }, [id])

  return (
    <div>
      <div className="text-center">
        <Link to="/" className="btn btn-success">Retourner au Topics</Link>
      </div>

      <h1 className="text-center">Theme : {toto}</h1>
      <div className="container">
        <div className="row">
          <Photo photo={photo} />

        </div>
      </div>
    </div>
  )
}

export default Photos