
import { SelectBox } from "./Boxes"
import { theme } from "./theme"


interface ISelectProps {
  options: Array<{
    value?: string,
    name: string
  }>
  noMargin?: boolean,
  wider?: boolean
}

export default function StyledSelect({
  options,
  noMargin,
  wider
}: ISelectProps) {

  return (
    <SelectBox 
      // minWidth={'190px'}
      // width={wider ? '326.5px' :'auto'}
      // maxWidth={'335px'}
      // height={'50px'}
      // border={`1px solid ${theme.palette.graySecondary}`}
      // borderRadius={'16px'}
      // marginRight={noMargin ? `0` :`5px`}
      // icon={<img src="/dm/images/up_down.png" />}
    >
      {options.length && options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.name}
        </option>
      ))}
    </SelectBox>
  )
}