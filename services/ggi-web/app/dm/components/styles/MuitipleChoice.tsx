import { useState } from "react";
import { CountBox, FlexNowrap, MultipleBox } from "./Boxes";
import { MultipleBtn, MultipleExtraBtn } from "./Button";
import { theme } from "./theme";
import { InfoText } from "./Typography";

interface IMultipleProps {
  values: Array<{
    status: boolean,
    name: string
  }>,
  extra?: boolean
  expected?:boolean
}

export default function MultipleChoice({
  values,
  extra,
  expected
}: IMultipleProps) {
  const [clickExtra, setClickExtra] = useState<boolean>(false)

  return (
    <MultipleBox expected={expected}>
      {values.length && values.slice(0, 4).map((value, idx) => (
        <MultipleBtn key={idx} status={value.status}>
          <InfoText color={value.status ? theme.palette.blueMain : theme.palette.grayMain}>
            {value.name}
          </InfoText>
        </MultipleBtn>
      ))}
      {extra ? (
        <MultipleExtraBtn status={clickExtra} onClick={() => setClickExtra(!clickExtra)}>
          <FlexNowrap>
            <img 
              src="/dm/images/filter-left.png" 
              width={'16px'} 
              height={'16px'} 
              color={clickExtra ? theme.palette.blueMain : theme.palette.grayMain}
            />
            <InfoText color={clickExtra ? theme.palette.blueMain : theme.palette.grayMain}>
              그외
            </InfoText>
          </FlexNowrap>
          {/* <InfoText color={theme.palette.blueMain}>
            그외 <CountBox>{`${values.slice(4).length}`}</CountBox>
          </InfoText> */}
        </MultipleExtraBtn>
      ) : null}
    </MultipleBox>
  )
}