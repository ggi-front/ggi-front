
import { listHeaders, myDmHeaders } from 'constants/dm/dm'
import ListTable from './ListTable'
import { DownloadCount, FlexNowrap, FlexSpaceBetweenAlignCenter } from '../styles/Boxes'
import { DownloadBtn } from '../styles/Button'
import StyledSelect from '../styles/StyledSelect'
import { theme } from '../styles/theme'
import { TextGothic14px, TextGothic18px } from '../styles/Typography'
import { ITabStatus } from '@/models/dm/DM'

const view = [
  '20개씩 보기',
  '30개씩 보기',
  '40개씩 보기',
  '50개씩 보기',
  '70개씩 보기',
  '80개씩 보기',
  '100개씩 보기'
]

interface IListProps {
  tabs: ITabStatus
}

export default function List({
  tabs
}: IListProps) {

  return (
    <>
    <FlexSpaceBetweenAlignCenter styles={{ margin: '40px 0'}}>
      <StyledSelect options={view} width={'170px'} position={'140px'} />
      <span>
        <DownloadBtn style={{ marginRight: '10px'}}>
          <FlexNowrap>
            <TextGothic18px color={theme.palette.grayMain} style={{ marginRight: '10px'}}>
              {tabs?.mine ? '선택' : ''} 다운로드
            </TextGothic18px>
            <DownloadCount>
              <TextGothic14px color={theme.palette.blueMain}>
                20
              </TextGothic14px>
            </DownloadCount>
          </FlexNowrap>
        </DownloadBtn>
        {tabs?.mine ? null :(
          <DownloadBtn>
            <FlexNowrap>
              <TextGothic18px color={theme.palette.grayMain} style={{ marginRight: '10px'}}>
                전체 다운로드
              </TextGothic18px>
              <DownloadCount>
                <TextGothic14px color={theme.palette.black}>
                  2000
                </TextGothic14px>
              </DownloadCount>
            </FlexNowrap>
          </DownloadBtn>
        )}
      </span>
    </FlexSpaceBetweenAlignCenter>

    <ListTable 
      headers={tabs?.mine ? myDmHeaders : listHeaders(tabs?.expected)}
      tabs={tabs}
    />
    </>
  )
}