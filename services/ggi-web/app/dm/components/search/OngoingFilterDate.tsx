import { DateInputContainer, DateInputBox } from "../styles/Boxes";
import { theme } from "../styles/theme";
import { InfoText } from "../styles/Typography";
import React, { useState, useRef } from "react";

interface IDateProps {
  checked: boolean
}

export default function OngoingFilterDate({
  checked
}: IDateProps) {
  const [startDateValue, setStartDateValue] = useState<string>('')
  const [endDateValue, setEndDateValue] = useState<string>('')
  const inputRef: any = useRef(null)

  const handleChangeInput = (prop: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    let result = ''

    if (value.length < 4) result = value
    else if (value.length < 7) {
      result += value.substring(0, 4)
      result += "/"
      result += value.substring(4, 6)
    } else if (value.length < 9) {
      result += value.substring(0, 4)
      result += "/"
      result += value.substring(4, 6)
      result += "/"
      result += value.substring(6, 8)
    } 

    if (prop === 'start') {
      setStartDateValue(result)

      if (value.length === 8) {
        inputRef.current.focus()
      }
    } else {
      setEndDateValue(result)
    }
  }

  return (
    <DateInputContainer checked={checked}>
      <img 
        src="/dm/images/calendar.png" 
        alt="caledar" 
        width={'16px'} 
        height={'16px'} 
        style={{ 
          marginRight: '150px' 
        }}
        color={checked ? `${theme.palette.disabledGray}` : `${theme.palette.grayMain}`}
      />
      <DateInputBox 
        checked={checked}
        disabled={checked ? true : false}
        placeholder="yyyy / mm / dd"
        value={startDateValue}
        onChange={handleChangeInput('start')}
      />
      <InfoText color={checked ? theme.palette.disabledGray : theme.palette.black} style={{ margin: '0 20px' }}>
        ~
      </InfoText>
      <DateInputBox 
        checked={checked}
        disabled={checked ? true : false}
        placeholder="yyyy / mm / dd"
        value={endDateValue}
        onChange={handleChangeInput('end')}
        ref={inputRef}
      />
    </DateInputContainer>
  )
}