### "keys 이해하기"

- state로 내려준 데이터를 가지고 child component가 map으로 사용하려고 할때
- 개발자모드 elements 에서 확인하면 요소가 첫번째에 생성되는 것이 아닌 마지막에 생성됨 -> 새로운 데이터를 배열의 처음으로 넣어주었는데도
- 그런 이유로 발생하는 에러 : `Warning: Each child in a list should have a unique "key" prop.`
- 새로운 아이템이 어디에 추가되어야 하는지 리액트에게 알려줘야하기 때문
- 그래서 key props를 추가함 -> 개별 아이템을 인식할 수 있음 -> 고유값은 id값을 가져오는 것이 좋음 , id가 없다면 idx 받아와도 되지만 장려되지 않음

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

### 화살표 함수 제대로 쓰기 ?

- 에러 난 코드

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

- 정상 작동 되는 코드

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

=> 화살표 함수 내부에서 {} 중괄호를 감쌌더니 에러가 나면서 (에러라기 보다는 터미널에서 warning 뜸) 화면이 보이지 않음 (해당하는 컴포넌트가 실행되지 않음), 소괄호로 감싸자,,
