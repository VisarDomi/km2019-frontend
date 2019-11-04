export function myError(error) {
  new Error(`MyCustom [RWV] ApiService ${error}`);
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
