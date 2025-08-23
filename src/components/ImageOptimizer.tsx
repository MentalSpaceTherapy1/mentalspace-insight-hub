import React from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({
  src,
  alt,
  className = '',
  sizes = '100vw',
  priority = false,
  quality = 75
}) => {
  // Generate optimized image URLs for different sizes
  const generateSrcSet = (originalSrc: string) => {
    const sizes = [400, 800, 1200, 1600];
    return sizes
      .map(size => `${originalSrc}?w=${size}&q=${quality} ${size}w`)
      .join(', ');
  };

  return (
    <img
      src={`${src}?w=800&q=${quality}`}
      srcSet={generateSrcSet(src)}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'low'}
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  );
};

export default ImageOptimizer;