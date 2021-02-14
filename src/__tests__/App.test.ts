// https://testing-library.com/docs/svelte-testing-library/intro
import { render } from '@testing-library/svelte';
import App from '~/App.svelte';

test("<App>", () => {
  const results = render(App, { props: { name: "Svelte" } });

  expect(() => results.getByText("Hello Svelte!")).not.toThrow();
});