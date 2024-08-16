import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query'
import { useCallback } from 'react'
import getSido from 'remote/dm/search/getSido'

const useSido = () => {
  const queryClient = useQueryClient()
  const initSido = useCallback((sido: {count: number, sds: string[]}) => {
    return queryClient.setQueryData(['sido'], sido)
  }, [])

  return {
    initSido
  }
}

export default useSido
