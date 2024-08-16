import { FlexCenter, FlexNowrap, PaginationBox } from "../styles/Boxes";
import { ModalBtn, PageBtn } from "../styles/Button";
import { theme } from "../styles/theme";
import { TextSuitBold } from "../styles/Typography";

export default function ListPagination() {

  return (
    <FlexCenter>
      <PaginationBox>
        <ModalBtn styles={theme.styles.pagination.btn}>
          <TextSuitBold color={theme.palette.grayMain}>
            <FlexCenter>
              <img src="/dm/images/pageLeft.png" alt="pageLeft" width={'9px'} style={{ marginRight: '5px' }}/>
              이전 페이지
            </FlexCenter>
          </TextSuitBold>
        </ModalBtn>
        <FlexNowrap style={{ margin: '0 10px'}}>
          <PageBtn>
            <TextSuitBold color={theme.palette.grayMain}>1</TextSuitBold>
          </PageBtn>
          <PageBtn>
          <TextSuitBold color={theme.palette.grayMain}>2</TextSuitBold>
          </PageBtn>
        </FlexNowrap>
        <ModalBtn styles={theme.styles.pagination.btn}>
        <TextSuitBold color={theme.palette.grayMain}>
          <FlexCenter>
            다음 페이지
            <img src="/dm/images/pageRight.png" alt="pageRight" width={'9px'} style={{ marginLeft: '5px' }}/>
          </FlexCenter>
        </TextSuitBold>
        </ModalBtn>
      </PaginationBox>
    </FlexCenter>
  )
}