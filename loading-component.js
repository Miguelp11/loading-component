import { LitElement, html, css } from 'lit-element';
import { POSICION, TIPOS_DISPONIBLE } from './constants';

export class LoadingComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
      }
      p {
        margin: 5px 0;
      }
      .contenedor {
        display: flex;
        height: 100vh;
      }
      .contenedor-load {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
      }
      .squareBottom {
        display: inline-flex;
        flex-direction: column-reverse;
        align-items: center;
        margin-bottom: 6px;
      }
      .circulo {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 4px solid transparent;
        border-top: 4px solid #213E7F;
        border-right: 4px solid #213E7F;
        border-bottom: 4px solid #213E7F;
        animation: carga 1.5s linear infinite;
      }
      .center {
        justify-content: center;
        align-items: center;
      }
      .top {
        justify-content: center;
      }
      .bottom {
        justify-content: center;
        align-items: flex-end;
      }
      .right {
        justify-content: right;
        align-items: center;
      }
      .left {
        justify-content: left;
        align-items: center;
      }
      .horizontal {
        background-color: gray;
        width: 100%;
        display: flex;
        height: 35px;
        align-items: center;
      }
      @keyframes carga{
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `;
  }

  static get properties() {
    return {
      position: { type: String },
      label: { type: String },
      visible: { type: Boolean },
      type: { type: String }
    };
  }

  constructor() {
    super();
    this.position = POSICION.CENTER;
    this.label = 'cargando...';
    this.visible = true;
    this.type = TIPOS_DISPONIBLE.SQUARE;
  }

  render() {
    return this.visible ? this._getMainTpl : html``;
  }

  get _getMainTpl() {
    return this.type === TIPOS_DISPONIBLE.SQUARE ? this._getSquareTpl : this._gethorizontalTpl;
  }

  get _gethorizontalTpl() {
    return html`
      <div class="contenedor ${this.position}">
        <div class="horizontal ${this.position}">
        <p>${this.label}</p>
        </div>  
      </div>
    `;
  }

  get _getSquareTpl() {
    return this.position === POSICION.BOTTOM ? this._getSquareTplBottom : this._getSquareMainTpl;
  }

  get _getSquareMainTpl() {
    return html`
      <div class="contenedor ${this.position}">
        <div class="contenedor-load">
        <div class="circulo"></div>
        <p>${this.label}</p>
        </div>  
      </div>
    `;
  }

  get _getSquareTplBottom() {
    return html`
      <div class="contenedor ${this.position}">
        <div class="squareBottom">
        <div class="circulo"></div>
        <p>${this.label}</p>
        </div>  
      </div>
    `;
  }
}

window.customElements.define('loading-component', LoadingComponent);