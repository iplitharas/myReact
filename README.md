# myReact

## Table of contents 
1. [Meet-React](Chapter%201%20-%20Meet%20React/notes.md)
2. [React-commands](#react-commands)
3. [Meet-React](#meet-react)


## React-commands
* ` npx create-react-app name` : create a new react-app 
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

≈