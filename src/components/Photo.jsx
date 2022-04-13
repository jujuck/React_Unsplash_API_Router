import React from 'react'

const Photo = ({ photo }) => {
  return (
    <div className="col-12">
      <div className="card rounded shadow">
        <h2 className="text-center">{photo.user.username}</h2>
        <img src={photo.urls.thumb} alt="" />
      </div>
    </div>
  )
}

export default Photo