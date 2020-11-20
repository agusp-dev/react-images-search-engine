import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ startSearch }) => {

  const onHandleSubmit = e => {
    e.preventDefault()
    const { value } = e.target.searchInput
    if (!value) return
    startSearch(value)
  }

  return (
    <form 
      className='row'
      onSubmit={ onHandleSubmit }>
      <div className='form-group col-md-8'>
        <input 
          type='text'
          name='searchInput'
          className='form-control form-control-lg'
          placeholder='Search an Image. For example: Soccer or Coffee'
        />
      </div>
      <div className='form-group col-md-4'>
        <input 
          type='submit'
          className='btn btn-lg btn-danger btn-block'
          value='Search'/>
      </div>
    </form>
  )
}

Form.propTypes = {
  startSearch: PropTypes.func.isRequired
}

export { Form }