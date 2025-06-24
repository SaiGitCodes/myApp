import { HighlightPipe } from './highlight.pipe';

fdescribe('HighlightPipe', () => {
  test('create an instance', () => {
    const pipe = new HighlightPipe();
    expect(pipe).toBeTruthy();
  });

  test('should call for transform', () => {
    const pipe = new HighlightPipe();
    pipe.transform('bjv', 'bjv');
    expect(pipe).toBeTruthy();
  });

  test('should call for transform', () => {
    const pipe = new HighlightPipe();
    pipe.transform('bjv', 'abhkjbk');
    expect(pipe).toBeTruthy();
  });

  test('should call for transform with no args', () => {
    const pipe = new HighlightPipe();
    pipe.transform('bjv', null);
    expect(pipe).toBeTruthy();
  });

  test('should call for transform with no args', () => {
    const pipe = new HighlightPipe();
    pipe.transform('bjv', null);
    expect(pipe).toBeTruthy();
  });


});
