import { useState } from "react";
import { FlexSpaceBetweenAlignCenter, SwitchBox } from "../styles/Boxes";
import { SwitchBtn } from "../styles/Button";
import { TextGothicBold } from "../styles/Typography";
import { ILocalFilter } from "@/models/dm/DM";
import { theme } from "../styles/theme";
import StyledSelect from "../styles/StyledSelect";
import { useQuery } from "@tanstack/react-query";
import getSido from "@/remote/dm/search/getSido";
import getSgg from "@/remote/dm/search/getSgg";
import getUmd from "@/remote/dm/search/getUmd";

const court = [
  '서울지방법원',
  '의정부지방법원',
  '인천지방법원',
  '수원지방법원',
  '대전지방법원',
  '청주지방법원',
  '춘천지방법원',
  '부산지방법원',
  '울산지방법원',
  '창원지방법원',
  '대구지방법원',
  '광주지방법원',
  '전주지방법원',
  '제주지방법원'
]

export default function SearchLocalFilter() {
  const { data: sido } = useQuery({
    queryKey: ['sido'],
    queryFn: () => getSido()
  })
  const { data: sgg } = useQuery({
    queryKey: ['sgg'],
    queryFn: () => getSgg('서울')
  })
  const { data: umd } = useQuery({
    queryKey: ['umd'],
    queryFn: () => getUmd('서울', '강남구')
  })

  const [localFilter, setLocalFilter] = useState<ILocalFilter>({
    court: false,
    local: true
  })

  const handleClickLocal = () => {
    const newFilter = {
      ...localFilter,
      court: !localFilter.court,
      local: !localFilter.local
    }
    setLocalFilter(newFilter)
  }

  return (
    <FlexSpaceBetweenAlignCenter style={{ width: '680px', flexWrap: 'nowrap' }}>
      <SwitchBox>
        <SwitchBtn status={localFilter.court} onClick={handleClickLocal}>
          <TextGothicBold 
            color={localFilter.court 
            ? `${theme.palette.white}` 
            : `${theme.palette.blueMain}`}
          >
            법원
          </TextGothicBold>
        </SwitchBtn>
        <SwitchBtn status={localFilter.local} onClick={handleClickLocal}>
          <TextGothicBold color={localFilter.local 
            ? `${theme.palette.white}` 
            : `${theme.palette.blueMain}`}
          >
            지역
          </TextGothicBold>
        </SwitchBtn>
      </SwitchBox>
      <StyledSelect options={localFilter.local ? sido?.sds : court} width="186px" position="160px"/>
      <StyledSelect options={sgg?.sggs} width="186px" position="160px"/>
      <StyledSelect options={umd?.umds} marginRight={'0'} width="186px" position="160px"/>
    </FlexSpaceBetweenAlignCenter>
  )
}