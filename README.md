# myReact

## Table of contents 
1. [Intro](#intro)
2. [React-commands](#react-commands)
3. [Meet-React](#meet-react)
4. [States](#states)

## Intro
* `Declarative` over `imperative`.

React embraces declarative style over imperative.
Declarative style means developers write how it should be, not what to do, step-by-step (imperative).
But why is declarative style a better choice? 
The benefit is that declarative style reduces complexity and makes your code easier to read and understand.
```javascript
function countGoodPasswords(passwords) {
  const goodPasswords = [];
  for (let i = 0; i < passwords.length; i++) {
    const password = passwords[i];
    if (password.length < 9) {
      continue;
    }
    goodPasswords.push(password);    #A,
  }
  return goodPasswords.length;
}
```
```javascript
function countGoodPasswords(passwords) {
  return passwords.filter(p => p.length >= 9).length;
}
```
* `Virtual Dom`

Under the hood, React uses a virtual DOM to find differences (the delta) between what's already in the browser and the 
new view. This process is called DOM diffing or reconciliation of state and view
(bringing them back to similarity).
This means developers don't need to worry about explicitly changing the view;
all they need to do is update the state, and the view will be updated automatically as needed.

React's virtual DOM exists only in the JavaScript memory.
Every time there's a data change, React first compares the differences using its virtual DOM;
only when the library knows there has been a change in the rendering will it update the actual DOM

# Properties
One thing to remember is that properties are immutable within their components.
A parent assigns properties to its children upon their creation. 
The child element isn't supposed to modify its properties. 
For instance, you can pass a property `PROPERTY_NAME` with the value `VALUE` to a component of type `Link`, like this:
```javascript
React.createElement(Link, { PROPERTY_NAME: VALUE });
```
Properties closely resemble HTML attributes (as shown with the `href`on the link above). 
This is one of their purposes, but they also have another: you can use the properties of an element in your code as you wish.
Properties can be used as follows:

- To render standard HTML attributes of an element:`href`,`title`,`style`,`class`, and so on.
- As custom instructions for components to make them render individually.

The object of properties can be accessed inside a component using`this.props`. 
**This object is a frozen (immutable) object, from which you can only read values, not set them.**

## React-commands
* `npx create-react-app name` : create a new react-app 
* `start`: Launch a local development web server and 
           continuously compile the project as it changes, serving it to any local browser.
* `build`: compile all resources into a production-ready package deployable to 
           the right web host.
* `test`: Launch a test runner that will run all unit tests 
          defined in your project.
* `eject`: Reveal the insides of the project and make it 
           fully configurable.

## Meet React
In JSX you can use curly brace `{}` notation to output variables
dynamically, which reduces code complexity substantially:

Without using `JSX`
`React.createElement(elementName, data, children)`
```javascript
const element = React.createElement(
  'main',
  null,
  React.createElement(Title, null, 'Welcome'),
  React.createElement(Carousel, {images: 6}),
  React.createElement('a', {href: "/blog"}, 'Go to the blog'),
);
```
with `JSX` we can 
```javascript
const element = <main>
  <Title>Welcome</Title>
  <Carousel images={6} />
  <a href="/blog">Go to the blog</a>
</main>;
```

You might have noticed the parentheses around the returned multiline JSX object in listing 3.4. 
You have to include these parentheses if you start a multiline JSX object on a separate line after e.g. a `return`.
This is the way to create multiline JSX objects when not starting on the same line:
```javascript
return (
  <main>
    <h1>Hello world</h1>
  </main>
);
```

## States
React components are individually `stateful`.
Keeping state in a component is what makes your React application as a whole stateful.
- A **stateful** component is independent of its content and has the ability to update itself based on internal triggers.
- A **stateless** component can only change or update when its parent component provides it with new properties.

> Imagine the difference between a clock component that can display some time of day based on a property passed to it,
> versus a clock component that is able to update itself every second and continually display the current time. 
> In order to do the latter, the component needs to have a way to store what the current time of day is
> (and we also need a way to advance that value).

### Where I put the state?
Normally you would try to put the state as close to the components that need it.

### What we store
1. `Application data` is most often stored on a global level in your component
    > If you have a component that displays gym classes, then it would be possible to store the list of available 
    > classes locally in this component, but that would also mean that all the information about 
    > the available classes would be lost when the component unmounts, and they would have to be re-loaded from 
    > the server when the component later re-mounts. A better solution is often to create a data store in a 
    > component that is persistent in your application so that when data is loaded once, it remains through the application.
2. `UI state`
    > UI state refers to the current state of UI components. In general, this is intermittent data that is not 
    > persisted but just helps the web application render the correct elements in the correct way. 
    > It can be things like which tab is currently active, whether a panel is collapsed or not, is the menu open or not, etc.
    > UI state values are most often kept as local as possible.** The information about whether the menu is open or 
    > not is only of relevance inside the menu component, so you can easily store this as local state inside this component only.
   > 

### `useState` hooks 
When you use a hook in a component, you must always use that hook. 
And you must use the exact same hooks in the exact same order every time you render the component.
```javascript
function Counter({ isVisible }) {
  if (!isVisible) {
   return null;
  }
  const [counter, setCounter] = useState(0);
  return (
    ...
  );
}
```
> Well, that's not allowed! What's wrong here? 
> The hook is not called every time. If the property `isVisible`
> is set to true in one render, the hook will be called, but if it's set to false in the next render, the hook will not 
> be called. And that's not just bad, it will completely break your React application.
Fix 
```javascript
function Counter({ isVisible }) {
  const [counter, setCounter] = useState(0);
  if (!isVisible) {
   return null;
  }
  return (
    ...
  );
}
```

#### initial values
* You could also initialize your state to a value from a cookie or similar local storage. 

#### Initializer function
Instead of, the function `generatePassword` will be called in each render and the value will be ignore
the init value works only for the first time.
```javascript
function Password() {
  const [password, setPassword] = useState(generatePassword());
  ...
}
```
Do apply a lambda 
```javascript
const [password, setPassword] = useState( () => generatePassword() );
```

#### Initializing to a function
If 
```javascript
const OPERATORS = {
  ADDITION: (a, b) => a + b,
  SUBTRACTION: (a, b) => a - b,
  PRODUCT: (a, b) => a * b,
};
function Calculator() {
  const [operator, setOperator] = useState(OPERATORS.ADDITION);
  ...
}
```
This is happening because `useState` is invoked with a function as initializer, 
so it calls the function, but that function doesn't know what to do without arguments, so it just returns `NaN`.

#### Setting the `state` with a function
You can set the value as either a direct value as above or with an updater function that returns the new value.
If you use an updater function it will be passed the **current state as an argument**.
```javascript
const [counter, setCounter] = useState(0);
<button onClick={() => setCounter(value => value + 1)}>
```

#### Setting the `state` to a function
```javascript
const OPERATORS = {
  ADDITION: (a, b) => a + b,
  SUBTRACTION: (a, b) => a - b,
  PRODUCT: (a, b) => a * b,
};
<button onClick={() => setOperator(() => OPERATORS.ADDITION)}>
```

### State scope
To do this, we can use properties to pass state values and state setters to the relevant components.
```javascript
import { useState } from 'react';
function markDone(list, index) {
  return list.map(
    (item, i) =>
      i === index
        ? { ...item, done: true }
        : item
  )
}
function FilterButton({ current, flag, setFilter, children }) {
  const style = {
    border: '1px solid dimgray',
    background: current === flag ? 'dimgray' : 'transparent',
    color: current === flag ? 'white' : 'dimgray',
    padding: '4px 10px',
  };
  return (
    <button style={style} onClick={() => setFilter(flag)}>
      {children}
    </button>
  );
}
function Task({ task, done, markDone }) {
  const paragraphStyle = {
    color: done ? 'gray' : 'black',
    borderLeft: '2px solid',
  };
  const buttonStyle = {
    border: 'none',
    background: 'transparent',
    display: 'inline',
    color: 'inherit',
  };
  return (
    <p style={paragraphStyle}>
      <button style={buttonStyle} onClick={done ? null : markDone}>
        {done ? '✓ ' : '◯ '}
      </button>
      {task}
    </p>
  );
}
function TodoApplication({initialList}) {
  const [todos, setTodos] = useState(initialList);
  const [hideDone, setHideDone] = useState(false);
  const filteredTodos = hideDone
    ? todos.filter(({done}) => !done)
    : todos;
  return (
    <main>
      <div style={{display: 'flex'}}>
        <FilterButton
          current={hideDone}
          flag={false}
          setFilter={setHideDone}
        >Show all</FilterButton>
        <FilterButton
          current={hideDone}
          flag={true}
          setFilter={setHideDone}
        >Hide done</FilterButton>
      </div>
      {filteredTodos.map((todo, index) => (
        <Task
          key={todo.task}
          task={todo.task}
          done={todo.done}
          markDone={() => setTodos(todos => markDone(todos, index))}
        />
      ))}
    </main>
  );
}
function App() {
  const items = [
    { task: 'Feed the plants', done: false },
    { task: 'Water the dishes', done: false },
    { task: 'Clean the cat', done: false },
  ];
  return <TodoApplication initialList={items} />;
}
```
> We store state in one level and pass it around to other components where applicable to render the result we need.
> In our latest todo-application, state is stored "globally" in the TodoApplication 
> component and not just locally inside each of the child components.