# react-justify-list-between
> Justify list between only for 2 column list based on react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-justify-list-between --registry=https://registry.npm.taobao.org
```

```js
import ReactJustifyListBetween from 'react-justify-list-between';
```

```scss
// customize your styles:
$react-justify-list-between-options:(
);

@import 'node_modules/react-justify-list-between/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-justify-list-between --save
// import : import ReactJustifyListBetween from 'react-justify-list-between'

class App extends React.Component {
  state = {

  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render() {
    return (
      <div className="hello-react-justify-list-between">
        <ReactJustifyListBetween className="m10 webkit-sassui-justify-list-between test-webkit-sassui-justify-list-between">
          {
            [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
              return (
                <div key={item} className="item">
                  <div className="hd">
                    <img src="https://gw.alicdn.com/i3/2122360457/TB23QmKhZuYBuNkSmRyXXcA3pXa_!!2122360457.jpg_350x350q75.jpg" alt="" />
                  </div>
                  <footer className="p10">
                    <h4 className="c-9 f12 lc-2">飞猪专线成都一日游都江堰青城山熊猫基地黄</h4>
                    <p className="f12 mt10">
                      <span>165</span>
                      <em>已售799件</em>
                    </p>
                  </footer>
                </div>
              )
            })
          }
        </ReactJustifyListBetween>
      </div>
    );
  }
}

```
