import { get } from "svelte/store";
import { default as Overlay, getTranslation } from "./internal/Overlay.svelte";
import { translateElement } from "./internal/utils";

import { stores } from "./FluentProvider.svelte";

if (!process.browser) {
  if (Overlay.$$render) {
    const { JSDOM } = require("jsdom");

    const $$render = Overlay.$$render;
    Overlay.$$render = (result, props, bindings, slots) => {
      const html = $$render(result, props, bindings, slots);
      const { getBundle } = stores();
      const { id, attributes } = props;
      const $getBundle = get(getBundle);
      const bundle = id ? $getBundle(id) : null;
      const msg = bundle ? bundle.getMessage(id) : null;
      const translation = getTranslation(bundle, msg, attributes);
      const { document } = new JSDOM(`<!DOCTYPE html>`).window;
      const body = document.createElement("body");
      body.innerHTML = html;
      const rootNode = body.firstChild;
      translateElement(rootNode, translation);
      return body.innerHTML;
    };
  }
}

export default Overlay;
