export const getOS = () => {
    if (typeof navigator !== 'undefined') {
        const os = ['Windows', 'Linux', 'Mac OS'];
        const detectedOS = os.find(v => navigator.appVersion.indexOf(v) >= 0);
        if(detectedOS == "Mac OS") return "macOS"
        return detectedOS
    }
}