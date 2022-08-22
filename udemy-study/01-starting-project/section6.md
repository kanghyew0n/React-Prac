<br/>
<br/>

### 동적 인라인 스타일 설정하기

- `trim()` 메서드는 시작이나 끝 부분에 과도하게 쓰인 공백을 제거해줌 -> 사용자가 수 많은 공백을 입력한 경우를 배제하기 위해서
- ex) `' Hello world! '` -> `'Hello world!'`
- trimStart(), trimEnd() 로 한쪽 끝 공백만 제거할 수도 있음
- 인라인 스타일 설정하기 : `style={{ color: !isVaild ? "red" : "black" }}` -> ` const [isVaild, setIsVaild] = useState(true);` 유효한 값인지 판단하여 스타일 설정
- 단점 ) 인라인을 스타일을 지정 한 부분과 css 스타이릐 중복이 발생함 -> 인라인 스타일이 덮어쓰기 함 (최우선 순위 차지함)

<br/>

### 동적으로 css 클래스 설정하기

- `<div className={`form-control ${!isVaild ? "invaild" : ""}`}>`
- 상태에 따라 클래스를 추가함

```css
.form-control.invaild input {
  border-color: red;
  background-color: rgb(251, 170, 170);
}
```

- 같은 요소에 있는 클래스 명이라면 공백 없이 사용함 -> `.form-control.invaild`

<br/>

### Styled-Component

- 설치하기 :`npm install --save styled-componts`
- import 하기 : `import styled from "styled-components";`
- 사용하기 : ` const Button = styled.button``  `
- 가상 선택자 사용 가능 ("&") : ` &:focus`
- class명 : 패키지에서 동적으로 생성한 클래스명임 -> 다른 컴포넌트에 영향을 주지않음 (고유한 클래스명 가지 수 있음)

<br/>

### Styled-Component & 동적 Props

- 클래스명 추가하기 :`<FormControl className={!isVaild && "invaild"}>`
- props 사용하기 : ` <FormControl invaild={!isVaild}>` -> 컴포넌트에 prop 내려주고
  `border: 1px solid ${(props) => (props.invaild ? "red" : "#ccc")};` -> 원하는 스타일에 props로 받아줌

<br/>

### Styled-Component & 미디어 쿼리

```css
@media (min-width: 768px) {
  width: auto;
}
```

- ` const Button = styled.button`` ` -> 백틱 안에 추가하면 됨

<br/>

### css 모듈 사용하기

- css 모듈을 사용하기 위해서는 그 기능을 지원하도록 설정된 프로젝트에서만 사용이 가능함
- 왜냐면 브라우저에서 코드가 실행되기 전에 코드의 변환이 필요하기 때문
- css 모듈 사용하기 : `import styles from "./Button.module.css";` / `import classes from "./Button.module.css";`
- css 파일며에 .module 추가하기 -> `Button.module.css` -> css 모듈이 작동하도록 코드를 변환하게 함
- `className={styles.button}` -> css 파일에 button 클래스를 추가했다면 button 프로퍼티를 갖게됨
- 엘리먼트를 살펴보면 (개발자모드) "컴포넌트이름\_클래스 이름\_\_고유한 해시값” 의 클래스명을 가진 버튼이 생성됨 -> 모든 클래스 이름을 고유하게 만들어줌
- `className={styles["form-control"]}` -> 클래스명 사이에 (-) 있으면 이렇게 표현해줌

<br/>
<br/>
