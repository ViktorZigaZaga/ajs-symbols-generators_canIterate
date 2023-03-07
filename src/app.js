export default function canIterate(obj) {
  return Boolean(obj)
        && typeof obj[Symbol.iterator] === 'function';
}
