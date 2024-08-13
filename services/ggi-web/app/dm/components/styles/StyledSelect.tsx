
import { SelectBox } from "./Boxes"
import { theme } from "./theme"


interface ISelectProps {
  options: Array<{
    value?: string,
    name: string
  }>
  width: string,
  position: string,
  marginRight?: string,
}

export default function StyledSelect({
  options,
  width,
  position,
  marginRight
}: ISelectProps) {

  return (
    <SelectBox width={width} position={position} style={{ marginRight: `${marginRight}`}}>
      {options.length && options.map((option, idx) => (
        <option key={idx} value={option.value}>
          {option.name}
        </option>
      ))}
    </SelectBox>
  )
}