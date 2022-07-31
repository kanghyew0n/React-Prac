### "keys 이해하기"

- state로 내려준 데이터를 가지고 child component가 map으로 사용하려고 할때
- 개발자모드 elements 에서 확인하면 요소가 첫번째에 생성되는 것이 아닌 마지막에 생성됨 -> 새로운 데이터를 배열의 처음으로 넣어주었는데도
- 그런 이유로 발생하는 에러 : `Warning: Each child in a list should have a unique "key" prop.`
- 새로운 아이템이 어디에 추가되어야 하는지 리액트에게 알려줘야하기 때문
- 그래서 key props를 추가함 -> 개별 아이템을 인식할 수 있음 -> 고유값은 id값을 가져오는 것이 좋음 , id가 없다면 idx 받아와도 되지만 장려되지 않음

<br/>

### 조건부 내용 추가하기

1. 삼항 연산자 사용하기

```js
{
  filteredExpenses.length === 0 ? (
    <p>No Expenses found.</p>
  ) : (
    filteredExpenses.length > 0 &&
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  );
}
```

<br/>

2. 삼항 연산자 분리하기

- & 연산자 기준으로 앞의 내용이 만족한다면 뒤의 내용을 반환함

```js
{
  filteredExpenses.length === 0 && <p>No Expenses found.</p>;
}
{
  filteredExpenses.length > 0 &&
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
}
```

<br/>

3. 변수에 조건부 명령 담기

```js
let expensesContent = <p>No Expenses found.</p>;

if (filteredExpenses.length > 0) {
  expensesContent = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}
```

<br/>

### 화살표 함수 제대로 쓰기 ?

- `Array.prototype.map() expects a return value from arrow function array-callback-return`
- 화살표 함수 내부에서 {} 중괄호를 감쌌더니 에러가 나면서 (에러라기 보다는 터미널에서 warning 뜸) 화면이 보이지 않음 (해당하는 컴포넌트가 실행되지 않음)
- <u>에러 난 코드</u>

```js
{
  props.items.map((expense) => {
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />;
  });
}
```

- 정상 작동 되는 코드 1

```js
{
  props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}
```

- 정상 작동되는 코드 2

```js
{
  props.items.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
}
```

=> mdn을 보자 :

```js
// 매개변수가 하나뿐인 경우 괄호는 선택사항:
(singleParam) => {
  statements;
};
(singleParam) => {
  statements;
};

// 매개변수가 없는 함수는 괄호가 필요:
() => {
  statements;
};
```

```js
// 객체 리터럴 표현을 반환하기 위해서는 함수 본문(body)을 괄호 속에 넣음:
(params) => ({ foo: bar });
```

=> block바디는 자동으로 값을 반환하지 않습니다. `return`을 사용해서 값을 반환해야 한다.

```js
var func = (x) => x * x; // concise 바디, 생략된 "return" 여기서는 x * x
var func = (x, y) => {
  return x + y;
}; // block 바디, "return"이 필요
```

[참고 링크 1 : stackoverflow](https://stackoverflow.com/questions/64518433/how-fix-this-warrning-warning-array-prototype-map-expects-a-return-value-from)

[참고링크 2 : MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

<br/>

### 차트 추가하기 & 동적 스타일 추가

- ChartBar의 높이를 동적으로 할당하고싶음 -> 해당하는 비용을 props로 받아서 높이를 지정해주기
- 우선 ChartBar의 기본 높이는 10rem, html style 속성으로 height 동적으로 지정

```js
if (props.max > 0) {
  barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
}
```

-html 요소에 style 속성 추가하기

```html
 <div style={{ height: barFillHeight, backgroundClor: red }}></div>
```

- background-color 같이 (-)이게 포함된다면 'background-color'로 표기해야함 , 혹은 카멜케이스로 backgroundColor로 표기해야함

<br/>

### 추가

- `Math.max()` : Chart.js에서 `const totalMaximum = Math.max(...dataPointValues);` <- 전개 연산자로 넘겨줌

```
Math.max 는 입력값으로 넘버타입을 받음, 입력값으로 배열을 받고싶다면 전개연산자를 이용해야함
```

- `Math.round()` : 반올림한 수와 가장 가까운 정수 값을 반환 / ChartBarjs 에서 `Math.round((props.value / props.maxValue) * 100) + "%"` (차트 바의 높이를 구하기 위함)

```
props.value (=amount), props.maxValue (=???)
이 부분 props를 중간에 놓쳤다 파일이 너무 많아서 헷갈리는군,,
```

<br/>

<br/>
