import { FlexSpaceBetweenAlignCenter } from "../components/styles/Boxes";
import { theme } from "../components/styles/theme";
import { InfoText } from "../components/styles/Typography";
import StyledSelect from "../components/styles/StyledSelect";

const options01 = [
  {value: '1', name: '신건등록일'}
]
const options02 = [
  {value: '1', name: '1달전'}
]

export default function ExpectedFilterDate() {
  return (
    <FlexSpaceBetweenAlignCenter style={{ flexWrap: 'nowrap', width: '680px' }}>
      <StyledSelect options={options01} width="280px" position="250px" marginRight={'0'}/>
      <InfoText color={theme.palette.grayMain} 
      >
        이 오늘로부터
      </InfoText>
      <StyledSelect options={options02} marginRight={'0'} width="285px" position="250px" />
      
    </FlexSpaceBetweenAlignCenter>
  )
}