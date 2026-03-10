const RAW_BASE_PATH = '/';

export const normalizeBasePath = (basePath = '/') => {
  if (!basePath || basePath === '/') return '/';
  return `/${String(basePath).replace(/^\/+|\/+$/g, '')}`;
};

export const BASE_PATH = normalizeBasePath(RAW_BASE_PATH);

export const withBasePath = (path = '', basePath = BASE_PATH) => {
  const normalizedBase = normalizeBasePath(basePath);
  const normalizedPath = String(path).replace(/^\/+/, '');

  if (!normalizedPath) {
    return normalizedBase === '/' ? '/' : `${normalizedBase}/`;
  }

  return normalizedBase === '/' ? `/${normalizedPath}` : `${normalizedBase}/${normalizedPath}`;
};
