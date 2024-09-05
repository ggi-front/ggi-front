import AreaAddButton from '@/app/data-detail/components/SearchContainer/components/AreaContainer/components/AreaAddButton'
import { useGetSdsQuery } from '@/app/data-detail/components/SearchContainer/components/AreaContainer/hooks/useGetSdsQuery'
import { useGetSggsQuery } from '@/app/data-detail/components/SearchContainer/components/AreaContainer/hooks/useGetSggsQuery'
import { useGetUmdsQuery } from '@/app/data-detail/components/SearchContainer/components/AreaContainer/hooks/useGetUmdsQuery'
import ToggleButton from '@/app/shared/components/buttons/ToggleButton'
import FilterSelect from '@/app/shared/components/inputs/FilterSelect'
import ErrorText from '@/app/shared/components/text/ErrorText'
import FilterTitle from '@/app/shared/components/text/FilterTitle'
import Image from 'next/image'
import { useState } from 'react'

export default function AreaContainer() {
  const [isToggled, setIsToggled] = useState(false)
  const [areaArray, setAreaArray] = useState([])
  const [sds, setSds] = useState('시도')
  const [sggs, setSggs] = useState('시군구')
  const [umds, setUmds] = useState('읍면동')

  const { data: sdsData } = useGetSdsQuery()
  const { data: sggsData } = useGetSggsQuery(sds)
  const { data: umdsData } = useGetUmdsQuery(sds, sggs)

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  const handleAddArea = () => {
    if (sds === '시도' && sggs === '시군구' && umds === '읍면동') {
      alert('지역을 선택해주세요')
      return
    }

    let area
    if (sggs === '전체' && umds === '전체') {
      area = `${sds} ${sggs}`
    } else {
      area = `${sds} ${sggs} ${umds}`
    }

    if (areaArray.includes(area)) {
      alert('이미 추가된 지역입니다.')
      return
    }

    setAreaArray([...areaArray, area])
  }

  const handleDeleteArea = (area: string) => {
    if (!areaArray.includes(area)) {
      alert('해당 지역이 목록에 없습니다.')
      return
    }

    const updatedArray = areaArray.filter((item) => item !== area)
    setAreaArray(updatedArray)
  }

  const handleChangeSds = (value: string) => {
    setSds(value)
    setSggs('전체')
    setUmds('전체')
  }

  const handleChangeSggs = (value: string) => {
    setSggs(value)
    setUmds('전체')
  }

  const handleChangeUmds = (value: string) => {
    setUmds(value)
  }

  return (
    <div>
      <FilterTitle title="검색지역" />
      <div className="w-full flex flex-col gap-3 mt-3 mb-8 ggi:mt-2 ggi:mb-5">
        <div className="flex justify-between ggi:flex-col ggi:gap-2">
          <ToggleButton
            isToggled={isToggled}
            handleToggle={handleToggle}
            buttonTextArrays={['법원', '지역']}
          />
          <div className="flex justify-between gap-2 relative ggi:flex-col">
            <div className="absolute right-0 -top-8 ggi:static">
              <ErrorText text="용도 복수선택 시 한 가지 지역만 선택할 수 있습니다" />
            </div>
            <FilterSelect
              handleChange={handleChangeSds}
              value={sds}
              options={sdsData?.sds}
              none
              error
            />
            <FilterSelect
              handleChange={handleChangeSggs}
              value={sggs}
              options={sggsData?.sggs}
              disabled={sds === '시도'}
              error
            />
            <FilterSelect
              handleChange={handleChangeUmds}
              value={umds}
              options={umdsData?.umds}
              disabled={sds === '시도' || sggs === '전체'}
              error
            />
          </div>
          <AreaAddButton onClick={handleAddArea} />
          <button className="w-[260px] h-[50px] border border-[#E5E7EB] rounded-2xl flex justify-center items-center text-[16px] font-bold text-[#6B7280] ggi:hidden">
            지역테마
          </button>
        </div>
        <div className="w-full py-[14px] px-4 rounded-2xl gap-2 flex flex-wrap bg-[#F8FAFC] ggi:py-[10px]">
          {areaArray.length > 0 ? (
            areaArray.map((area, index) => (
              <div key={index} className="flex items-center gap-[2px]">
                <p className="text-[15px] font-normal text-[#1E40AF]">{area}</p>
                <button onClick={() => handleDeleteArea(area)}>
                  <Image
                    width={14}
                    height={14}
                    src="/images/area_delete.png"
                    alt="지역삭제버튼"
                  />
                </button>
              </div>
            ))
          ) : (
            <p className="text-[16px] font-normal text-[#6B7280]">
              검색할 지역을 추가하세요
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
