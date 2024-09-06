import AreaAddButton from '@/app/data-detail/components/SearchContainer/components/AreaContainer/components/AreaAddButton'
import { useGetSdsQuery } from '@/app/data-detail/components/SearchContainer/components/AreaContainer/hooks/useGetSdsQuery'
import { useGetSggsQuery } from '@/app/data-detail/components/SearchContainer/components/AreaContainer/hooks/useGetSggsQuery'
import { useGetUmdsQuery } from '@/app/data-detail/components/SearchContainer/components/AreaContainer/hooks/useGetUmdsQuery'
import ToggleButton from '@/app/shared/components/buttons/ToggleButton'
import FilterSelect from '@/app/shared/components/inputs/FilterSelect'
import ErrorText from '@/app/shared/components/text/ErrorText'
import FilterTitle from '@/app/shared/components/text/FilterTitle'
import {
  useAreaStore,
  useErrorStore,
  useUseStore,
} from '@/app/shared/store/useDetailFilterStore'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function AreaContainer() {
  const [isToggled, setIsToggled] = useState(false)
  const [sds, setSds] = useState('시도')
  const [sggs, setSggs] = useState('시군구')
  const [umds, setUmds] = useState('읍면동')
  const [isLengthError, setIsLengthError] = useState(false)

  const areaArray = useAreaStore((state) => state.areaArray)
  const useArray = useUseStore((state) => state.useArray)
  const addArea = useAreaStore((state) => state.addArea)
  const removeArea = useAreaStore((state) => state.removeArea)

  const isFilterError = useErrorStore((state) => state.isFilterError)
  const setIsFilterError = useErrorStore((state) => state.setIsFilterError)

  useEffect(() => {
    if (useArray.length > 1 && areaArray.length > 1) {
      setIsFilterError(true)
    } else {
      setIsFilterError(false)
    }
  }, [useArray, areaArray, setIsFilterError])

  const { data: sdsData } = useGetSdsQuery()
  const { data: sggsData } = useGetSggsQuery(sds)
  const { data: umdsData } = useGetUmdsQuery(sds, sggs)

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  const splitArea = (area: string) => {
    const parts = area.trim().split(' ')

    const umds = parts.pop()
    const sggs = parts.pop()
    const sds = parts.join(' ')

    return [sds, sggs, umds]
  }

  // 하위 지역이 이미 선택된 경우 상위 지역을 선택할 수 없도록 제한하는 함수
  const isSubRegionSelected = () => {
    return areaArray.some(
      (area) => splitArea(area)[2] && splitArea(area)[2] !== '전체',
    )
  }

  // 중간 카테고리 '전체'가 선택된 경우, 모든 하위 카테고리 선택을 제한하는 함수
  const isAnyMidCategoryWithAllSelected = () => {
    return areaArray.some((area) => splitArea(area)[2] === '전체')
  }

  const simplifyAreaDisplay = (area) => {
    const parts = splitArea(area)

    // 만약 시도와 시군구 둘 다 '전체'인 경우, 첫 번째만 표기 (예: '서울 전체')
    if (parts[1] === '전체' && parts[2] === '전체') {
      return `${parts[0]} 전체`
    }

    return area
  }

  // 이미 선택된 하위 지역이 있는 경우 상위 지역 전체를 선택할 수 없도록 제한하는 함수
  const isSubRegionAlreadySelected = (newArea: string) => {
    const [newSds, newSggs] = splitArea(newArea)
    return areaArray.some(
      (area) => splitArea(area)[1] === newSggs && splitArea(area)[2] !== '전체',
    )
  }

  const isOtherDistrictSubRegionSelected = (newArea: string) => {
    const [newSds, newSggs] = splitArea(newArea)
    return areaArray.some(
      (area) => splitArea(area)[2] && splitArea(area)[1] !== newSggs,
    )
  }

  const handleAddArea = () => {
    if (areaArray.length >= 10) {
      setIsLengthError(true)
      return
    }

    let area = `${sds} ${sggs} ${umds}`

    area = simplifyAreaDisplay(area)

    // 하위 지역이 선택된 경우 다른 구의 하위 지역 선택 제한
    if (isSubRegionSelected() && isOtherDistrictSubRegionSelected(area)) {
      alert(
        '이미 다른 구의 하위 지역이 선택되었습니다. 다른 구의 읍면동은 선택할 수 없습니다.',
      )
      return
    }

    // 하위 지역이 선택된 경우 상위 지역 전체 선택 제한
    if (isSubRegionAlreadySelected(area) && umds === '전체') {
      alert(
        '이미 하위 지역이 선택된 상태에서는 상위 지역 전체를 선택할 수 없습니다.',
      )
      return
    }

    // 중간 카테고리 전체가 선택된 경우 모든 하위 카테고리 선택 제한
    if (isAnyMidCategoryWithAllSelected() && umds !== '전체') {
      alert(
        '중간 카테고리 전체가 이미 선택된 상태에서는 하위 지역을 선택할 수 없습니다.',
      )
      return
    }

    // 첫 번째 선택된 상위 카테고리와 새로운 지역의 상위 카테고리가 동일한지 확인
    if (areaArray.length > 0) {
      const selectedTopCategory = splitArea(areaArray[0])[0] // 첫 번째 선택된 지역의 상위 카테고리 확인
      if (selectedTopCategory !== sds) {
        alert('다른 상위 카테고리는 선택할 수 없습니다.')
        return
      }
    }

    if (areaArray.includes(area)) {
      alert('이미 추가된 지역입니다.')
      return
    }

    setSds('시도')
    setSggs('시군구')
    setUmds('읍면동')

    addArea(area)
  }

  const handleDeleteArea = (area: string) => {
    removeArea(area)
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
            {isLengthError && (
              <div className="absolute right-0 -top-8 ggi:static">
                <ErrorText text="지역은 최대 10개까지 선택할 수 있습니다" />
              </div>
            )}
            {isFilterError && (
              <div className="absolute right-0 -top-8 ggi:static">
                <ErrorText text="용도 복수선택 시 한 가지 지역만 선택할 수 있습니다" />
              </div>
            )}
            <FilterSelect
              handleChange={handleChangeSds}
              value={sds}
              options={sdsData?.sds}
              none
              error={isFilterError || isLengthError}
            />
            <FilterSelect
              handleChange={handleChangeSggs}
              value={sggs}
              options={sggsData?.sggs}
              disabled={sds === '시도'}
              error={isFilterError || isLengthError}
            />
            <FilterSelect
              handleChange={handleChangeUmds}
              value={umds}
              options={umdsData?.umds}
              disabled={sds === '시도' || sggs === '전체'}
              error={isFilterError || isLengthError}
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
