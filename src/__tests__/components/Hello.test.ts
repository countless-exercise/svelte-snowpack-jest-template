// https://testing-library.com/docs/svelte-testing-library/intro
import { render } from '@testing-library/svelte';
import Hello from '@/components/Hello.svelte';

describe('<Hello>', () => {
  it('is Hello component', () => {
    const { getByText } = render(Hello, {
      props: {
        count: 2
      }
    });
    expect(getByText(/4/).textContent).toEqual('Hello 4!');
  });
});
