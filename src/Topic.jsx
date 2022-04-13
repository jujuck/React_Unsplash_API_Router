import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
  return (
    <div className="col-6">
      <div className="card m-2">
        <h3 className="text-center">{topic.title}</h3>
        <h6>{topic.description.substring(0, 100)}...</h6>
        <p>Nombre de photos disponible : {topic.total_photos}</p>
        <Link to={`/photos/${topic.title}/${topic.id}`} className="btn btn-success">Voir les photos</Link>
      </div>
    </div>
  )
}

export default Topic