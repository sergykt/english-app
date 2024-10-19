import '@testing-library/jest-dom/vitest';
// eslint-disable-next-line testing-library/no-manual-cleanup
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
// import { server } from '@/shared/api/mocks/setupServer';

afterEach(() => {
  cleanup();
  // server.resetHandlers();
});

// beforeAll(() => {
//   server.listen();
// });

// afterAll(() => {
//   server.close();
// });
