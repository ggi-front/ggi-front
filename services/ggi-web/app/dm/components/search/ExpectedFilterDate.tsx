import { FlexNowrap } from "../styles/Boxes";
import { theme } from "../styles/theme";
import { InfoText } from "../styles/Typography";
import StyledSelect from "../styles/StyledSelect";

const options01 = [
  '신건등록일',
  '경매개시일',
  '배당종기일'
]
const options02 = [
  '1달전',
  '3일전',
  '7일전',
  '15일전',
  '1달전',
  '3달전'
]

export default function ExpectedFilterDate() {
  return (
    <FlexNowrap style={{ flexWrap: 'nowrap', width: '680px' }}>
      <StyledSelect options={options01} width="280px" position="250px" marginRight={'5px'}/>
      <InfoText color={theme.palette.grayMain} style={{ marginRight: '5px' }}>
        이 오늘로부터
      </InfoText>
      <StyledSelect options={options02} marginRight={'0'} width="285px" position="250px" />
    </FlexNowrap>
  )
}