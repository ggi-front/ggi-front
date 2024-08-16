import { IDmProps } from "@/models/dm/DM";
import ExpectedFilterDate from "./ExpectedFilterDate";
import { FlexColumn, FlexSpaceBetweenAlignCenter, FlexSpaceBetweenMb } from "../styles/Boxes";
import { theme } from "../styles/theme";
import { TextGothic14px, TextGothicBold, TextGothicBoldMb15 } from "../styles/Typography";
import OngoingFilterDate from "./OngoingFilterDate";
import SearchLocalFilter from "./SearchLocalFilter";
import MultipleChoice from "../styles/MuitipleChoice";
import { conditions, usage } from "constants/dm/dm";
import SearchFilterDetail from "./SearchFilterDetail";
import StyledCheckbox from "../styles/StyledCheckbox";

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
    <FlexSpaceBetweenMb mb="30px">
      <FlexColumn>
        <FlexSpaceBetweenMb mb="15px">
          <TextGothicBold color={theme.palette.black}>
            기준일자
          </TextGothicBold>
          {tabs?.expected ? (
          <FlexSpaceBetweenAlignCenter>
            <TextGothic14px color={theme.palette.grayMain} style={{ marginRight: '5px'}}>2024.08.30 ~ </TextGothic14px>
            <TextGothic14px color={theme.palette.grayMain}>2024.09.30</TextGothic14px>
          </FlexSpaceBetweenAlignCenter>
          ) : (
            <StyledCheckbox  
              type="info"
              checked={filters?.afterToday ?? false}
              content={"오늘 이후"} 
              setChecked={handleChecked}
            />
          )}
        </FlexSpaceBetweenMb>
        {tabs?.expected ? <ExpectedFilterDate /> : <OngoingFilterDate checked={filters?.afterToday ?? false} />}
      </FlexColumn>
      <FlexColumn>
        <TextGothicBoldMb15 color={theme.palette.black}>
          검색지역
        </TextGothicBoldMb15>
        <SearchLocalFilter />
      </FlexColumn>
    </FlexSpaceBetweenMb>
    <FlexSpaceBetweenMb mb="30px">
      {tabs?.ongoing ? (
        <FlexColumn>
          <TextGothicBoldMb15 color={theme.palette.black}>
            특수조건
          </TextGothicBoldMb15>
          <MultipleChoice 
            values={conditions} 
            extra={4} 
            type="specific" 
            filters={filters ?? {}} 
            setFilters={setFilters ?? undefined}
            tabs={tabs}
          />
        </FlexColumn>
      ) : null}
      <FlexColumn>
        <TextGothicBoldMb15 color={theme.palette.black}>
          용도
        </TextGothicBoldMb15>
        <MultipleChoice 
          values={usage} 
          extra={3}
          type="usage"
          tabs={tabs}
        />
      </FlexColumn>
    </FlexSpaceBetweenMb>

    {/* 상세조건 */}
    {openDetail && <SearchFilterDetail tabs={tabs} filters={filters} setFilters={setFilters} />}
    </>
  )
}