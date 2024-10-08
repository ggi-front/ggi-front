import { Dispatch, SetStateAction } from 'react'
import Address from './Address'
import UsageComponent from './Usage'
import { SearchCondition } from '@/app/data-pro/models/Common'

interface SearchComponentProps {
  searchCondition: SearchCondition
  setSearchCondition: Dispatch<SetStateAction<SearchCondition>>
}

export default function SearchComponent({
  searchCondition,
  setSearchCondition,
}: SearchComponentProps) {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex flex-row w-full gpa-[10px]">
        <p className="text-gray-800 text-xl font-bold font-['SUIT'] leading-[27px]">
          {searchCondition.keyword} &nbsp;
        </p>
        <p className="text-gray-500 text-xl font-medium font-['SUIT'] leading-[27px]">
          에 대한 통계를 조회합니다
        </p>
      </div>
      <div>
        <div className="flex h-[50px] items-center gap-[10px] self-auto rounded-t-[18px] border border-[#E5E7EB] bg-[#F8FAFC] pt-[15px] pb-[15px] pl-[20px]">
          <p className="text-gray-500 text-[15px] font-extrabold font-['SUIT'] leading-tight tracking-tight">
            조건 설정
          </p>
        </div>
        <div className="flex flex-row gap-[32px] p-[40px] items-start self-stretch rounded-b-[18px] border border-r-[#E5E7EB] border-b-[#E5E7EB] border-l-[#E5E7EB] bg-white">
          <Address
            searchCondition={searchCondition}
            setSearchCondition={setSearchCondition}
          />
          <UsageComponent />
        </div>
      </div>
    </div>
  )
}
