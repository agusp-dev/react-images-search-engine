import React from 'react'
import PropTypes from 'prop-types'
import { ImageCard } from '.'

const ImagesList = ({ images }) => {
  return (
    <div className='col-12 p-5 row'>
      {images.map(image => <ImageCard key={ image.id } hit={ image }/>)}
    </div>
  )
}

ImagesList.propTypes = {
  images: PropTypes.array.isRequired
}

export { ImagesList }