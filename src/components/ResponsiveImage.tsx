import { HTMLAttributes } from 'react';

interface ResponsiveImageProps extends Omit<HTMLAttributes<HTMLImageElement>, 'fetchpriority'> {
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
  const imgProps = {
    ...props,
    ...(fetchPriority && { fetchpriority: fetchPriority })
  } as any;

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
      {...imgProps}
      style={{
        maxWidth: '100%',
        height: 'auto',
        ...props.style
      }}
    />
  );
};

export default ResponsiveImage;