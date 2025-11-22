import { CanMatchFn } from '@angular/router';

const validHeaders = ['about', 'skills', 'project', 'contact'];

export const urlGuard: CanMatchFn = (route, segments) => {
  const header = segments[0]?.path ?? '';
  return validHeaders.includes(header);
};
