class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <center>
          <span id="h_3371952"></span>
          since 2022.10.29
          <br>
          <span id="o_5680675"></span>
        </center>
      `;
      var fhsh = document.createElement('script');
      var fhs_id_h = "3371952";
      fhsh.src = "//freehostedscripts.net/ocount.php?site="+fhs_id_h+"&name=stamps&a=1";
      document.head.appendChild(fhsh);
    
      var fhs = document.createElement('script');
      var fhs_id = "5680675";
      var ref = (''+document.referrer+'');
      var pn =  window.location;
      var w_h = window.screen.width + " x " + window.screen.height;
      fhs.src = "//freehostedscripts.net/ocounter.php?site="+fhs_id+"&e1=letter arriving&e2=letters arriving&r="+ref+"&wh="+w_h+"&a=1&pn="+pn+"";
      document.head.appendChild(fhs);
    }
  }
  
  customElements.define('footer-component', Footer);
  