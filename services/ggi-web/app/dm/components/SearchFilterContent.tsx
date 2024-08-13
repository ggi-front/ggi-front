import { IDmProps } from "@/models/dm/DM";
import ExpectedFilterDate from "./ExpectedFilterDate";
import { FlexColumn, FlexSpaceBetweenAlignCenter, FlexSpaceBetweenMb30 } from "../components/styles/Boxes";
import { theme } from "../components/styles/theme";
import { TextGothic14px, TextGothicBoldMb15 } from "../components/styles/Typography";
import OngoingFilterDate from "./OngoingFilterDate";
import LocalFilter from "./LocalFilter";
import MultipleChoice from "../components/styles/MuitipleChoice";
import { conditions, usage } from "constants/dm/dm";
import SearchFilterDetail from "./SearchFilterDetail";
import StyledCheckbox from "./styles/StyledCheckbox";

export default function SearchFilterContent({
  tabs,
  filters,
  openDetail,
  setFilters
}: IDmProps) {
  
  const handleChecked = (chk: boolean) => {
    if (!setFilters) return
    const newFilters = {...filters}
    newFilters.afterToday = chk
    setFilters(newFilters)
  }

  return (
    <>
    <FlexSpaceBetweenMb30>
      <FlexColumn>
        <FlexSpaceBetweenAlignCenter>
          <TextGothicBoldMb15 color={theme.palette.black}>
            기준일자
          </TextGothicBoldMb15>
          {tabs?.expected ? (
          <FlexSpaceBetweenAlignCenter>
            <TextGothic14px color={theme.palette.grayMain} style={{ marginRight: '5px'}}>2024.08.30 ~ </TextGothic14px>
            <TextGothic14px color={theme.palette.grayMain}>2024.09.30</TextGothic14px>
          </FlexSpaceBetweenAlignCenter>
          ) : (
            <StyledCheckbox  
              checked={filters?.afterToday ?? false}
              contents={"오늘 이후"} 
              setChecked={handleChecked}
            />
          )}
        </FlexSpaceBetweenAlignCenter>
        {tabs?.expected ? <ExpectedFilterDate /> : <OngoingFilterDate checked={filters?.afterToday ?? false} />}
      </FlexColumn>
      <FlexColumn>
        <TextGothicBoldMb15 color={theme.palette.black}>
          검색지역
        </TextGothicBoldMb15>
        <LocalFilter />
      </FlexColumn>
    </FlexSpaceBetweenMb30>
    <FlexSpaceBetweenMb30>
      {tabs?.ongoing ? (
        <FlexColumn>
          <TextGothicBoldMb15 color={theme.palette.black}>
            특수조건
          </TextGothicBoldMb15>
          <MultipleChoice values={conditions} extra={true} />
        </FlexColumn>
      ) : null}
      <FlexColumn>
        <TextGothicBoldMb15 color={theme.palette.black}>
          용도
        </TextGothicBoldMb15>
        <MultipleChoice values={usage} extra={true} expected={tabs?.expected} />
      </FlexColumn>
    </FlexSpaceBetweenMb30>

    {/* 상세조건 */}
    {openDetail && <SearchFilterDetail tabs={tabs} filters={filters} setFilters={setFilters} />}
    </>
  )
}