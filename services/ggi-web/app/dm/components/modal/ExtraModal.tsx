import { IFilterProps, ITabStatus } from "@/models/dm/DM";
import { FlexSpaceBetweenAlignCenter, ModalContainer, ModalContentGrid } from "../styles/Boxes";
import StyledCheckbox from "../styles/StyledCheckbox";
import { theme } from "../styles/theme";
import { Dispatch, SetStateAction, useState } from "react";
import { ExtraModalBtn } from "../styles/Button";
import { TextGothicBoldMb15 } from "../styles/Typography";

interface IProps {
  type: string
  contents: Array<{
    status: boolean,
    name: string
  }>
  setOpenModal: Dispatch<SetStateAction<boolean>>
  tabs: ITabStatus,
  filters?: IFilterProps
  setFilters?: Dispatch<SetStateAction<IFilterProps>>
}
export default function ExtraModal ({
  type,
  contents,
  filters,
  setFilters,
  setOpenModal,
  tabs
}: IProps) {
  const [values, setValues] = useState(contents)

  const handleChecked = (chk: boolean, name?: string) => {
    let arr = values.findIndex((content) => content.name === name)
    console.log(arr)
    // if (!setFilters) return
    // const newFilters = {...filters}
    // newFilters.usage = chk
    // setFilters(newFilters)
  }

  const handleClickReset = () => {
    let newValues: {status: boolean, name: string}[] = []
    values.map((value) => (
      newValues.push({status: false, name: value.name})
    ))
    console.log(newValues)
    setValues(newValues)
  }

  const handleClickSave = () => {
    console.log(values)
  }

  return (
    <ModalContainer 
      width={type === 'usage' ? '400px' : '500px'} 
      styles={theme.styles.modal.extra.container}
      style={{ left: tabs.ongoing && type === 'usage' ? '1100px' : '450px'}}
    >
      <ModalContentGrid styles={type === 'usage' 
        ? theme.styles.modal.extra.usageContent 
        : theme.styles.modal.extra.specificContent}
      >
        {values?.length && values.map((content, idx) => (
          <StyledCheckbox 
            key={content.name}
            type="modal"
            checked={content.status} 
            content={content.name}
            setChecked={handleChecked}
          />
        ))}
      </ModalContentGrid>
      <FlexSpaceBetweenAlignCenter styles={theme.styles.modal.extra.buttonBox}>
        <div>
          <ExtraModalBtn save={false}>
            <TextGothicBoldMb15 color={theme.palette.black} onClick={handleClickReset}>
              초기화
            </TextGothicBoldMb15>
          </ExtraModalBtn>
        </div>
        <div>
          <ExtraModalBtn save={false} style={{ marginRight: '10px' }} onClick={() => setOpenModal(false)}>
            <TextGothicBoldMb15 color={theme.palette.black}>
              취소
            </TextGothicBoldMb15>
          </ExtraModalBtn>
          <ExtraModalBtn save={true}>
            <TextGothicBoldMb15 color={theme.palette.white} onClick={handleClickSave}>
              적용하기
            </TextGothicBoldMb15>
          </ExtraModalBtn>
        </div>
      </FlexSpaceBetweenAlignCenter>
    </ModalContainer>
  )
}
