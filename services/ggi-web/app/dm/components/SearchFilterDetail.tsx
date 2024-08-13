import { price, rentConditions } from "constants/dm/dm";
import { FlexColumn, FlexSpaceBetweenAlignCenter, FlexSpaceBetweenMb30 } from "./styles/Boxes";
import MultipleChoice from "./styles/MuitipleChoice";
import { theme } from "./styles/theme";
import { InfoText, TextGothicBoldMb15 } from "./styles/Typography";
import StyledSelect from "./styles/StyledSelect";
import { IDmProps } from "@/models/dm/DM";
import StyledCheckbox from "./styles/StyledCheckbox";

export default function SearchFilterDetail ({
  tabs,
  filters,
  setFilters
}: IDmProps) {

  const handleChecked = (chk: boolean) => {
    if (!setFilters) return
    const newFilters = {...filters}
    newFilters.exceptChoice = chk
    setFilters(newFilters)
  }

  return (
    <>
    <FlexSpaceBetweenMb30>
      <FlexColumn>
        <FlexSpaceBetweenAlignCenter>
          <TextGothicBoldMb15 color={theme.palette.black}>
            임차조건
          </TextGothicBoldMb15>
          <StyledCheckbox  
            checked={filters?.exceptChoice ?? false}
            contents={"선택 제외"} 
            setChecked={handleChecked}
          />
        </FlexSpaceBetweenAlignCenter>
        <MultipleChoice values={rentConditions} />
      </FlexColumn>
      <FlexColumn>
        <TextGothicBoldMb15 color={theme.palette.black}>
          감정가
        </TextGothicBoldMb15>
        <FlexSpaceBetweenAlignCenter>
          <StyledSelect options={price} marginRight={'0'} width="326.5px" position="300px" />
            <InfoText color={theme.palette.grayMain} style={{ padding: '0 5px' }}>
              ~
            </InfoText>
          <StyledSelect options={price} marginRight={'0'} width="326.5px" position="300px" />
        </FlexSpaceBetweenAlignCenter>
      </FlexColumn>
    </FlexSpaceBetweenMb30>  
    <FlexSpaceBetweenMb30>
      <FlexColumn>
        <TextGothicBoldMb15 color={theme.palette.black}>
          현재상태
        </TextGothicBoldMb15>
        <FlexSpaceBetweenAlignCenter>
          <StyledSelect options={price} width="334px" position="300px"/>
          <StyledSelect options={price} width="334px" position="300px"  marginRight="0"/>
        </FlexSpaceBetweenAlignCenter>
      </FlexColumn>
      <FlexColumn>
        <TextGothicBoldMb15 color={theme.palette.black}>
          최저가
        </TextGothicBoldMb15>
        <FlexSpaceBetweenAlignCenter>
          <StyledSelect options={price} marginRight={'0'} width="326.5px" position="300px"  />
            <InfoText color={theme.palette.grayMain} style={{ padding: '0 5px' }}>
              ~
            </InfoText>
          <StyledSelect options={price} marginRight={'0'} width="326.5px" position="300px"  />
        </FlexSpaceBetweenAlignCenter>
      </FlexColumn>
    </FlexSpaceBetweenMb30>
    </>
    
  )
}