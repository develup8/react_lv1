import React from "react";
import styled, { css } from "styled-components";
// Line 2: 단순 변수의 형태가 아니라 여러줄의 스타일 구문을 조건부로 설정해야 하는 경우에는 css를 불러와야 한다

const Box = styled.div`
  /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다 */
  background: ${(props) => props.color || "blue"};
  padding: 1em;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해 줍니다. */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  // Box 컴포넌트의 background값에 props를 조회해서 props.color값을 사용하게 설정했다. color값이 없다면 기본값으로 설정한 blue가 렌더링 된다
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
    {/* Line 50: props를 사용하여 서로 다른 스타일 적용 */}
  </Box>
);

export default StyledComponent;
