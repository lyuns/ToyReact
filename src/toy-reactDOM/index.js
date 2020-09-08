const RENDER_DOM = Symbol('render_dom')

export class ElementWrap {
    constructor(tag) {
        this.dom = document.createElement(tag)
    }
    setAttribute(key, value) {
        if (key.match(/^on([\s\S]+)$/)) {
            this.dom.addEventListener(RegExp.$1.toLowerCase(), () => {
                typeof value === 'function' && value()
            })
            return
        }
        if (key === "className") {
            this.dom.setAttribute("class", value)
            return
        }
        this.dom.setAttribute(key, value)
    }
    appendChild(component) {
        const range = document.createRange()
        range.setStart(this.dom, this.dom.childNodes.length)
        range.setEnd(this.dom, this.dom.childNodes.length)
        component[RENDER_DOM](range)
    }
    [RENDER_DOM](range) { 
        range.deleteContents()
        range.insertNode(this.dom)
    }
}

export class TextWrap {
    constructor(text) {
        this.dom = document.createTextNode(text)
    }
    [RENDER_DOM](range) { 
        range.deleteContents()
        range.insertNode(this.dom)
    }
}

export class Component {
    constructor() {
        this._dom = null
        this._range = null
        this.props = Object.create(null)
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
    [RENDER_DOM](range) {
        this._range = range;
        this.render()[RENDER_DOM](range)
    }
    forceUpdate() {
        this._range.deleteContents()
        this[RENDER_DOM](this._range)
    }
    setState(state) {
        if (!this.state || typeof this.state !== 'object') {
            this.state = newState;
            this.forceUpdate();
            return;
        }
        const merge = (oldState, newState) => {
            for (let props in newState) {
                oldState[props] = newState[props];
                if (newState[props] && typeof newState[props] === 'object') {
                    merge(oldState[props], newState[props])
                }
            }
        }
        merge(this.state, state)
        this.forceUpdate();
    }
}

const ToyReactDOM = {
    render(component, dom) {
        const range = document.createRange()
        range.setStart(dom, 0)
        range.setEnd(dom, dom.childNodes.length)
        range.deleteContents()
        component[RENDER_DOM](range)
    }
}

export default ToyReactDOM;