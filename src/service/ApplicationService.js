import { publicFetch } from '../utils/fetch'

const getApplication = async() => {
  try {
    const { status, data } = await publicFetch.get(`/application`)
    return { status, data }
  } catch (error) {
    console.log(error)
  }
}

export {
  getApplication
}