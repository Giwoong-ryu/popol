// Utility to get correct asset path for both dev and production
export const getAssetPath = (path: string): string => {
  const basePath = import.meta.env.BASE_URL || '/';
  // Remove leading slash from path if exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}${cleanPath}`;
};
