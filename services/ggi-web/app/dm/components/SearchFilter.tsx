import { IDmProps } from "@/models/dm/DM";
import { FilterContainer, FlexSpaceBetweenAlignCenter } from "../components/styles/Boxes";
import { CheckBox, MineBtn } from "../components/styles/Button";
import { theme } from "../components/styles/theme";
import { HelpText, TextGothic18px, TextGothicBold } from "../components/styles/Typography";
import { useEffect, useState } from "react";
import SearchFilterContent from "./SearchFilterContent";
import ModalPortal from "./ModalPortal";
import MyConditionModal from "./MyConditionModal";
import { conditionSubTitle, conditionTitle } from "constants/dm/dm";

export default function SearchFilter({
  tabs
}: IDmProps) {
  const [openCondition, setOpenCondition] = useState<boolean>(false)
  const [openDetail, setOpenDetail] = useState<boolean>(false)

  useEffect(() => {
    if (!tabs.ongoing) {
      setOpenDetail(false)
    } else setOpenDetail(true)
  }, [tabs])

  return (
    <>
    <FilterContainer>
      <FlexSpaceBetweenAlignCenter style={{ marginBottom: '20px' }}>
        <FlexSpaceBetweenAlignCenter>
          <TextGothic18px color={theme.palette.black}>검색조건</TextGothic18px>
          <CheckBox type="checkbox" id='chk' />
          <label htmlFor="chk">
            <HelpText color={theme.palette.grayMain}>
              이전 다운로드 사건을 제외합니다
            </HelpText>
          </label>
        </FlexSpaceBetweenAlignCenter>

        <div>
        <MineBtn>
          <TextGothicBold color={theme.palette.blueMain} onClick={() => setOpenCondition(!openCondition)}>
            ★나의조건
          </TextGothicBold>
        </MineBtn>
        {tabs.ongoing ?
          <MineBtn 
            style={{ marginLeft: '10px' }}
            onClick={() => setOpenDetail(openDetail => !openDetail)}
          >
            <TextGothicBold color={theme.palette.blueMain}>
              - 상세조건
            </TextGothicBold>
          </MineBtn>: null}
        </div>
      </FlexSpaceBetweenAlignCenter>

      {/* search filter contents */}
      <SearchFilterContent tabs={tabs} openDetail={openDetail} />

      {openCondition 
      ? <ModalPortal>
        <MyConditionModal title={conditionTitle} subTitle={conditionSubTitle} />
      </ModalPortal> : null}
    </FilterContainer>
    </>
  )
}