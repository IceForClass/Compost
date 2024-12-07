export function showLoadingScreen() {
    document.getElementById("loading-screen").classList.remove("invisible");
}
export function hideLoadingScreen() {
    document.getElementById("loading-screen").classList.add("invisible");
}