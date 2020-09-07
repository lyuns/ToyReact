import ToyReact from './toy-react'
import ToyReactDOM, { Component } from './toy-reactDOM'

class MyComponent extends Component {
    render() {
        return <div>
            <h1>123</h1>
            <ul>
                <li>444</li>
                <li>555</li>
                <li>666</li>
            </ul>
            <h2>{this.props.aa}</h2>
            {this.props.children}
        </div>
    }
}

ToyReactDOM.render(<MyComponent aa="AA">
    <input />
    <button>ok</button>
</MyComponent>, document.getElementById('root'))