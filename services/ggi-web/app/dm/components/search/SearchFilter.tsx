import { IDmProps } from "@/models/dm/DM";
import { FilterContainer, FlexNowrap, FlexSpaceBetweenMb } from "../styles/Boxes";
import { MineBtn } from "../styles/Button";
import { theme } from "../styles/theme";
import { TextGothic18px, TextGothicBold } from "../styles/Typography";
import { useEffect, useState } from "react";
import SearchFilterContent from "./SearchFilterContent";
import ModalPortal from "../modal/ModalPortal";
import MyConditionModal from "../modal/MyConditionModal";
import { conditionSubTitle, conditionTitle } from "constants/dm/dm";
import StyledCheckbox from "../styles/StyledCheckbox";

export default function SearchFilter({
  tabs,
  filters,
  setFilters
}: IDmProps) {
  const [openModal, setOpenModal] = useState<boolean>(false)
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
      <FlexSpaceBetweenMb mb="20px">
        <FlexNowrap>
          <TextGothic18px color={theme.palette.black}>검색조건</TextGothic18px>
          <StyledCheckbox 
            type="info"
            checked={filters?.exceptDownload ?? true} 
            content="이전 다운로드 사건을 제외합니다"
            setChecked={handleChecked}
          />
        </FlexNowrap>
        <div>
        <MineBtn>
          <TextGothicBold color={theme.palette.blueMain} onClick={() => setOpenModal(!openModal)}>
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
      </FlexSpaceBetweenMb>

      {/* search filter contents */}
      <SearchFilterContent tabs={tabs} openDetail={openDetail} filters={filters} setFilters={setFilters} />

      {openModal ? 
      <ModalPortal>
        <MyConditionModal 
          status="view"
          title={conditionTitle} 
          subTitle={conditionSubTitle} 
          setOpenModal={setOpenModal}
        />
      </ModalPortal> : null}
    </FilterContainer>
    </>
  )
}