export const infoContents = `
경매 현장에서 법률상담, 소송대리, 입찰대리, 경매상담, 중개서비스, 대출서비스, 채권매각을 기다리는 수요자에게 DM을 보내보세요. 소유자/채무자/채권자/입주자 등 경매사건 이해관계인의 DM 발송용 정보를 한번에 다운로드 할 수 있습니다. 가장 빠르고 정확한 지지옥션 경매정보. 업무에 활용할 수 있는 기회를 놓치지 마세요.
`

export const conditionTitle = `나의조건`
export const saveConditionTitle = `나의조건을 설정합니다`
export const conditionSubTitle = `나의조건은 10개까지만 설정할 수 있습니다`
export const saveConditionSubTitle = `사용하실 조건 이름을 적어주세요. \r\n 조건은 10개까지만 저장할 수 있습니다.`

export const usage = [
  {status : true, name: '아파트'},
  {status : false, name: '다세대'},
  {status : false, name: '업무(오피스텔)'},
  {status : false, name: '주택'},
  {status : false, name: '연립'},
  {status : false, name: '다가구주택'},
  {status : false, name: '상가·상업시설'},
  {status : false, name: '공장'},
  {status : false, name: '기타건물'},
]

export const conditions = [
  {status : false, name: '선순위전세권'},
  {status : false, name: '선순위임차권'},
  {status : false, name: '선순위가등기'},
  {status : false, name: '선순위가처분'},
  {status : false, name: '유치권'},
  {status : false, name: '법정지상권'},
  {status : false, name: '분묘기지권'},
  {status : false, name: '지분매각'},
  {status : false, name: '입찰외포함'},
  {status : false, name: '예고등기'},
  {status : false, name: '대지권 미등기'},
  {status : false, name: '맹지'},
  {status : false, name: '건물만 입찰'},
  {status : false, name: '토지만 입찰'},
  {status : false, name: '토지별도등기'},
  {status : false, name: '재매각'},
]

export const rentConditions = [
  {status : true, name: '임차인 없는 물건'},
  {status : false, name: 'HUG인수조건 변경'},
]

export const price = [
  {status : false, name: '1천'},
  {status : false, name: '5천'},
  {status : false, name: '1억'},
  {status : false, name: '3억'},
  {status : false, name: '5억'},
  {status : false, name: '10억'},
  {status : false, name: '30억'},
  {status : false, name: '30억~'},
]

export const selectPrice = [
  '1천',
  '5천',
  '1억',
  '3억',
  '5억',
  '10억',
  '30억',
  '30억~',
]

export const sidos = {
  '서울': '서울특별시', 
  '경기': '경기도',
  '인천': '인천광역시',
  '부산': '부산광역시',
  '대구': '대구광역시',
  '광주': '광주광역시',
  '대전': '대전광역시',
  '울산': '울산광역시',
  '강원': '강원도',
  '경남': '경상남도',
  '경북': '경상북도',
  '전남': '전라남도',
  '전북': '전라북도',
  '충남': '충청남도',
  '충북': '충청북도',
  '세종': '세종특별자치시',
  '제주': '제주도'
}

export const listHeaders = (expected: boolean) => ({
  chk: {
    name: '',
    width: '3%'
  },
  idx: {
    name: '순번',
    width: '5%'
  },
  download: {
    name: '다운이력',
    width: '7%'
  },
  court: {
    name: '법원 또는 계',
    width: '10%'
  },
  caseNum: {
    name: '사건번호',
    width: '15%'
  },
  openingDate: {
    name: expected ? '개시결정일' : '현재상태',
    width: '7%'
  },
  usage: {
    name: '용도',
    width: '13%'
  },
  sendTo: {
    name: '수신인',
    width: '10%'
  },
  address: {
    name: '주소',
    width: '20%'
  },
  postCode: {
    name: '우편번호',
    width: '10%'
  }
})

export const myDmHeaders = {
  0: {
    name: '',
    width: '5%'
  },
  1: {
    name: '분류',
    width: '10%'
  },
  2: {
    name: '검색조건',
    width: '50%'
  },
  3: {
    name: '다운로드 수',
    width: '10%'
  },
  4: {
    name: '재 다운로드',
    width: '10%'
  },
  5: {
    name: '유효기한',
    width: '15%'
  }
}