import axiosApiInstance from '@/plugins/api'
const BASE_INVENTORY_ENDPOINT = '/api'


export const createSliderApi = async (data) => {
  return await axiosApiInstance.post(`${BASE_INVENTORY_ENDPOINT}/sliders`, data)
}

export const getSlidersApi = async () => {
  return await axiosApiInstance.get(`${BASE_INVENTORY_ENDPOINT}/sliders`)
}

export const updateSliderApi = async (id, data) => {
  return await axiosApiInstance.patch(`${BASE_INVENTORY_ENDPOINT}/sliders/${id}`, data)
}
