This repo reproducing the issue caused by HMR updating a `.storybook/preview.ts` file 
and calling `initialize()` method when msw is already initialized. 

1. Run `npm run storybook`
2. Open `http://localhost:6006/?path=/story/components-usercard--error&onboarding=false`

The expected result is to see an error.
But actual result would be that handler from first `initialize` call would be used and user card normally rendered.