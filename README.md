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
useState를 사용하길 권장
코드가 간결하고, 리액트 개발 팀이 함수형 컴포넌트 + Hook를 사용하는 것이 주요 컴포넌트 개발 방식이 될것이라고 공지함

## 이벤트 핸들링

클래스형 컴포넌트로 할 수 있는 대부분의 작업은 함수형 컴포넌트로도 구현할 수 있다.
함수형 컴포넌트에서 여러 개의 input 상태를 관리하기 위해 useState에서 form 객체를 사용하면 된다.
'useReducer', '커스텀 Hook'를 사용하면 더 편리해 진다.

## ref:DOM에 이름 달기

컴포넌트 내부에서 DOM에 직접 접근해야 할 때 ref를 사용한다.
서로 다른 컴포넌트끼리 교류할 때는 ref 사용을 지양한다. 리액트 사상에 어긋난 설계이다.
컴포넌트끼리 데이터를 교류할 때는 부모<->자식 흐름으로 교류 해야 한다.

## 컴포넌트 반복

컴포넌트 배열을 렌더링 할 때는 key 값이 유일해야 한다.
concat, filter 등의 내장 함수를 사용하여 새로운 배열을 만든 후 새로운 상태로 설정해 줘야 한다.

## 컴포넌트의 라이프사이클 메서드

라이프사이클 메서드는 컴포넌트 상태에 변화가 있을 때마다 실행된다.
서드파티 라이브러리를 사용하거나, DOM을 직접 건드려야 할때 유용하다.

## 8장 Hooks

Hooks 패턴을 사용하면 클래스형 컴포넌트를 작성하지 않고도 대부분의 기능을 구현할 수 있다.
메뉴얼에서는 함수형 컴포넌트와 Hooks를 사용할 것을 권장 한다.

## 9장 컴포넌트 스타일링

다양한 리액트 컴포넌트 스타일링 방식이 있고, 이러한 방식들 중 무엇을 사용할지는 사용자의 몫이다.

## 10장 일정 관리 웹 애플리케이션

소규모 프로젝트이기 때문에 컴포넌트 리렌더링 최적화는 하지 않았다.
클라이언트 자원을 더욱 효율적으로 사용하려면 불필요한 리렌더링을 방지해야 한다.
이어지는 11장에서 다룬다.

## 11장 컴포넌트 성능 최적화

리액트 컴포넌트의 렌더링을 기본적으로 빠르기 때문에 최적화 작업에 대해 너무 큰 스트레스를 받거나 모든 컴포넌트에 일일이 React.memo를 작성할 필요는 없다. 단 100개 이상의 컴포넌트를 만들고, 업데이트가 자주 발생한다면 꼭 최적화를 해주자.

## 12장 immer를 사용하여 더 쉽게 불변성 유지하기

이 라이브러리는 컴포넌트의 상태 업데이트가 조금 까다로울 때 사용하면 매우 좋다.

## 13장 리액트 라우터로 SPA 개발하기

뷰 렌더링을 사용자의 브라우저에서 담당하도록 한다.
우선 애플리케이션을 브라우저에 불러와서 실행시킨 후에 사용자와의 인터랙션이 발생하면 필요한 부분만 자바스크립트를 사용하여 업데이트 한다.

다른 주소에 화면을 보여 주는 것을 라우팅 이라고 한다.

클라이언트 사이드에서 이루어지는 라우팅을 간단하게 구현할수 있도록 해주고, 서버 사이드 렌더링을 할 때도 라우팅을 도와주는 컴포넌트를 제공해 준다.

SPA의 단점
앱의 규모가 커지면 자바스크립트 파일이 너무 커진다. -> 코드 스플리팅을 사용하여 트래픽과 로딩 속도를 개선.

검색 엔진의 검색 결과에 페이지가 잘 나타지 않을 수 있다 -> 서버 사이드 렌더링을 통해 해결.
