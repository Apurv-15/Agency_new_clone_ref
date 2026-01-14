import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    fill?: boolean;
    priority?: boolean;
    unoptimized?: boolean;
}

const Image = ({ src, alt, className, fill, width, height, priority, unoptimized, ...props }: ImageProps) => {
    const style: React.CSSProperties = fill
        ? {
            position: 'absolute',
            height: '100%',
            width: '100%',
            inset: 0,
            color: 'transparent',
        }
        : {};

    return (
        <img
            src={typeof src === 'string' ? src : (src as any).src} // Handle imported images
            alt={alt || ''}
            className={className}
            width={width}
            height={height}
            style={{ ...style, ...props.style }}
            {...props}
        />
    );
};

export default Image;
