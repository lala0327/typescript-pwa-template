import mitt from "mitt";

type Events = {
  setMode: string;
};
const emitter = mitt<Events>();

function setMode(mode: 'light' | 'dark' | 'auto') {
  console.log('mode:' + mode)
  if (mode === "auto") {
    // 自動 (看目前裝置是否為深色模式)
    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches)
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else document.documentElement.classList.remove("dark");
  } else if (mode === "dark") {
    document.documentElement.classList.add("dark");
  } else if (mode === "light") {
    document.documentElement.classList.remove("dark");
  }
}

emitter.on("setMode", setMode);

export default emitter;
