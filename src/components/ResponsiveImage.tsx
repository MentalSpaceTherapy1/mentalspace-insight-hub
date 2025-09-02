import { HTMLAttributes } from 'react';

interface ResponsiveImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
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
  ...props 
}: ResponsiveImageProps) => {
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