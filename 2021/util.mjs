import path from 'path';
import { fileURLToPath } from 'url';

// eslint-disable-next-line import/prefer-default-export
export const dirname = (url) => path.dirname(fileURLToPath(url));
