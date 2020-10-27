interface Options {
    protocol?: 'http' | 'https';
    baseUrl?: string;
    size?: string;
    ext?: 'svg' | 'png';
    className?: string;
}

export const generateEmojiConfig = ({ className }): Options => {
    return {
        protocol: "https",
        baseUrl: "//cdn.jsdelivr.net/npm/twemoji@11.0.1/2/svg/",
        ext: 'svg',
        size: '',
        className
    }
}