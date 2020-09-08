import ToyReact from './toy-react'
import ToyReactDOM, { Component } from './toy-reactDOM'

class MyComponent extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date().getTime(),
            format: 'timestamp',
            deep: {
                data: 'apple'
            }
        }
    }
    render() {
        return <div>
            <h1>123</h1>
            <ul>
                <li>444</li>
                <li>555</li>
                <li>666</li>
            </ul>
            <h2>{this.props.aa}</h2>
            <h3>{this.state.date}</h3>
            {this.state.deep.data}
            {this.props.children}
            <button onClick={() => {
                this.setState({
                    date: new Date().getTime(),
                    deep: {
                        data: 'banana'
                    }
                })
            }}>update {this.state.format}</button>
        </div>
    }
}

ToyReactDOM.render(<MyComponent aa="AA">
    <input />
    <button>ok</button>
</MyComponent>, document.getElementById('root'))