# MSW + Storybook Demo Project

This project demonstrates the integration of Storybook with MSW (Mock Service Worker) for mocking API calls in component stories.

## Features

- **Storybook 10.1.11** - Latest version with Vite builder
- **MSW Integration** - Mock API responses using msw-storybook-addon
- **3 React Components** - All fetching from the same endpoint with different mocked responses

## Components

### 1. UserProfile
A detailed profile card showing user information with a bio section.

**Stories:**
- `Default` - John Doe (Software Engineer)
- `AdminUser` - Sarah Johnson (Administrator)
- `Error` - Error state

### 2. UserCard
A compact card-style component with circular avatar.

**Stories:**
- `Default` - Michael Chen (Senior Developer)
- `Designer` - Emma Wilson (UI/UX Designer)
- `Error` - Error state

### 3. UserList
A table-style layout displaying user information.

**Stories:**
- `Default` - David Martinez (Product Manager)
- `TechLead` - Lisa Anderson (Tech Lead)
- `Error` - Error state

## Key Implementation Details

All three components:
- Fetch data from the **same endpoint**: `/api/users`
- Receive **different mocked responses** based on the story
- Handle loading and error states
- Use MSW to intercept HTTP requests in Storybook

## Getting Started

### Install dependencies
```bash
npm install
```

### Run Storybook
```bash
npm run storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006)

## Project Structure

```
src/
├── components/
│   ├── UserProfile.tsx          # Profile card component
│   ├── UserProfile.stories.tsx  # Stories with MSW mocks
│   ├── UserCard.tsx             # Compact card component
│   ├── UserCard.stories.tsx     # Stories with MSW mocks
│   ├── UserList.tsx             # Table layout component
│   └── UserList.stories.tsx     # Stories with MSW mocks
.storybook/
├── main.ts                      # Storybook configuration with MSW addon
└── preview.ts                   # MSW initialization
public/
└── mockServiceWorker.js         # MSW service worker file
```

## MSW Configuration

MSW is configured in `.storybook/preview.ts`:
```typescript
import { initialize, mswLoader } from 'msw-storybook-addon'

initialize()
```

Each story defines its own mock handlers:
```typescript
export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/users', () => {
          return HttpResponse.json({ /* mock data */ });
        }),
      ],
    },
  },
};
```

## Technologies Used

- React 18
- TypeScript
- Storybook 10.1.11
- MSW (Mock Service Worker)
- msw-storybook-addon
- Vite

## License

MIT
