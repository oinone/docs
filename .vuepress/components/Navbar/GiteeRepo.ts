import type {VNode} from "vue";
import {defineComponent, h} from "vue";
const svgString = `
  <path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z" p-id="21446"/>
`;

export default defineComponent({
  name: "RepoLink",

  setup() {
    return (): VNode | null =>
      h(
        "div",
        {class: "vp-nav-item vp-action"},
        h(
          "a",
          {
            class: "vp-action-link",
            href: "https://gitee.com/oinone",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Oinone",
          },
          h("svg", {
            innerHTML: svgString,
            viewBox: "0 0 1024 1024",
            width: "200",
            height: "200",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
              width: "1.25rem",
              height: "1.25rem",
              verticalAlign: "middle",
            },
          })
        )
      );
  },
});
