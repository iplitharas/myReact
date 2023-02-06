import React, {Component, Fragment} from "react";


class Link extends Component {
    render() {
        const date = new Date();
        const time = date.toLocaleTimeString();
        return (
            <p>
                <a href={this.props.href}>{this.props.label}</a>
                <br/>Time now is {time}
            </p>
        )
    }
}

class ListOfObjects extends Component {
    render() {
        return (
            <ul>
          {this.props.items.map(item => <li key={item}>{item}</li>)}
        </ul>
        )
    }
}

class LinkSpreadOperator extends Component {
    render() {
        const date = new Date();
        const time = date.toLocaleTimeString();
        return (
            <p>
                <a href={this.props.href}>{this.props.label}</a>
                <br/>Time now is {time}
            </p>
        )
    }
}

class LinkWithChildren extends  Component{
    render() {
          return (
            <p>
                <a href={this.props.href}>
                    <strong>{this.props.children}</strong>
                </a>

            </p>
        )

    }
}

function App() {
    const properties = { label: "Read more about React and spread operator", href:"//reactjs.org" };
    return (
      <div>
          <Fragment>
              <Link label="Read more about React" href="//reactjs.org"/>
              <LinkSpreadOperator {...properties}/>
              <LinkWithChildren href={properties.href}>
                  Children text here!
              </LinkWithChildren>
              <ListOfObjects items={ ["item1", "item2", "item3"]} />
          </Fragment>

      </div>

  );
}

export default App;
