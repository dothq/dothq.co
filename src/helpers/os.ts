export const getOS = () => {
    if (typeof navigator !== 'undefined') {
        const os = ['Android', 'iPhone', 'Windows', 'Linux', 'Mac OS'];
        const detectedOS = os.find(v => navigator.appVersion.indexOf(v) >= 0);
        if(detectedOS == "Mac OS") return "macOS"
        if(detectedOS == "iPhone") return "iOS"
        return detectedOS
    }
}