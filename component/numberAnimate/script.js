let template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="component/numberAnimate/style.css">
<div>
<div class="card">
    <img src="/asset/img/icon/icons8-population-64.png" width="100px" alt="">
    <h2>1,500,000</h2>
    <p>جمعیت ایل</p>
  </div>
  </div>
`
class num extends HTMLElement {
    constructor() {
        super()

        this.toggleInfo = false

        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

    connectedCallback() {
        this.shadowRoot.querySelector('h2').innerHTML = this.getAttribute('num')

        this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('title')

        this.shadowRoot.querySelector('img').setAttribute('src', this.getAttribute('img'))
    }

    static observedAttributes() {
        return ["img", "title" , "num"]
    }
}

export { num }
