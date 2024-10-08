import { excelDownload } from '@/app/data-pro/utils/excel'
import '../../../../../styles/icon.css'
import { Header } from '@/app/data-pro/models/Table'

export default function DownIcon({
  data,
  tableHeader,
  sendImage,
}: {
  data: any[]
  tableHeader: Header
  sendImage: () => void
}) {
  const today = new Date()
  const year = today.getFullYear()
  const month =
    today.getMonth() < 10
      ? (today.getMonth() + 1).toString().padStart(2, '0')
      : today.getMonth() + 1
  const day =
    today.getDate() < 10
      ? today.getDate().toString().padStart(2, '0')
      : today.getDate()
  return (
    <div
      className="download-container flex flex-row gap-1 w-30 h-[50px] pl-3 pr-3 pt-2 pb-2 justify-center items-center rounded-[16px] border border-[#E5E7EB] cursor-pointer"
      onClick={() => {
        // excelDownload({
        //   data,
        //   fileName: `경매통계(연간)_${year}${month}${day}`,
        //   header: tableHeader,
        //   condition: {
        //     location: `서울특별시 용산구 청파동`,
        //     period: `2023.07 ~ 2024.06`,
        //     usage: `아파트`,
        //   },
        // })
        sendImage()
      }}
    >
      <p className="text-gray-500 text-base font-bold font-['SUIT'] leading-snug">
        EXCEL
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          d="M17.2992 17.1857H7.69922H17.2992Z"
          className="icon-path"
          fill="#6B7280"
        />
        <path
          d="M17.2992 17.1857H7.69922"
          className="icon-path"
          stroke="#6B7280"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5564 6.90002V11.0143H17.2992L12.4992 15.8143L7.69922 11.0143H10.4421V6.90002H14.5564Z"
          className="icon-path"
          fill="#6B7280"
          stroke="#6B7280"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
