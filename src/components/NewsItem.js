import React from 'react'

const NewsItem = (props)=> {
  
    let {title, description,imageUrl,Url,author,date,source} = props;

    return ( 
    <div className='my-3'>
        <div className="card" >
            <div style={{display :'flex',justifyContent : 'end',position : 'absolute', right : '0'}}>
                <span class="badge rounded-pill bg-danger" >{source}</span>
            </div>
                <img src={!imageUrl ? "https://media.istockphoto.com/photos/media-concept-multiple-television-screens-picture-id1314239661?b=1&k=20&m=1314239661&s=170667a&w=0&h=XCE09ijuheVe-qHGRpbj3byy9LDDBgcgVRCwtSuIAz4=" : imageUrl }
                className="card-img-top" alt={"..."}/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">by {author? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                <a href={Url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
            </div>
        </div>
    </div>
    )
  
}

export default NewsItem