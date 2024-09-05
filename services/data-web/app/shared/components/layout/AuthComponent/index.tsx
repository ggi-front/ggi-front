'use client'

import { useAuthMutation } from '@/app/shared/hooks/useAuthMutation'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function AuthComponent() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const { mutate: authMutate } = useAuthMutation(token)

  useEffect(() => {
    authMutate()
  }, [])

  return <></>
}
