class Scripts extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const goat_counter = document.createElement('script');
      goat_counter.async = true;
      goat_counter.dataset['goatcounter'] = "https://lostletters.goatcounter.com/count";
      goat_counter.src = "//gc.zgo.at/count.js";
      document.head.appendChild(goat_counter);
    
      const tinkerbell = document.createElement('script');
      tinkerbell.src="tinkerbelleffect.js";
      document.head.appendChild(tinkerbell);
    }
  }
  
  customElements.define('scripts-component', Scripts);