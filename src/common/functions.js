export function myError(error) {
  new Error(`MyCustom [RWV] ApiService ${error}`);
}

export function setMeta(title, no_auth = false) {
  let meta = {
    title: `${title}`,
    transition: "overlay-right",
    metaTags: [
      {
        name: "description",
        content: `The ${title} page of Kenga Magjike.`
      },
      {
        property: "og:description",
        content: `The ${title} page of Kenga Magjike.`
      }
      // { transition: "overlay-right" }
    ],
    requiresAuth: true
  };
  if (no_auth) {
    meta.requiresAuth = false;
  }
  return meta;
}
export function setMetaArtist(title, no_auth = false) {
  let meta = {
    title: `${title}`,
    transition: "overlay-right",
    metaTags: [
      {
        name: "description",
        content: `The ${title} page of Kenga Magjike.`
      },
      {
        property: "og:description",
        content: `The ${title} page of Kenga Magjike.`
      }
      // { transition: "overlay-right" }
    ],
    requiresAuth: true
  };
  if (no_auth) {
    meta.requiresAuth = false;
  }
  return meta;
}

export function setMetaBlog(title, no_auth = false) {
  let meta = {
    title: `${title}`,
    transition: "overlay-right",
    metaTags: [
      {
        name: "description",
        content: `The ${title} page of Kenga Magjike.`
      },
      {
        property: "og:description",
        content: `The ${title} page of Kenga Magjike.`
      }
      // { transition: "overlay-right" }
    ],
    requiresAuth: true
  };
  if (no_auth) {
    meta.requiresAuth = false;
  }
  return meta;
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
