import { ITabStatus } from "@/models/dm/DM"
import { Table } from "../styles/Boxes"
import { CheckBox } from "../styles/Button"
import { theme } from "../styles/theme"
import { InfoText, TextGothicBold } from "../styles/Typography"
import ListPagination from "./ListPagination"

const tempValues = [
  {
    download: 'Y',
    court: '북부4계',
    caseNum: '2024-4056',
    openingDate: '2024.07.29',
    usage: '아파트',
    sendTo: '소유자',
    address: '서울특별시 용산구 후암동 ***',
    postCode: '*****'
  }
]

interface ITableProps {
  headers: any,
  tabs?: ITabStatus
}
export default function ListTable ({
  headers,
  tabs
}: ITableProps) {
  
  const getHeader = (headers: any) => {
    return (
      <thead style={{ height: '50px' }}>
        <tr>
          {Object.keys(headers).map((key, idx) => (
            <th 
              key={key} 
              style={{ 
                padding: '15px 0px',
                borderRadius: idx === 0 ? '16px 0 0 0 ' : idx === Object.keys(headers).length-1 ? '0 16px 0 0' : '0',
                backgroundColor: idx < 7 ? `${theme.palette.backgroundGray}` : `${theme.palette.blueSecondary}`,
                border: tabs?.mine ? `1px solid ${theme.palette.graySecondary}` : 'none',
                width: headers[key].width
            }}>
              {idx === 0 ? (
                <CheckBox type="checkbox" id='chk' />
              ) : (
                <TextGothicBold color={idx < 7 ? theme.palette.grayMain : theme.palette.black}>
                  {headers[key].name}
                </TextGothicBold>
              )}
            </th>
          ))}
        </tr>
      </thead>
    )
  }

  const getBody = (values: any[]) => {
    return (
      <tbody>
        <tr>
          {Object.keys(headers).map((header, idx) => (
            <td key={header}
              style={{
                height: '44px',
                width: headers[header].width,
                padding: '10px 0',
                textAlign: 'center',
                border: tabs?.mine ? `1px solid ${theme.palette.graySecondary}` : 'none',
              }}
            >
              {idx === 0 ? (
                <CheckBox type="checkbox" id='chk' />
              ) : (
              <InfoText color={theme.palette.black}>
                {idx === 1 ? idx : values[0][header] ?? null}
              </InfoText>)}
            </td>
          ))}
        </tr>
      </tbody>
    )
  }

  return (
    <>
    <Table>
      {getHeader(headers)}
      {getBody(tempValues)}
    </Table>
    
    <ListPagination/>
    </>
  )
}