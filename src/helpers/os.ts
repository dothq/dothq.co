export const getOS = () => {
    if(navigator) {
        const os = ['Windows', 'Linux', 'macOS'];
        return os.find(v => navigator.appVersion.indexOf(v) >= 0);
    }
}