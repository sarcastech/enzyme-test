/* global jest */
export default {
  get: jest.fn(() => Promise.resolve({ data: {} }))
}
