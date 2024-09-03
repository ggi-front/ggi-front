import ToggleButton from '@/app/shared/components/buttons/ToggleButton'
import FilterSelect from '@/app/shared/components/inputs/FilterSelect'
import ErrorText from '@/app/shared/components/text/ErrorText'
import FilterTitle from '@/app/shared/components/text/FilterTitle'
import Image from 'next/image'
import { useState } from 'react'

export default function AreaContainer() {
  const [isToggled, setIsToggled] = useState(false)
  const [areaArray, setAreaArray] = useState(['서울시 성수동'])

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  return (
    <div>
      <FilterTitle title="검색지역" />
      <div className="w-full flex flex-col gap-3 mt-3 mb-8">
        <div className="flex justify-between">
          <ToggleButton
            isToggled={isToggled}
            handleToggle={handleToggle}
            buttonTextArrays={['법원', '지역']}
          />
          <div className="flex justify-between gap-2 relative">
            <FilterSelect error />
            <FilterSelect error />
            <FilterSelect error />
            <div className="absolute right-0 -top-8">
              <ErrorText text="용도 복수선택 시 한 가지 지역만 선택할 수 있습니다" />
            </div>
          </div>
          <button className="w-[50px] h-[50px] border border-[#E5E7EB] rounded-2xl flex justify-center items-center">
            <Image
              width={24}
              height={24}
              src="/images/plus.png"
              alt="지역추가 이미지"
            />
          </button>
          <button className="w-[260px] h-[50px] border border-[#E5E7EB] rounded-2xl flex justify-center items-center text-[16px] font-bold text-[#6B7280]">
            지역테마
          </button>
        </div>
        <div className="w-full py-[14px] px-4 rounded-2xl gap-2 flex flex-wrap bg-[#F8FAFC]">
          {areaArray.length > 0 ? (
            areaArray.map((area, index) => (
              <div key={index} className="flex items-center gap-[2px]">
                <p className="text-[15px] font-normal text-[#1E40AF]">{area}</p>
                <button>
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
