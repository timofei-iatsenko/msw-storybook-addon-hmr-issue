import type { Preview } from '@storybook/react-vite'
import { initialize, mswLoader } from 'msw-storybook-addon'

// this is essential to trigger HMR to reload preview.ts file when edit a component file
import css from '../src/styles.css?inline';
import {http, HttpResponse} from "msw";



// Initialize MSW
initialize({}, [
  http.get('/api/users', () => {
    return HttpResponse.json({
      id: 3,
      name: 'Michael Chen 111',
      email: 'michael.chen@example.com',
      role: 'Senior Developer',
      bio: 'Full-stack developer specializing in modern web technologies and cloud architecture.',
    });
  }),
])

// simulate HMR reloaded this file and the initialize() called once again
initialize()

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
