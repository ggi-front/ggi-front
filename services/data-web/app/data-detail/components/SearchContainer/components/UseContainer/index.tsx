import FilterButton from '@/app/shared/components/buttons/FilterButton'
import ErrorText from '@/app/shared/components/text/ErrorText'
import FilterTitle from '@/app/shared/components/text/FilterTitle'
import { USE_ARRAY } from '@/app/shared/constant'
import {
  useAreaStore,
  useErrorStore,
  useUseStore,
} from '@/app/shared/store/useDetailFilterStore'

export default function UseContainer() {
  const isFilterError = useErrorStore((state) => state.isFilterError)

  const useArray = useUseStore((state) => state.useArray)
  const addUse = useUseStore((state) => state.addUse)
  const removeUse = useUseStore((state) => state.removeUse)

  const handleUseClick = (el: string) => {
    if (!useArray.includes(el)) {
      addUse(el)
    } else {
      removeUse(el)
    }
  }

  return (
    <div>
      <FilterTitle title="용도" />
      <div className="relative ggi:mt-2">
        {isFilterError && (
          <div className="absolute right-0 -top-8 ggi:static">
            <ErrorText text="지역 복수선택 시 한 가지 용도만 선택할 수 있습니다" />
          </div>
        )}

        <div
          className={`w-full py-2 px-4 bg-[#F8FAFC] rounded-2xl mt-3 flex flex-wrap gap-2 border  ${isFilterError && 'border-[#EF4444]'} ggi:mt-2`}
        >
          {USE_ARRAY.map((el, index) => (
            <FilterButton
              key={index}
              text={el}
              onClick={() => handleUseClick(el)}
              active={useArray.includes(el)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
