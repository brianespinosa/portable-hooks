export function setQueryParamIndex({ index }) {
  history.pushState(null, null, `?index=${index}`);
}

export function getQueryParamIndex() {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    return Number(urlParams.get('index')) || 0;
  } else {
    return 0;
  }
}
