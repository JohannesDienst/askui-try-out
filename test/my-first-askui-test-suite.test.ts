import { aui } from './helper/jest.setup';

describe('jest with askui', () => {
  it('should click on text', async () => {
    // Run this to see what askui annotates
    await aui.annotateInteractively();

    await aui.moveMouse(0, 0).exec();
  });
});
