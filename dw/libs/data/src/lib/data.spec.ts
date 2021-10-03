import { Todo } from './data';

describe('data', () => {
  it('data interface should work', () => {
    const todo: Todo = { title: 'test' };
    expect(todo.title).toEqual('test');
  });
});
