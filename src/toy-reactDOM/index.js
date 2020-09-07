export class ElementWrap {
    constructor(tag) {
        this.dom = document.createElement(tag)
    }
    setAttribute(key, value) {
        this.dom.setAttribute(key, value)
    }
    appendChild(component) {
        this.dom.appendChild(component.dom)
    }
}

export class TextWrap {
    constructor(text) {
        this.dom = document.createTextNode(text)
    }
}

export class Component {
    constructor() {
        this._dom = null;
        this.props = Object.create(null)
    }
    get dom() {
        if (!this._dom) {
            this._dom = this.render().dom;
        }
        return this._dom;
    }
    setAttribute(key, value) {
        this.props[key] = value
    }
    appendChild(component) {
        if (!this.props.children) {
            this.props.children = [component]
            return
        }
        this.props.children.push(component)
    }
}

const ToyReactDOM = {
    render(component, dom) {
        dom.appendChild(component.dom)
    }
}

export default ToyReactDOM;