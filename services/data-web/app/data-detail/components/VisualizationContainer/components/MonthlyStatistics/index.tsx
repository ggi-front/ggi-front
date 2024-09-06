import { MONTHLY_STATISTICS_TABLE_HEADER } from '@/app/data-detail/constants/TableHeader'
import { monthlyStatisticsDummyData } from '@/app/data-detail/db'
import DownloadBtn from '@/app/shared/components/buttons/DownloadBtn'
import TableContainer from '@/app/shared/components/table/TableContainer'
import TableHead from '@/app/shared/components/table/TableHead'
import TableItem from '@/app/shared/components/table/TableItem'
import PickText from '@/app/shared/components/text/PickText'
import SubTitle from '@/app/shared/components/text/SubTitle'
import useWindowSize from '@/app/shared/hooks/useWindowSize'
import { excelDownload } from '@/app/shared/utils/excelDownload'
import { excelTitle } from '@/app/shared/utils/excelTitle'
import { formatCurrency } from '@/app/shared/utils/formatCurrency'

export default function MonthlyStatistics() {
  const size = useWindowSize()
  const isMobile = size.width < 1080

  return (
    <div>
      <div className="w-full flex justify-between items-center mb-8 ggi:flex-col ggi:items-start ggi:mb-5 ggi:px-4">
        <div>
          <SubTitle title="월별 통계" />
          <div className="mt-3 ggi:mt-2">
            <PickText
              text={
                <span>
                  서울특별시 용산구 청파동,{isMobile && <br />}2023.08.01 ~
                  2024.07.31 경매매각 건,{isMobile && <br />}아파트
                </span>
              }
            />
          </div>
        </div>
        <DownloadBtn
          onClick={() =>
            excelDownload({
              data: monthlyStatisticsDummyData,
              headers: MONTHLY_STATISTICS_TABLE_HEADER,
              fileName: excelTitle('월별 통계'),
              conditions: {
                location: `서울특별시 서대문구`,
                period: `2023.07 ~ 2024.06`,
                usage: `아파트`,
              },
            })
          }
        />
      </div>
      <TableContainer>
        <ul className="flex border-b border-[#E5E7EB]">
          {MONTHLY_STATISTICS_TABLE_HEADER.map((headerInfo) => (
            <TableHead
              key={headerInfo.key}
              width={`${headerInfo.width}px`}
              text={headerInfo.title}
            />
          ))}
        </ul>
        {monthlyStatisticsDummyData.map((data, index) => (
          <ul
            key={index}
            className="flex border-b border-[#E5E7EB] last:border-none group last:bg-[#F9FBFF]"
          >
            <TableItem width="108px" text={data.date} />
            <TableItem width="190px" text={data.region} />
            <TableItem width="160px" text={data.usage} />
            <TableItem width="88px" text={data.saleRate} />
            <TableItem width="88px" text={data.salePriceRate} />
            <TableItem width="88px" text={data.nonProceedRate} />
            <TableItem width="88px" text={data.avgBidCount} />
            <TableItem width="88px" text={data.progressCount} />
            <TableItem width="88px" text={data.saleCount} />
            <TableItem width="88px" text={data.unsuccessfulCount} />
            <TableItem width="88px" text={data.modifiedCount} />
            <TableItem width="88px" text={data.withdrawnCount} />
            <TableItem
              width="190px"
              text={formatCurrency(data.appraisalTotal)}
            />
            <TableItem width="200px" text={formatCurrency(data.saleTotal)} />
          </ul>
        ))}
      </TableContainer>
    </div>
  )
}
