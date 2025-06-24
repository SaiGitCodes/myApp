import { AppendPipe } from './append.pipe';

fdescribe('AppendPipe', () => {
  test('create an instance', () => {
    const pipe = new AppendPipe();
    expect(pipe).toBeTruthy();
  });

  test('should call on transform', () => {
    const pipe = new AppendPipe();
    pipe.transform('xvhjs', 'jbjs');
    expect(pipe).toBeDefined();
  })
});
