// jest.setup.js
import '@testing-library/jest-dom'; // Provides custom matchers for assertions
import { TextDecoder, TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
