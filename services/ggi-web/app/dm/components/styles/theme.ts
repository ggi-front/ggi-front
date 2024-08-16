import { background } from "@chakra-ui/react"

const palette = {
  black: '#1F2937',
  white: '#FFFFFF',
  blueMain: '#2563EB',
  blueSecondary: '#DBEAFE',
  blueThird: '#F3F8FF',
  grayMain: '#6B7280',
  graySecondary: '#E5E7EB',
  grayThird: '#F3F4F6',
  borderGray: '#E2E8F0',
  backgroundGray: '#F8FAFC',
  btnBackground: '#FDFDFD',
  disabledGray: '#D1D5DB',
}

const styles = {
  modal: {
    condition: {
      container: {
        maxHeight: '520px',
        boxShadow: '0px 8px 5px 0px rgba(0, 0, 0, 0.08)',
        backgroundColor: `${palette.white}`,
        borderRadius: '16px',
        padding: '20px',
        position: 'absolute',
        left: '650px'
      },
      cancled: {
        border: `1px solid ${palette.graySecondary}`,
        backgroundColor: `${palette.white}`,
        padding: '8px'
      },
      save: {
        backgroundColor: `${palette.blueMain}`,
        padding: '8px'
      }
    },
    extra: {
      container: {
        maxHeight: '266px',
        borderRadius: '16px',
        border: `1px solid ${palette.graySecondary}`,
        position: 'absolute',
        left: '450px',
        top: '600px',
        backgroundColor: `${palette.white}`,
      },
      usageContent: {
        display: 'grid',
        columnGap: '20px',
        rowGap: '15px',
        margin: '15px',
        gridTemplateColumns: '184px 184px',
        gridTemplateRows: '1fr 1fr 1fr'
      },
      specificContent: {
        display: 'grid',
        columnGap: '20px',
        rowGap: '15px',
        margin: '15px',
        gridTemplateColumns: '184px 184px 184px',
        gridTemplateRows: '1fr 1fr 1fr 1fr'
      },
      buttonBox: {
        height: '67px',
        borderTop: `1px solid ${palette.graySecondary}`,
        padding: '15px',
        backgroundColor: `${palette.grayThird}`,
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px'
      }
    }
  },
  pagination: {
    btn: {
      border: `1px solid ${palette.graySecondary}`,
      backgroundColor: `${palette.white}`,
      padding: '5px 10px'
    }
  }
}

export const theme = {
  palette,
  styles
}

export type ThemeType = keyof typeof theme