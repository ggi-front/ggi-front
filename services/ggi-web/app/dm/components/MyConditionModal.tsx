import { FlexSpaceBetween, InputBox, ModalBox, ModalContainer, ModalContentBox } from "./styles/Boxes";
import { TextGothic15px, TextSuit20px } from "./styles/Typography";

interface IModalProps {
  status: 'view' | 'save'
  title: string,
  subTitle: string,
  contents?: Array<any>
}

export default function MyConditionModal({
  status,
  title,
  subTitle,
  contents
}: IModalProps) {
  
  return (
    <ModalContainer>
      <div style={{ display: 'flex', flexDirection: 'row-reverse'}}>
        <img src="/dm/images/close.png" width={'16px'} height={'6px'}/>
      </div>
      <ModalBox>
        <TextSuit20px style={{ marginBottom: '10px' }}>{title}{`(n/10)`}</TextSuit20px>
        <TextGothic15px>{subTitle}</TextGothic15px>
        {status === 'save' ? (
          <ModalContentBox>
            <InputBox />
          </ModalContentBox>
          // buttons
        ) : (
          <ModalContentBox>

          </ModalContentBox>
        )}
      </ModalBox>
    </ModalContainer>
  )
}