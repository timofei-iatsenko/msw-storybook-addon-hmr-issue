import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { UserCard } from './UserCard';

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
        http.get('/api/users', () => {
          return HttpResponse.json({
            id: 4,
            name: 'Emma Wilson',
            email: 'emma.wilson@example.com',
            role: 'UI/UX Designer',
            bio: 'Creative designer focused on user-centered design and creating beautiful interfaces.',
          });
        })
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
