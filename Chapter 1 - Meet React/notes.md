Start the webserver:
```bash
python -m http.server 3000
```

From `React` we have to:
1. Create a simple element
```javascript
const reactElement = React.createElement('h1', null, 'Hello world!!!');

```
2. Render it at the `root`
```javascript
const domNode = document.getElementById('root');
ReactDOM.render(reactElement, domNode);
```

HTML sample page:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Chapter 1 - Meet Reach</title>
    <script src="//unpkg.com/react@17/umd/react.development.js"></script>
    <script src="//unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
</head>
<body>
 <div id="root"></div>
<script src="script.js"></script>
</body>
</html>
```