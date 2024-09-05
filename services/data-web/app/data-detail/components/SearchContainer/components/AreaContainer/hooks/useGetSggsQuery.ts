import { getSggs } from '@/app/data-detail/components/SearchContainer/components/AreaContainer/api/getSggs'
import { useQuery } from '@tanstack/react-query'

export const useGetSggsQuery = (sd: string) => {
  return useQuery({
    queryKey: ['areaData', sd],
    queryFn: () => getSggs(sd),
  })
}
