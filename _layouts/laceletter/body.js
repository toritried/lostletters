const bodyTemplate = document.createElement('template');
bodyTemplate.innerHTML = `
    <link href="https://fonts.googleapis.com/css?family=Spectral" rel="stylesheet">
    <link href="/style.css" rel="stylesheet" type="text/css" media="all">
    <style>
      @font-face {
        font-family: 'alagard';
        src: url(https://lostletters.neocities.org/fonts/alagard.woff);}
        /*font credit: https://www.dafont.com/alagard.font*/
    </style>
    <div class = "banner"></div>
    <br><br><br><br><br><br>
    <div align="center">
      <div class = "box17" >
        <div class = "box-top" >
          <div class = "u01" >
          </div>
        </div> 
        <div class = "box-center" >
          <div class = "box-inner" >
            <header>
              <h1>Welcome to Lost Letters</h1>
              <br>
              <nav>
                <a href="/"><img src="graphics/navi/home.png"/></a>
                <a href="/updates.html"><img src="graphics/navi/updates.png"/></a>
                <a href="/about.html"><img src="graphics/navi/about.png"/></a>  
                <a href="/tea.html"><img src="graphics/navi/tea.png"/></a>  
                <a href="/links.html"><img src="graphics/navi/links.png"/></a>  
                <a href="http://users.smartgb.com/g/g.php?a=s&i=g19-00587-ce" target="_blank"><img src="graphics/navi/guestbook.png"/></a>
              </nav>
              <br>
            </header>
            <main>
              <div align="left">
                <slot name="content"></slot>
              </div>
            </main>
          </div>
        </div>
        <div class = "box-bottom" >
          <div class = "s01" >
          </div>
        </div>
      </div>
    </div>
`;


customElements.define(
  'body-component',
  class Body extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(bodyTemplate.content);
    }
  }
);