
import { useState } from 'react'
import { FlexCenter, SearchTitleContainer } from '../components/styles/Boxes'
import { SearchTitle, TextGothic18px } from '../components/styles/Typography'
import { FoldBtn, SearchBtn } from '../components/styles/Button'
import { IFilterProps, IDmProps } from '@/models/dm/DM'
import SearchFilter from './SearchFilter'
import { theme } from '../components/styles/theme'
import ModalPortal from "./ModalPortal";
import MyConditionModal from "./MyConditionModal";
import { saveConditionSubTitle, saveConditionTitle } from "constants/dm/dm";

export default function Search({
  tabs
}: IDmProps) {
  const [open, setOpen] = useState<boolean>(true)
  const [openModal, setOpenModal] = useState<boolean>(false)
  
  const [filters, setFilters] = useState<IFilterProps>({
    exceptDownload: true,
    afterToday: true,
    exceptChoice: true
  }) //ref???

  const handleClickOpen = () => {
    setOpen((prev) => (!prev))
  }

  return (
    <>
    <SearchTitleContainer open={open}>
      <SearchTitle>
        검색하기
      </SearchTitle>
      <div>
        <FoldBtn onClick={handleClickOpen}>
          {open ? <img src='/dm/images/arrow_up.png'/> 
          : <img src='/dm/images/arrow_down.png'/>}
        </FoldBtn>
      </div>
    </SearchTitleContainer>
    
    {/* filter */}
    {open ? <SearchFilter 
      tabs={tabs} 
      filters={filters} 
      setFilters={setFilters}
    /> : null}

    {/* // 버튼 container */}
    <FlexCenter style={{ padding: '20px', borderBottom: `1px solid ${theme.palette.graySecondary}` }}>
      <SearchBtn color={theme.palette.graySecondary}>
        <TextGothic18px color={theme.palette.grayMain}>
          초기화
        </TextGothic18px>
      </SearchBtn>
      <SearchBtn color={theme.palette.graySecondary} onClick={() => setOpenModal(!openModal)}>
        <TextGothic18px color={theme.palette.grayMain}>
          ★ 조건저장
        </TextGothic18px>
      </SearchBtn>
      <SearchBtn color={theme.palette.blueMain}>
        <TextGothic18px color={theme.palette.white}>
          검색하기
        </TextGothic18px>
      </SearchBtn>
      {openModal ? 
      <ModalPortal>
        <MyConditionModal 
          status="save"
          title={saveConditionTitle} 
          subTitle={saveConditionSubTitle} 
        />
      </ModalPortal> : null}
    </FlexCenter>
    {/* <Divider /> */}
    </>
  )
}