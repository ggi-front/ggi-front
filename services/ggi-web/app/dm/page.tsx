'use client'
import Info from 'app/dm/components/Info'
import List from 'app/dm/components/list/List'
import MyDm from 'app/dm/components/MyDM'
import Search from 'app/dm/components/search/Search'
import { Container, DmContainer } from 'app/dm/components/styles/Boxes'
import { ITabStatus } from '@/models/dm/DM'
import getAuth from '@/remote/dm/auth/getAuth'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

interface IUser {
  authorities: Array<string>,
  userId: string
}

export default function Page (props: any) {
  const token = props.searchParams.token
  const [tabs, setTabs] = useState<ITabStatus>({
    expected: true,
    ongoing: false,
    mine: false
  })

  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getAuth(token)
  })

  useEffect(() => {
    if (!token) return
  }, [token])

  return (
    <DmContainer>
      <Container>
        <Info tabs={tabs} setTabs={setTabs} />
        {tabs.mine ? <MyDm tabs={tabs}/> 
        : (<>
          <Search tabs={tabs} /> 
          <List tabs={tabs}/>
        </>)}
      </Container>
    </DmContainer>
  )
}