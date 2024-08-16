import { useState } from "react";
import { FlexNowrap } from "./Boxes";
import { CheckBox } from "./Button";
import { theme } from "./theme";
import { HelpText, InfoText } from "./Typography";

interface ICheckboxProp {
  type: string
  checked: boolean
  content: string
  setChecked: (chk: boolean, content?: string) => void
}

export default function StyledCheckbox ({
  type,
  checked,
  content,
  setChecked
}: ICheckboxProp) {
  const [chk, setChk] = useState<boolean>(checked)

  const handleChange = (content?: string) => () => {
    setChk(!chk)
    if (!setChecked) return
    setChecked(!chk, content)
  }

  return (
    <FlexNowrap>
      {type === 'modal' ? (
        <>
        <label htmlFor="chk">
          <InfoText color={theme.palette.black}>
            {content}
          </InfoText>
        </label>
        <CheckBox type="checkbox" id='chk' value={Number(chk)} onChange={handleChange(content)} />
        </>
      ) : (
        <>
        <CheckBox type="checkbox" id='chk' value={Number(chk)} onChange={handleChange(undefined)} defaultChecked/>
        <label htmlFor="chk">
          <HelpText color={theme.palette.grayMain}>
            {content}
          </HelpText>
        </label>
        </>
      )}
    </FlexNowrap>
  )
}