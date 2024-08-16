import styled from '@emotion/styled'
import { theme } from './theme'

export const Flex = styled.div({
  display: 'flex'
})

export const FlexColumn = styled(Flex)({
  flexDirection: 'column',
})

export const FlexCenter = styled(Flex)({
  justifyContent: 'center',
  alignItems: 'center'
})

export const FlexNowrap = styled(Flex)({
  flexWrap: 'nowrap',
  alignItems: 'center'
})

export const DmContainer = styled(FlexColumn)({
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px 100px'
})

export const Container =  styled(FlexColumn)({
  width: '1500px'
})

export const FlexSpaceBetween =  styled(Flex)({
  justifyContent: 'space-between'
})

export const FlexSpaceBetweenMb = styled(FlexSpaceBetween)<{ mb: string}>`
  margin-bottom: ${({ mb }) => (mb)};
`

// info component
export const TitleContainer = styled(FlexColumn)({
  width: '960px',
  height: '109px'
})

export const UsersContainer = styled(FlexSpaceBetween)({
  width: '433px',
  height: '174px',
  flexDirection: 'column',
  border: `1px solid ${theme.palette.graySecondary}`,
  backgroundColor: `${theme.palette.white}`,
  padding: '24px',
  borderRadius: '12px'
})

// nameContainer
export const FlexSpaceBetweenAlignCenter = styled(FlexSpaceBetween)<{ styles?: any }>`
  ${({ styles }) => (styles)},
  align-items: center;
`

export const DownloadContainer = styled(FlexSpaceBetween)({
  width: '385px',
  height: '86px',
  flexDirection: 'column',
  border: `1px solid ${theme.palette.graySecondary}`,
  margin: '0 auto',
  padding: '16px',
  borderRadius: '10px',
  backgroundColor: `${theme.palette.backgroundGray}`
})

// search component
export const SearchContainer = styled(Container)({
  height: '364px',
})

export const SearchTitleContainer = styled(FlexSpaceBetweenAlignCenter)<{ open : boolean }>`
  height: 50px;
  border: 1px solid ${theme.palette.graySecondary};
  background-color: ${theme.palette.backgroundGray};
  padding: 15px 35px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: ${({open}) => (open ? '0' : '16px')};
  border-bottom-right-radius: ${({open}) => (open ? '0' : '16px')};
`

export const FilterContainer = styled(FlexColumn)({
  height: 'auto',
  border: `1px solid ${theme.palette.graySecondary}`,
  borderTop: 'none',
  borderBottomRightRadius: '16px',
  borderBottomLeftRadius: '16px',
  backgroundColor: `${theme.palette.white}`,
  padding: '20px 35px'
})

export const SelectBox = styled.select<{ width: string, position: string}>`
  width: ${({ width }) => (width)};
  height: 50px;
  border: 1px solid ${theme.palette.graySecondary};
  border-radius: 16px;
  padding: 14px;
  margin-right: 10px;
  appearance: none;
  -webkit-appearance: none;
  background: url("/dm/images/up_down.png") no-repeat;
  background-size: 16px 16px;
  background-position: ${({position}) => (`${position} 16px`)};
  outline-color: ${theme.palette.blueMain};
  
  &:focus {
    box-shadow: 0px 0px 0px 4px #3B82F640;
  }
`

export const SwitchBox = styled(FlexCenter)({
  width: '96px',
  height: '50px',
  marginRight: '5px',
  borderRadius: '100px',
  backgroundColor: `${theme.palette.blueSecondary}`,
  border: `1px solid ${theme.palette.blueSecondary}`
})

export const MultipleBox = styled(FlexNowrap)<{ expected?: boolean }>`
  width: ${({expected}) => (expected ? '1431px' : '680px')};
  height: 50px;
  border: 1px solid ${theme.palette.backgroundGray};
  border-radius: 16px;
  background-color: ${theme.palette.backgroundGray};
  padding: 16px;
`

export const CountBox = styled.span({
  width: '22px',
  height: '22px',
  borderRadius: '999px',
  backgroundColor: `${theme.palette.blueMain}`,
  color: `${theme.palette.white}`,
  padding: '0 6px'
})

export const DateInputContainer = styled(FlexNowrap)<{ checked: boolean }>`
  width: 680px;
  height: 50px;
  border-radius: 16px;
  border: 1px solid ${({checked}) => (checked ? theme.palette.grayThird : theme.palette.blueMain)};
  background-color: ${({checked}) => (checked ? theme.palette.backgroundGray : theme.palette.white)};
  padding: 20px;
`

export const DateInputBox = styled.input<{ checked: boolean }>`
  appearance: none;
  outline: none;
  width: 120px;
  background-color: ${({checked}) => (checked ? theme.palette.backgroundGray : theme.palette.white)};
  ::placeholder {
    text-align: center;
    color: ${({checked}) => (checked ? theme.palette.disabledGray : theme.palette.black)};
  }
`

// condition modal
export const ModalContainer = styled.div<{ width: string, styles: any }>`
  ${({ styles }) => (styles)},
  width: ${({ width }) => (width)};
`

export const ModalBox = styled(FlexCenter)({
  flexDirection: 'column',
  width: '451px',
  maxHeight: '188px',
  margin: '20px',
  marginTop: '30px'
})

export const ModalScrollBox = styled.div`
  &::-webkit-scrollbar {
    width: 4px;
    height: 100px;
  }
  &::-webkit-scrollbar-thumb {
    background: #dfdfdf;
    border-radius: 6px;
  }
`

export const ModalContentBox = styled(Flex)({
  width: '451px',
  maxHeight: '188px',
  border: `1px solid ${theme.palette.graySecondary}`,
  borderRadius: '10px',
  padding: '20px',
  margin: '5px auto',
  marginTop: '20px'
})

export const InputBox = styled.input`
  width: 411px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid ${theme.palette.blueMain};
  outline: none;
  box-shadow: 0px 0px 0px 4px #3B82F640;
  padding: 0px 10px;

  font-size: 16px;
  font-weight: 700;
  font-family: SUIT;

  &:focus {
    border-color: ${theme.palette.blueMain}
  }
`

export const ModalBtnGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: '120px 315px',
  columnGap: '15px',
  marginTop: '15px',
  marginBottom: '15px'
})

export const ModalContentGrid = styled.div<{ styles: any }>`
  ${({ styles }) => (styles)}
`

// list component
export const DownloadCount = styled.span({
  height: '28px',
  border: `1px solid ${theme.palette.graySecondary}`,
  borderRadius: '999px',
  padding: '3px 6px'
})

export const Table = styled.table`
  width: 1500px;
  border-collapse: collapse;
  border-radius: 16px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${theme.palette.graySecondary};
  margin-bottom: 40px;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
`

// pagination
export const PaginationBox = styled(FlexCenter)({
  width: '492px',
  height: '78px',
  borderRadius: '8px',
  padding: '10px',
  border: `1px solid ${theme.palette.borderGray}`,
  backgroundColor: `${theme.palette.backgroundGray}`
})