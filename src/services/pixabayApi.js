import axios from 'axios'

const URL = 'https://pixabay.com/api/'
const API_KEY = '19198379-0ed3980afe313d950b21d5f73'

export const getPixaBayImages = async type => {
  const url = `${URL}?key=${API_KEY}&q=${type}`
  const result = await axios.get(url)
  return result
}