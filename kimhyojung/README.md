### 구현 목록 정리

- 페이지 별로 정리해보자

#### index.tsx

1. `index.tsx`가 메인임. 요기서 내가 좋아하는 목록을 보여줘야 함
2. 영화를 컴포넌트로 묶어야함 (Props를 사용해야함)
3. 영화 컴포넌트에는 영화제목,이미지,번호가 있으면 좋을듯
4. (추가로 누르면 영화 내용이 나오는 것도 ?)

- 페이지 이동은 라우트를 이용해야 함

#### booking.tsx

#### 영화 컴포넌트를 booing에서 그대로 쓸건지, 아니면 따로 만들지 문제

- 컴포넌트를 가져와서 사용해보자(재사용)
- state,useState를 사용해야 함

1. booking.tsx에서는 3가지 요구사항이 있음

   1. 영화를 선택해야함.
   2. 좌석을 선택해야함.
   3. 좌석이 늘어나면 가격도 늘어나야 함

2. 발생할 수 있는 예외처리

   1. 인원이 0보다 작은 경우 예외처리(alert)
   2. 선택 불가 좌석 예외처리

3. 최종적으로 선택한 경우, `purchase`로 라우팅

#### purchase.tsx

- 무슨영화,n명,결제 금액 알려주기
- `route query`를 사용해볼것

- 추가로, 전역 상태관리와 라우트 쿼리 비교해서 장단점 알아보기

#### 11-25 마주한 문제점.,,

- Globalstyle에 폰트 적용하려고 하는데 안된다.

* 결국 public에 폰트를 만들고 그안에 css를 넣는 방식으로 해결했지만, src안에서어
  떻게 로컬 폰트를 가져오는지 아직 궁금하다,,,

#### 11-27 마주친 문제점

- 리랜더링 시 styled-component가 적용되지 않는다

#### 12-02 마주친 문제점

- Link에 styled-component먹이는 방법..
- (Link태그를 걍 styled-components로 바로 꾸미는 방법) or Link안에 태그를 넣고
  그 태그를 꾸미는 방법

```import Link from 'next/link'
const StyledLink = styled(Link)`
  color: red;
  background: blue;
`

export default () => (<div><StyledLink href="mylink">MyText</StyledLink></div>)
```
