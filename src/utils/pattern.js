export function NotFound(pathname) {
  return !pathname.match(/^\/(movies|saved-movies|profile|signin|signup|)$/);
}
