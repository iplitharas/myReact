
## Object destruction
```javascript
// const title = props;
// const author = pros ;
const {title , author} = props
```

## Array destruction
```javascript
[...animals, getRandomAnimal()]
```

## CSS with [bulma.io](https://bulma.io/)
```css
.card{
    border-radius: 0.25rem;
    background-color: azure;
}
```

```javascript
<div className="card">
```

* Install `bulma.io`
```bash
npm install bulma
```
* Import at `App.js`
```javascript
import 'bulma/css/bulma.css'
```