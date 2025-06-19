export function displayLoading() {
  const loading = document.getElementById("loading");
  loading.className = "display";
}

export function hideLoading() {
  const loading = document.getElementById("loading");
  loading.className = "hide";
}
