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
  const { style, ...restProps } = props;
  
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
      {...(fetchPriority && { fetchPriority })}
      {...restProps}
      style={{
        maxWidth: '100%',
        height: 'auto',
        ...style
      }}
    />
  );
};

export default ResponsiveImage;