import { isBrowser } from "./login";

export const getOS = () => {
    if(!isBrowser()) return;

    var os = "";

    const ua = window.navigator.userAgent;
    
    const isLinuxBased = (ua.includes("Android") || ua.includes("Tizen"));
    
    os = ua.includes("Android") ? "Android" : os;
    os = ua.includes("CrOS") ? "chromeOS" : os;
    os = ua.includes("Tizen") ? "Tizen" : os;
    os = (ua.includes("BlackBerry") || ua.includes("PlayBook") || ua.includes("BB10")) ? "BlackBerry" : os;
    os = ua.includes("Nintendo Switch") ? "Switch" : os;
    os = ua.includes("Googlebot") ? "Googlebot" : os;
    os = (/iPad|iPhone|iPod/.test(ua) && !window.MSStream || false) ? "iOS" : os;
    os = (!/iPad|iPhone|iPod/.test(ua) && window.MSStream || false) ? "Windows Phone" : os;
    os = ua.includes("Windows") ? "Windows" : os;
    os = ua.includes("Xbox") ? "Xbox" : os;
    os = ua.includes("Macintosh") ? "macOS" : os;
    os = (ua.includes("Linux") && !isLinuxBased && !ua.includes("Macintosh")) ? "Linux" : os;
    
    if(os == "") os = "🤷‍♀️ idk tbh"

    return { os, isMobile: os == "Android" || os == "iOS" };
}
