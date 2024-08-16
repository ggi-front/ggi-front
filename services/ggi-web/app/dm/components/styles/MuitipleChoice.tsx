import { Dispatch, SetStateAction, useState } from "react";
import { FlexNowrap, MultipleBox } from "./Boxes";
import { MultipleBtn, MultipleExtraBtn } from "./Button";
import { theme } from "./theme";
import { InfoText } from "./Typography";
import ModalPortal from "../modal/ModalPortal";
import ExtraModal from "../modal/ExtraModal";
import { IFilterProps, ITabStatus } from "@/models/dm/DM";

interface IMultipleProps {
  type: string
  values: Array<{
    status: boolean,
    name: string
  }>
  tabs: ITabStatus,
  filters?: IFilterProps
  setFilters?: Dispatch<SetStateAction<IFilterProps>>
  extra?: number
}

export default function MultipleChoice({
  type,
  values,
  tabs,
  extra,
  filters,
  setFilters
}: IMultipleProps) {
  const [clickExtra, setClickExtra] = useState<boolean>(false)

  return (
    <MultipleBox expected={tabs?.expected}>
      {values.length && values.slice(0, extra).map((value, idx) => (
        <MultipleBtn key={idx} status={value.status}>
          <InfoText color={value.status ? theme.palette.blueMain : theme.palette.grayMain}>
            {value.name}
          </InfoText>
        </MultipleBtn>
      ))}
      {extra ? (
        <>
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
        </>
      ) : null}
      {clickExtra ? (
        <ModalPortal>
          <ExtraModal 
            tabs={tabs}
            type={type} 
            contents={values.slice(extra)} 
            filters={filters ?? {}} 
            setFilters={setFilters ?? undefined}
            setOpenModal={() => setClickExtra(!clickExtra)}
          />
        </ModalPortal>
      ) : null}
    </MultipleBox>
  )
}