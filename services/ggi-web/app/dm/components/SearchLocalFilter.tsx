import { useEffect, useState } from "react";
import { FlexSpaceBetweenAlignCenter, SwitchBox } from "./styles/Boxes";
import { SwitchBtn } from "./styles/Button";
import { TextGothicBold } from "./styles/Typography";
import { ILocalFilter } from "@/models/dm/DM";
import { theme } from "./styles/theme";
import StyledSelect from "./styles/StyledSelect";
import { useQuery } from "@tanstack/react-query";
import getSido from "@/remote/dm/search/getSido";

const options = [
  {name: '서울특별시'}
]

export default function SearchLocalFilter() {
  const { data: sido } = useQuery({
    queryKey: ['sido'],
    queryFn: () => getSido()
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
      <StyledSelect options={sido?.sds} width="186px" position="160px"/>
      <StyledSelect options={sido?.sds} width="186px" position="160px"/>
      <StyledSelect options={sido?.sds} marginRight={'0'} width="186px" position="160px"/>
    </FlexSpaceBetweenAlignCenter>
  )
}