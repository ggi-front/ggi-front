import { getSds } from '@/app/data-detail/components/SearchContainer/components/AreaContainer/api/getSds'
import { useQuery } from '@tanstack/react-query'

export const useGetSdsQuery = () => {
  return useQuery({
    queryKey: ['areaData'],
    queryFn: getSds,
  })
}
