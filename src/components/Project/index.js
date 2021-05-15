import React, { useState } from 'react';
import Modal from '../Modal'

const PortfolioItems = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Screen Genius',
      description: 'A website designed to help users find movies they may not have seen before.',
      tools: 'Built with  HTML, Bulma CSS, JavaScript, The Movie Database API and the Utelly API.',
      website_1: 'https://screen-genius.github.io/',
      website_2: 'https://github.com/screen-genius/screen-genius.github.io'
    }
    
  ]);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [isModalOpen, setIsModalOpen] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i})
    setIsModalOpen(!isModalOpen);
  }

  const currentPhotos = photos.filter((photo) => photo.category === category);



  return (
      <div>
        {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} /> }
          <div className="row">
              {currentPhotos.map((image, i)=> (
                <div className="card border-left-0 border-top-0 border-right-0 text-center justify-content-center">
                  <img 
                    src={require(`../../assets/images/small/${i}.png`).default}
                    alt={image.name}
                    className="thumbnail"
                    onClick={() => toggleModal(image, i)}
                    key={image.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{image.name}</h5>
                    <p className="card-text">{image.description}</p>
                    <button onClick={() => toggleModal(image, i)} className="btn btn-info rounded-pill">Learn More</button>
                  </div>
                </div>
                  
              ))} 
          </div>
      </div>
  );
}

export default PortfolioItems;