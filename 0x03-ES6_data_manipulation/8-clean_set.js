export default function cleanSet(set, startString) {
  const res = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      res.push(s.slice(startString.length));
    }
  });
  return res.join('-');
}
