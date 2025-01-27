class Social extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<div class="flex gap">
        <a
            href="https://www.linkedin.com/in/ashley-j-zhang/"
            target="_blank"
            rel="noopener noreferrer"
            ><img src="public/icons/linkedin.svg" alt="LinkedIn"
        /></a>
        <a
            href="https://github.com/ashlxyzhang/"
            target="_blank"
            rel="noopener noreferrer"
            ><img src="public/icons/github.svg" alt="GitHub"
        /></a>
        <a
            href="mailto:ashleyoftexas@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            ><img src="public/icons/mail.svg" alt="Email"
        /></a>
        <a
            href="https://www.instagram.com/ashs_wrld/"
            target="_blank"
            rel="noopener noreferrer"
            ><img src="public/icons/insta.svg" alt="Instagram"
        /></a>
        </div>
    `;
  }
}

customElements.define("social-links", Social);
