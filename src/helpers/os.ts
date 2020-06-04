export const getOS = () => {
    if (typeof navigator !== 'undefined') {
        const os = ['Android', 'iPhone', 'Windows', 'Mac OS', 'Linux'];
        const detectedOS = os.find(v => navigator.appVersion.indexOf(v) >= 0);
        if(detectedOS == "Mac OS") return "macOS"
        if(detectedOS == "iPhone") return "iOS"
        return detectedOS
    }
}
