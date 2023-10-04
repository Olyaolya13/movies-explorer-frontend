export function NotFound(pathname) {
  return !pathname.match(/^\/(movies|saved-movies|profile|signin|signup|)$/);
}

export const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
