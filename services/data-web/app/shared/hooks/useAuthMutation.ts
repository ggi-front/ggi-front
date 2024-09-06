import { getAuth } from '@/app/shared/api/getAuth'
import { useMutation } from '@tanstack/react-query'

export const useAuthMutation = (token: string) => {
  return useMutation({
    mutationFn: () => getAuth(token),
    mutationKey: ['auth', token],
  })
}
