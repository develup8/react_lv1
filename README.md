# 리액트를 다루는 기술 개정판 학습용 소스코드

리액트를 다루는 기술 개정판의 학습용 소스 코드입니다.

## JSX

HTML과 비슷하지만 코드로 보면 XML 형식의 자바스크립트 객체이다.

## 컴포넌트

props와 state는 둘 다 컴포넌트에서 사용하거나 렌더링할 데이터를 담고 있어 비슷해 보일 수 있지만, 역할은 다르다.

prop는 부모 컴포넌트가 설정,
state는 컴포넌트 내부에서 업데이트 할수 있다.

부모 컴포넌트의 state를 자식 컴포넌트의 props로 전달하고,
자식 컴포넌트에서 부모 컴포넌트의 메서드를 호출하면 props도 유동적으로 사용할수 있다.

클래스형 컴포넌트의 state보다
\*useState를 사용하길 권장
코드가 간결하고, 리액트 개발 팀이 함수형 컴포넌트 + Hook를 사용하는 것이 주요 컴포넌트 개발 방식이 될것이라고 공지함

## 이벤트 핸들링

클래스형 컴포넌트로 할 수 있는 대부분의 작업은 함수형 컴포넌트로도 구현할 수 있다.
함수형 컴포넌트에서 여러 개의 input 상태를 관리하기 위해 useState에서 form 객체를 사용하면 된다.
'useReducer', '커스텀 Hook'를 사용하면 더 편리해 진다.
