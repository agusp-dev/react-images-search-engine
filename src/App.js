import { useState, useEffect } from 'react'
import { Form, ImagesList } from './components'
import { getPixaBayImages } from './services'

function App() {

  const IMAGES_PER_PAGE = 8

  const [search, startSearch] = useState('')
  const [images, setImages] = useState([])
  const [pageImages, setPageImages] = useState([])

  //pager
  const [currentPage, setCurrentPage] = useState(1)
  const [pagesCount, setPagesCount] = useState(1)

  useEffect(() => {
    if (!search) return
    const getApiImages = async () => {
      const apiResult = await getPixaBayImages(search)
      processApiResult(apiResult)
    }
    getApiImages()
  }, [search])

  const processApiResult = result => {
    if (result.status !== 200) return alert(`Error: ${result.statusText}`)
    console.log(result)
		const { hits } = result.data
		
    setPagesCount( Math.ceil(hits.length / IMAGES_PER_PAGE) )
    setImages(hits)
  }

  useEffect(() => {
		if (images && images.length > 0) showPageImages()
  }, [images, currentPage])

  const increaseCurrentPage = () => {
    if (currentPage < pagesCount) {
      setCurrentPage(currentPage + 1)
    }
  }

  const decreaseCurrentPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    } 
  }

  const showPageImages = () => {
    //show images page
    const indexStart = currentPage * IMAGES_PER_PAGE - IMAGES_PER_PAGE
		const indexEnd = currentPage * IMAGES_PER_PAGE - 1 
		setPageImages( images.slice(indexStart, indexEnd + 1) )
	}

  return (
    <div className="App">
      <div className='container'>
        <div className='jumbotron'>
          <p className='lead text-center'>Buscador de Imagenes</p>
          <Form startSearch={ startSearch }/>
        </div>
        {images && (
          <div className='row justify-content-center mb-4'>
            <ImagesList images={ pageImages }/>
            <button 
              type='button'
              className='bbtn btn-info mr-1'
              onClick={ decreaseCurrentPage }
            >&laquo; Previus
            </button>
            <div className='ml-3 mr-3'>
              { `Page ${ currentPage } / ${ pagesCount }` }
            </div>
            <button 
              type='button'
              className='bbtn btn-info mr-1'
              onClick={ increaseCurrentPage }
            >Next &raquo;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
