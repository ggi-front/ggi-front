import { Dispatch, SetStateAction, useState } from "react";
import { FlexSpaceBetweenAlignCenter } from "./Boxes";
import { CheckBox } from "./Button";
import { theme } from "./theme";
import { HelpText } from "./Typography";

interface ICheckboxProp {
  checked: boolean
  contents: string
  setChecked: (chk: boolean) => void
}

export default function StyledCheckbox ({
  checked,
  contents,
  setChecked
}: ICheckboxProp) {
  const [chk, setChk] = useState<boolean>(checked)

  const handleChange = () => {
    setChk(!chk)
    if (!setChecked) return
    setChecked(!chk)
  }

  return (
    <FlexSpaceBetweenAlignCenter>
      <CheckBox type="checkbox" id='chk' value={Number(chk)} onChange={handleChange} defaultChecked/>
        <label htmlFor="chk">
          <HelpText color={theme.palette.grayMain}>
            {contents}
          </HelpText>
        </label>
    </FlexSpaceBetweenAlignCenter>
  )
}