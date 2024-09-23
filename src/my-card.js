import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .wrapper {
        display: flex;
      }
      .card  {
        width: 250px;
        margin: 8px;
        background-color: #203731;
        border-style: solid;
        border-width: 4px;
        border-radius: 16px;
        border-color: #FFB612;
        padding: 16px;
        margin-bottom: 8px;
        font-family: stencil;
        text-align: center;
        color: floralwhite;
      }
      .logo {
        width: 250px;
        border-radius: 8px;
        border-style: solid;
        border-color: #FFB612;
        border-width: 2px;
      }
      button {
        font-family: stencil;
        font-size: 12pt;
        color: #203731;
        height: 30px;
        margin: 8px;
        border-style: ridge;
        border-color: #203731;
        background-color: #FFB612;
        border-radius: 8px;
        cursor: pointer;
      }
      button:hover {
        background: white;
        color: #203731;
      }
      p {
        font-family: stencil;
      }
    `;
  }

  render() {
    return html`<div>${this.title}</div>`;
  }

  static get properties() {
    return {
      title: { type: String }, 
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);