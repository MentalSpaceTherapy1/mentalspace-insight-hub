import { HTMLAttributes } from 'react';

interface ResponsiveImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
}

const ResponsiveImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  sizes = '(max-width: 768px) 320px, 384px',
  loading = 'lazy',
  priority = false,
  fetchPriority = 'auto',
  ...props 
}: ResponsiveImageProps) => {
  // Generate WebP version of the image path
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.includes('.jpg') || originalSrc.includes('.jpeg')) {
      return originalSrc.replace(/\.(jpg|jpeg)$/i, '.webp');
    }
    if (originalSrc.includes('.png')) {
      return originalSrc.replace(/\.png$/i, '.webp');
    }
    return originalSrc;
  };

  const webpSrc = getWebPSrc(src);
  const shouldUseWebP = webpSrc !== src;

  if (shouldUseWebP) {
    return (
      <picture>
        <source
          srcSet={webpSrc}
          sizes={sizes}
          type="image/webp"
        />
        <img
          src={src}
          alt={alt}
          className={className}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? 'eager' : loading}
          decoding="async"
          fetchPriority={fetchPriority}
          {...props}
          style={{
            maxWidth: '100%',
            height: 'auto',
            ...props.style
          }}
        />
      </picture>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      sizes={sizes}
      loading={priority ? 'eager' : loading}
      decoding="async"
      fetchPriority={fetchPriority}
      {...props}
      style={{
        maxWidth: '100%',
        height: 'auto',
        ...props.style
      }}
    />
  );
};

export default ResponsiveImage;