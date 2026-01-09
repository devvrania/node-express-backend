import morgan from 'morgan';

/**
 * Custom token for request ID
 */
morgan.token('id', (req) => req.id || 'unknown');

/**
 * Custom format for development
 */
const devFormat = ':method :url :status :response-time ms - :res[content-length]';

/**
 * Custom format for production
 */
const prodFormat = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';

/**
 * Logger middleware based on environment
 */
export const logger = morgan(
  process.env.NODE_ENV === 'production' ? prodFormat : devFormat,
  {
    skip: (req, res) => {
      // Skip logging for health checks in production
      return process.env.NODE_ENV === 'production' && req.path === '/health';
    },
  }
);
