import { FilterPipe } from './filter.pipe';

fdescribe('FilterPipe', () => {
  test('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  test('should call on transform', () => {
    const pipe = new FilterPipe();
    pipe.transform(['G', 'F'], 'jbjs', 'F');
    expect(pipe).toBeDefined();
  })

  test('should call on transform else', () => {
    const pipe = new FilterPipe();
    pipe.transform(null, "jbjs", '');
    expect(pipe).toBeDefined();
  })
});
