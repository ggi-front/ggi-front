import { ISggsType } from '@/app/data-detail/components/SearchContainer/components/AreaContainer/types'
import { customFetch } from '@/app/shared/utils/customFetch'

export const getSggs = async (sd: string): Promise<ISggsType> => {
  try {
    const data = await customFetch(`/ggi/api/location/area/${sd}/sggs`)
    console.log('가져온 지역 데이터:', data)
    return data.data
  } catch (error) {
    console.error('지역 데이터를 가져오는 중 오류 발생:', error)
  }
}
