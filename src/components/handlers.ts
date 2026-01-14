import {http, HttpResponse} from "msw";

export function createUserMswHandler() {
  return http.get('/api/users', () => {
    return HttpResponse.json({
      id: 4,
      name: 'Emma Wilson',
      email: 'emma.wilson@example.com',
      role: 'UI/UX Designer',
      bio: 'Creative designer focused on user-centered design and creating beautiful interfaces.',
    });
  })
}
