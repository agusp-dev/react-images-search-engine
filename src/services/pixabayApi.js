import axios from 'axios'

const URL = 'https://pixabay.com/api/'
const API_KEY = '19198379-0ed3980afe313d950b21d5f73'
const COUNT = 100

export const getPixaBayImages = async type => {
  const url = `${URL}?key=${API_KEY}&q=${type}&per_page=${COUNT}`
  const result = await axios.get(url)
  return result
}