
  
  const stockSW = "/uv/sw.js";

  const swAllowedHostnames = ["localhost", "127.0.0.1"];
  const wispserver = `wss://nebulaproxy.io/wisp/`;
  async function registerSW() {
  if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !swAllowedHostnames.includes(location.hostname)
    )
      throw new Error("Service workers cannot be registered without https.");

    throw new Error("Your browser doesn't support service workers.");
  }

  // Register the EpoxyClient transport to be used for network requests
  let wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";
  BareMux.SetTransport("EpxMod.EpoxyClient", { wisp: wispserver });

    await navigator.serviceWorker.register("/sw.js", {
      scope: "/service/",
    });
    await navigator.serviceWorker.register("/aero.js", {
      scope: "/service/",
      module: true,
      updateViaCache: "none"
    });
//    const CurlMod = window.CurlMod
  //  console.log("Dynamic Service Worker registered.");
    //BareMux.SetTransport("EpxMod.EpoxyClient", { wisp: wispserver });

/*

    
    if(localStorage.getItem("transport") == "bare") {
      BareMux.SetTransport("BareMod.BareClient", "https://server.flow-works.me/bare/" );
    } else if(localStorage.getItem("transport") == "libcurl") {
      BareMux.registerRemoteListener(navigator.serviceWorker.controller);
      BareMux.SetTransport("CurlMod.LibcurlClient", { wisp: wispserver, wasm: "https://cdn.jsdelivr.net/npm/libcurl.js@v0.6.7/libcurl.wasm" });
    } else if(localStorage.getItem("transport") == null || localStorage.getItem("transport") == "epoxy") {
      BareMux.SetTransport("EpxMod.EpoxyClient", { wisp: wispserver });
    }
    */
  }
  registerSW();



