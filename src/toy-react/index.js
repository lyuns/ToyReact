import { ElementWrap, TextWrap } from '../toy-reactDOM'

const insertChildren = (el, children) => {
    for (let child of children) {
        if (typeof child === 'string' || typeof child === 'number') {
            child = new TextWrap(child)
        }
        if (!child) continue
        if (typeof child === 'object' && child instanceof Array) {
            insertChildren(el, child)
        } else {
            el.appendChild(child)
        }
    }
}

const ToyReact = {
    createElement(tag, attributes, ...children) {
        const el = typeof tag === "string" ? new ElementWrap(tag) : new tag;
        for (let key in attributes) {
            el.setAttribute(key, attributes[key])
        }
        insertChildren(el, children)
        return el;
    }
}

export default ToyReact;