import { useSearch } from './SearchContext';

test('AuthContext is object', () => {
    expect(useSearch).toBeInstanceOf(Function);
});
