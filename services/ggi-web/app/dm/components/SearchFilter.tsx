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
import StyledCheckbox from "./styles/StyledCheckbox";

export default function SearchFilter({
  tabs,
  filters,
  setFilters
}: IDmProps) {
  const [openCondition, setOpenCondition] = useState<boolean>(false)
  const [openDetail, setOpenDetail] = useState<boolean>(false)

  const handleChecked = (chk: boolean) => {
    if (!setFilters) return
    const newFilters = {...filters}
    newFilters.exceptDownload = chk
    setFilters(newFilters)
  }

  useEffect(() => {
    if (!tabs?.ongoing) {
      setOpenDetail(false)
    } else setOpenDetail(true)
  }, [tabs])

  return (
    <>
    <FilterContainer>
      <FlexSpaceBetweenAlignCenter style={{ marginBottom: '20px' }}>
        <FlexSpaceBetweenAlignCenter>
          <TextGothic18px color={theme.palette.black}>검색조건</TextGothic18px>
          <StyledCheckbox 
            checked={filters?.exceptDownload ?? true} 
            contents="이전 다운로드 사건을 제외합니다"
            setChecked={handleChecked}
          />
        </FlexSpaceBetweenAlignCenter>
        <div>
        <MineBtn>
          <TextGothicBold color={theme.palette.blueMain} onClick={() => setOpenCondition(!openCondition)}>
            ★나의조건
          </TextGothicBold>
        </MineBtn>
        {tabs?.ongoing ?
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
      <SearchFilterContent tabs={tabs} openDetail={openDetail} filters={filters} setFilters={setFilters} />

      {openCondition 
      ? <ModalPortal>
        <MyConditionModal 
          status="view"
          title={conditionTitle} 
          subTitle={conditionSubTitle} 
        />
      </ModalPortal> : null}
    </FilterContainer>
    </>
  )
}