
import { SelectBox } from "./Boxes"

interface ISelectProps {
  options: string[]
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
      {options?.length && options?.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </SelectBox>
  )
}