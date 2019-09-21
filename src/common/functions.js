export function myError(error) {
  new Error(`MyCustom [RWV] ApiService ${error}`);
}

export function setMeta(title, no_auth = false) {
  let meta = {
    title: `${title}`,
    metaTags: [
      {
        name: "description",
        content: `The ${title} page of Orange Limo.`
      },
      {
        property: "og:description",
        content: `The ${title} page of Orange Limo.`
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
