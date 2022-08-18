import React from 'react'
export const BlogItem = ({ tparts, onDelete }) => {
  return (
    <>

      <div className="row">
        <div className="col-sm-6">
          <div className="card text-bg-light mb-3" style={{ maxWidth: "26rem" }}>
            <div className="card-header">{tparts.userName}</div>
            <div className="card-body">
              <h5 className="card-title">{tparts.title}</h5>
              <p className="card-text">{tparts.desc}</p>
            </div>
            <button className="btn btn-sm btn-light" onClick={() => { onDelete(tparts) }}>Delete</button>
          </div>
        </div>
      </div>
    </>
  )
}