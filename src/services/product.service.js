import axiosApiInstance from '@/plugins/api'
const BASE_INVENTORY_ENDPOINT = '/api'

export const getProductsApi = async (filter) => {
  return await axiosApiInstance.get(`${BASE_INVENTORY_ENDPOINT}/products`, {
    params: filter,
  })
}