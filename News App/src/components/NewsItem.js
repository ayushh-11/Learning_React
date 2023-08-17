import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl,url} = this.props;
    return (
      <div>
        <div className="card" style={{width:"18rem"}}>
          <img src={imageUrl?imageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/230811082607-james-webb-space-telescope-sunrise-arc.jpg?c=16x9&q=w_800,c_fill"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title?title.slice(0,66):" "}{title.length>66&&'.....'}</h5>
              <p className="card-text">{description?description.slice(0,125):" "}{description&&description.length>125?'.....':""}</p>
              <a href={url} className="btn btn-primary btn-sm" target="_blank">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem