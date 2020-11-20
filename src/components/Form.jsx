import React from 'react'

const Form = () => {
  return (
    <form className='row'>
      <div className='form-group col-md-8'>
        <input 
          type='text'
          className='form-control form-control-lg'
          placeholder='Search an Image. For example: Soccer or Coffee'
        />
      </div>
      <div className='form-group col-md-4'>
        <input 
          type='submit'
          className='btn btn-lg btn-danger btn-block'/>
      </div>
    </form>
  )
}

export { Form }