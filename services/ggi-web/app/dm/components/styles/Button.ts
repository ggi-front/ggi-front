import styled from '@emotion/styled'
import { theme } from './theme'

// button
// Info component
export const TabBtn = styled.button<{ status : boolean}>`
  width: 160px;
  height: 50px;
  border: 1px solid ${({status}) => (status ? theme.palette.blueMain : theme.palette.graySecondary)};
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  margin-right: 10px;
  border-radius: 16px;
  color: ${({status}) => (status ? theme.palette.blueMain : theme.palette.grayMain)};
  background-color: ${({status}) => (status ? theme.palette.blueSecondary : theme.palette.btnBackground)};
`

export const AddBtn = styled.button({
  width: '84px',
  height: '28px',
  border: `1px solid ${theme.palette.graySecondary}`,
  borderRadius: '8px',
  backgroundColor: `${theme.palette.backgroundGray}`,
  padding: '3px 10px',
  color: `${theme.palette.grayMain}`,
  fontSize: '14px',
  fontFamily: 'nanum-gothic',
  fontWeight: 700,
  lineHeight: '20px'
})

// Search Component
export const FoldBtn = styled.button({
  width: '24px',
  height: '24px',
  backgroundColor: `${theme.palette.backgroundGray}`
})

export const CheckBox = styled.input({
  margin: '0 10px',
  border: `1px solid ${theme.palette.graySecondary}`
})

export const MineBtn = styled.button({
  width: '140px',
  height: '40px',
  borderRadius: '12px',
  border: `1px solid ${theme.palette.graySecondary}`
})

export const SwitchBtn = styled.button<{ status : boolean}>`
  width: 46px;
  height: 42px;
  border-radius: 100px;
  border: 1px solid ${({status}) => (status ? theme.palette.blueMain : theme.palette.blueSecondary)};
  background-color: ${({status}) => (status ? theme.palette.blueMain : theme.palette.blueSecondary)};
`

export const MultipleBtn = styled.button<{ status: boolean }>`
  width: auto;
  height: 34px;
  border-radius: 100px;
  color: ${({status}) => (status
    ? theme.palette.blueMain
    : theme.palette.grayMain
  )};
  background-color: ${({status}) => (status 
    ? theme.palette.blueSecondary 
    : theme.palette.graySecondary
  )};
  margin-right: 5px;
  padding: 0 8px;
`

export const MultipleExtraBtn = styled.button<{ status: boolean }>`
  width: auto;
  height: 34px;
  border-radius: 100px;
  color: ${theme.palette.blueMain};
  background-color: ${({status}) => (status 
    ? theme.palette.blueSecondary 
    : theme.palette.graySecondary
  )};
  border: ${({status}) => (status 
    ? `1px solid ${theme.palette.blueMain}`
    : 'none'
  )};
  margin-right: 5px;
  padding: 0 8px;
`
export const SearchBtn = styled.button<{ color: string }>`
  border: 1px solid ${({color}) => (color)};
  background-color: ${({color}) => (color)};
  border-radius: 12px;
  margin: 0 5px; 
  padding: 15px 20px;
`