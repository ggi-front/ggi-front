import SelectIcon from '@/app/shared/components/inputs/FilterSelect/components/SelectIcon'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

interface FilterSelectProps {
  width?: string
  height?: string
  error?: boolean
  options: string[]
  value: string
  disabled?: boolean
  none?: boolean
  handleChange: (value: string) => void
}

export default function FilterSelect({
  width,
  height,
  error,
  options,
  value,
  disabled,
  none,
  handleChange,
}: FilterSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  const handleSelectToggle = () => {
    if (disabled) {
      alert('상위 지역을 먼저 선택해주세요')
      return
    }

    setIsOpen((prev) => !prev)
  }

  const handleClickOption = (value: string) => {
    handleChange(value)
    setIsOpen(false)
  }

  // 바깥 클릭을 감지하는 useEffect
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [selectRef])

  return (
    <div className="relative" ref={selectRef}>
      <div
        className={`flex items-center ${width ? `w-[${width}]` : 'w-[398px]'} ${height ? `h-[${height}]` : 'h-[50px]'}  border ${error ? 'border-[#EF4444]' : 'border-[#E5E7EB]'}  rounded-2xl px-4 cursor-pointer ggi:w-full ggi:h-[42px]`}
        onClick={handleSelectToggle}
      >
        <p className="text-[16px] font-normal text-[#6B7280]">{value}</p>
        <Image
          width={16}
          height={16}
          src="/images/select_icon.png"
          alt="필터 셀렉트 아이콘"
          className="absolute top-1/2 -translate-y-1/2 right-2 -z-10"
        />
      </div>
      {isOpen && (
        <ul className="absolute top-[62px] left-0 w-full border border-[#E5E7EB] rounded-2xl z-50 flex flex-col bg-white max-h-[300px] overflow-y-auto custom-scrollbar">
          {!none && (
            <li
              className="relative py-3 pl-12 pr-3 text-[16px] font-normal text-[#6B7280] hover:bg-gray-100 cursor-pointer"
              onClick={() => handleClickOption('전체')}
            >
              전체
              {'전체' === value && (
                <div className="absolute left-[18px] top-1/2 -translate-y-1/2">
                  <SelectIcon />
                </div>
              )}
            </li>
          )}

          {options.map((option, index) => (
            <li
              key={index}
              className="relative py-3 pl-12 pr-3 text-[16px] font-normal text-[#6B7280] hover:bg-gray-100 cursor-pointer"
              onClick={() => handleClickOption(option)}
            >
              {option}
              {option === value && (
                <div className="absolute left-[18px] top-1/2 -translate-y-1/2">
                  <SelectIcon />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
