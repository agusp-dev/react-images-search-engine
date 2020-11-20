import { useState, useEffect } from 'react'
import { Form } from './components'
import { getPixaBayImages } from './services'

function App() {

  const [search, startSearch] = useState('')
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
    const { hits } = result.data
    console.log('hits', hits)
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='jumbotron'>
          <p className='lead text-center'>Buscador de Imagenes</p>
          <Form startSearch={ startSearch }/>
        </div>
      </div>
    </div>
  );
}

export default App;
