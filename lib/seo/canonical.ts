export function getCanonicalUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mentalspacetherapy.lovable.app';
  return `${baseUrl}${path}`;
}