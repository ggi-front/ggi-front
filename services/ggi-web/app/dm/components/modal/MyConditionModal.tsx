import { Dispatch, SetStateAction, useState } from "react";
import { FlexNowrap, FlexSpaceBetweenAlignCenter, InputBox, ModalBox, ModalBtnGrid, ModalContainer, ModalContentBox, ModalScrollBox } from "../styles/Boxes";
import { IconBtn, ModalBtn } from "../styles/Button";
import { theme } from "../styles/theme";
import { TextGothic15px, TextGothicBold, TextGothicBoldMb15, TextSuit20px } from "../styles/Typography";

interface IModalProps {
  status: 'view' | 'save'
  title: string,
  subTitle: string,
  setOpenModal: Dispatch<SetStateAction<boolean>>
  contents?: Array<any>
}

export default function MyConditionModal({
  status,
  title,
  subTitle,
  setOpenModal,
  contents
}: IModalProps) {
  const [newCondition, setNewCondition] = useState<string>('새로운 조건1')

  const handleChangeInput = () => {

  }

  return (
    <ModalContainer width="531px" styles={theme.styles.modal.condition.container}>
      <div style={{ display: 'flex', flexDirection: 'row-reverse'}}>
        <IconBtn bc={theme.palette.white} onClick={() => setOpenModal(false)}>
          <img src="/dm/images/close.png" width={'16px'} height={'6px'}/>
        </IconBtn>
      </div>
      <ModalBox>
        <TextSuit20px style={{ marginBottom: '10px' }}>{title}{`(n/10)`}</TextSuit20px>
        <TextGothic15px>{subTitle}</TextGothic15px>
        {status === 'save' ? (
          <>
          <ModalContentBox>
            <InputBox 
              value={newCondition}
              onChange={handleChangeInput}
            />
            {/* 선택한 조건들 */}
          </ModalContentBox>
          <ModalBtnGrid>
            <ModalBtn styles={theme.styles.modal.condition.cancled} onClick={() => setOpenModal(false)}>
              <TextGothicBoldMb15 color={theme.palette.black}>
                취소
              </TextGothicBoldMb15>
            </ModalBtn>
            <ModalBtn styles={theme.styles.modal.condition.save}>
              <TextGothicBoldMb15 color={theme.palette.white}>
                저장하기
              </TextGothicBoldMb15>
            </ModalBtn>
          </ModalBtnGrid>
          </>
        ) : (
          <ModalScrollBox>
            <ModalContentBox>
              <FlexSpaceBetweenAlignCenter style={{ width: '410px' }}>
                <FlexNowrap>
                  <TextGothicBold color={theme.palette.black}>
                    조건이름
                  </TextGothicBold>
                  <IconBtn bc={theme.palette.white}>
                    <img src="/dm/images/edit.png" alt="edit" />
                  </IconBtn>
                </FlexNowrap>
                <IconBtn bc={theme.palette.white}>
                  <img src="/dm/images/delete.png" alt="delete" width={'20px'} height={'20px'} />
                </IconBtn>
              </FlexSpaceBetweenAlignCenter>
            </ModalContentBox>
          </ModalScrollBox>
        )}
      </ModalBox>
    </ModalContainer>
  )
}