import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { UserCard } from './UserCard';
import {createUserMswHandler} from "./handlers.ts";

const meta = {
  title: 'Components/UserCard',
  component: UserCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UserCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/users', () => {
          return HttpResponse.json({
            id: 3,
            name: 'Michael Chen',
            email: 'michael.chen@example.com',
            role: 'Senior Developer',
            bio: 'Full-stack developer specializing in modern web technologies and cloud architecture.',
          });
        }),
      ],
    },
  },
};

export const Designer: Story = {
  parameters: {
    msw: {
      handlers: [
        createUserMswHandler()
      ],
    },
  },
};

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('/api/users', () => {
          return HttpResponse.json(
            { message: 'Network Error' },
            { status: 503 }
          );
        }),
      ],
    },
  },
};
