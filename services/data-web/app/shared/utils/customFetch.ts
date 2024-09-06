interface FetchOptions extends RequestInit {
  auth?: boolean // 인증이 필요한 경우 true로 설정
}

export const customFetch = async (url: string, options: FetchOptions = {}) => {
  // 요청 전 인터셉터: 공통 처리 (예: 헤더 설정, 로깅)
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  }

  if (options.auth) {
    const token = localStorage.getItem('token')
    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`
      defaultHeaders['Api_Key'] = 'iyv0Lk8v.GMiSXcZDDSRLquqAm7M9YHVwTF4aY8zr'
    }
  }

  const finalOptions: RequestInit = {
    ...options,
    headers: {
      Api_Key: 'iyv0Lk8v.GMiSXcZDDSRLquqAm7M9YHVwTF4aY8zr',
      ...defaultHeaders,
      ...options.headers,
    },
  }

  try {
    const response = await fetch(url, finalOptions)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    // 에러 핸들링 인터셉터
    console.error('Fetch API 에러:', error)
    throw error
  }
}
