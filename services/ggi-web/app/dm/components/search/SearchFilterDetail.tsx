import { rentConditions, selectPrice } from "constants/dm/dm";
import { FlexColumn, FlexNowrap, FlexSpaceBetweenAlignCenter, FlexSpaceBetweenMb } from "../styles/Boxes";
import { theme } from "../styles/theme";
import { InfoText, TextGothicBold, TextGothicBoldMb15 } from "../styles/Typography";
import { IDmProps } from "@/models/dm/DM";
import StyledCheckbox from "../styles/StyledCheckbox";
import { useEffect } from "react";
import MultipleChoice from "../styles/MuitipleChoice";
import StyledSelect from "../styles/StyledSelect";

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

  useEffect(() => {
    if (!tabs.ongoing) return
  }, [])

  return (
    <>
    <FlexSpaceBetweenMb mb="30px">
      <FlexColumn>
        <FlexSpaceBetweenMb mb={"15px"}>
          <TextGothicBold color={theme.palette.black}>
            임차조건
          </TextGothicBold>
          <StyledCheckbox  
            type="info"
            checked={filters?.exceptChoice ?? false}
            content={"선택 제외"} 
            setChecked={handleChecked}
          />
        </FlexSpaceBetweenMb>
        <MultipleChoice values={rentConditions} type="rent" tabs={tabs}/>
      </FlexColumn>
      <FlexColumn>
        <TextGothicBoldMb15 color={theme.palette.black}>
          감정가
        </TextGothicBoldMb15>
        <FlexNowrap>
          <StyledSelect options={selectPrice} marginRight={'0'} width="326.5px" position="300px" />
            <InfoText color={theme.palette.grayMain} style={{ padding: '0 5px' }}>
              ~
            </InfoText>
          <StyledSelect options={selectPrice} marginRight={'0'} width="326.5px" position="300px" />
        </FlexNowrap>
      </FlexColumn>
    </FlexSpaceBetweenMb>  
    <FlexSpaceBetweenMb mb="30px">
      <FlexColumn>
        <TextGothicBoldMb15 color={theme.palette.black}>
          현재상태
        </TextGothicBoldMb15>
        <FlexSpaceBetweenAlignCenter>
          <StyledSelect options={selectPrice} width="334px" position="300px"/>
          <StyledSelect options={selectPrice} width="334px" position="300px"  marginRight="0"/>
        </FlexSpaceBetweenAlignCenter>
      </FlexColumn>
      <FlexColumn>
        <TextGothicBoldMb15 color={theme.palette.black}>
          최저가
        </TextGothicBoldMb15>
        <FlexNowrap>
          <StyledSelect options={selectPrice} marginRight={'0'} width="326.5px" position="300px"  />
            <InfoText color={theme.palette.grayMain} style={{ padding: '0 5px' }}>
              ~
            </InfoText>
          <StyledSelect options={selectPrice} marginRight={'0'} width="326.5px" position="300px"  />
        </FlexNowrap>
      </FlexColumn>
    </FlexSpaceBetweenMb>
    </>
    
  )
}