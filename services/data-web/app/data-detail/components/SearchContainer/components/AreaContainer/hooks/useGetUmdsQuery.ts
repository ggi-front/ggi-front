import { getUmds } from '@/app/data-detail/components/SearchContainer/components/AreaContainer/api/getUmds'
import { useQuery } from '@tanstack/react-query'

export const useGetUmdsQuery = (sd: string, ssg: string) => {
  return useQuery({
    queryKey: ['areaData', sd, ssg],
    queryFn: () => getUmds(sd, ssg),
  })
}
