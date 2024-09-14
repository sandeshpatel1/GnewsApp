import React from 'react';

const NewsItem = ({ title, description, imageUrl, Url, source }) => {
    return (
        <div className='my-3'>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={!imageUrl ? "https://media.istockphoto.com/photos/media-concept-multiple-television-screens-picture-id1314239661?b=1&k=20&m=1314239661&s=170667a&w=0&h=XCE09ijuheVe-qHGRpbj3byy9LDDBgcgVRCwtSuIAz4=" : imageUrl}
                    className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '10px' }}>{title}</h5>
                    <p className="card-text" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3, overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '10px' }}>{description}</p>
                    <a href={Url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{marginTop: '10px', position: 'relative', bottom: '10px' }}>Read More</a>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;
