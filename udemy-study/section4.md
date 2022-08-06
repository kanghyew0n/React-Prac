### 사용자 이벤트 다루기 (State)

- 리액트는 우리가 원하는 목표 상태를 저의하고 도달하게끔 처리함
- 상확용이 가능한 프로그램을 만들어야함
- 이벤트 다루기 할것임
- state와 component에 대해 다룰 것임

<br/>

### onClick 함수 실행

- `<button onClick={clickHandler}>Change Title</button>` 에서 함수는 ()로 호출되지 않음
- clickHandler 함수는 버튼이 클릭됐을때 싫행해야함, 만약 `clickHandler()`로 작성한다면 클릭될때가 아니라 코드가 읽어질때 함수가 실행하게됨
- 이벤트에서 트리거되고 핸들러에서 끝나게 이름을 지음

<br/>

### 컴포넌트 실행되는 방법 (리액트 작동방식)

- index.js가 실행되면서 리액트 앱을 불러온다.
- 리액트는 절대 반복하지 않는다.

```js
let title = props.title;

const clickHandler = () => {
  title = "update!!!";
  console.log(title);
};
```

<br/>

- title의 값은 변하지만 화면에 출력된는 title은 초기값 그대로임 (props.title)
- 그 이유는 렌더링 되지 않았기 때문! -> 리액트는 반복하지 않기 때문에 무언가 변경될 때 렌더링 필요 -> 그래서 나온 개념이 state!!!
- (일부 변수가 변경되어도 컴포넌트 함수는 다시 시행도지 않음)

<br/>

### useState

- 리액트 라이브러리에서 제공하는 함수
- 컴포넌트 함수가 다시 호출되는 곳에서 변경된 값을 반영하기 위해 state 값을 정의할 수 있게 해주는 함수
- useState는 리액트 훅 중에 하나이고, 훅들은 앞에 use가 붙어 알아채기 쉽고 state는 중요한 훅중 하나이다.
- const [변수자체, 업데이트함수] = useState();

<br/>

Q. 새로운 값에 할당하는 것이 아닌 state를 업데이트하는 함수를 사용할까?
A. 이 함수를 호출하는 것은 어떤 변수에 새로운 값을 할당하는 것이 아니라 대신 특별한 변수로 시작하기 때문이다.
-> `const [title, setTitle] = useState(props.title);` 이것은 메모리 어딘가에서 리액트로 관리된다.
state가 변할때 이 컴포넌트 함수를 다시 호출하고 싶으면 state를 업데이트하는 함수를 호출하면 됨 -> 렌더링 필요하면 state 함수 호출해라!
그럼 리액트는 이 컴포넌트 함수를 다시 실행하고 다시 JSX코드를 다시 평가함 -> 변화를 감지하여 다시 화면에 나타나게 함!

<br/>

### 사용자 입력 리스닝

- onChange 이벤트가 발생하면 시행되는 함수에서 input 값이 변경될 때마다 값을 가져오기 위해 event.target.value를 가져온다
- `event`는 이벤트가 발생한 객체를 가져오고
- `event` 객체는 다양한 데이터를 포함하는데 `target`은 여기에 포함된 필드 속성이고 이는 이벤트가 일어나는 DOM 요소를 가르킨다. -> 여기서는 input을 가르킴
- `target`이 가지는 속성중에 `value`가 있는데 이는 이벤트가 벌어지는 시점의 현재 값을 가져온다.
- 컴포넌트 1개당 하나의 상태를 가지고 있게 할 수 있다.

<br/>

### 여러 state다루기

- 하나의 폼에서 3개의 input 값을 각각 하나의 state로 관리하고 있음 -> 가튼 개념 3번 반복된다고 할 수 있음
- 하나의 state로 관리하기 -> useState의 값을 객체로 관리함 (3개의 독립적인 상태가 아님)

```js
const [userInput, setUerInput] = useState({
  enteredTitle: "",
  enteredAmount: "",
  enteredDate: "",
});

setUerInput({
  ...userInput,
  enteredTitle: e.target.value,
});
```

- 전개연산자를 통해 남아있는 데이터에 새로운 값을 덮어씌워야 함

```js
setUerInput((prevState) => {
  return { ...prevState, enteredTitle: e.target.value };
});
```

<br/>

### 양식 제출 처리

- button에 onClick 이벤트를 줄 수 도 있지만 button 의 타입이 submit이라면 form 태그 안에서 onSubmit 이벤트를 줄 수 있음
- 이때 submit되면 페이지가 로딩되는데 form의 기본 동작이기 때문임 -> `event.preventDefault`로 기본 동작으 막아줄 수 있음
- 하나씩 관리되고 있는 상태에서 하나의 객체로 합쳐줘서 data로 관리함

<br/>

### 양방향 바인딩

- 폼을 입력하고 input 값을 초기화 시켜주고 싶을때 -> input에 value로 enteredTitle 주기
- submitHandler 함수가 실행되면 enteredTitle 값 초기화 시켜주기

<br/>

### 컴포넌트 통신 (상향식)

- 기존 방향 : 부모 컴포넌트 -> 자식 컴포넌트 (props)
- 상향식 : 자식 -> 부모 (함수의 매개변수를 이용해서 전달 가능)

<br/>

### state 끌어올리기

<br/>
<br/>
