function fail(message) {
    throw new Error(message);
}
export function transform(s) {
    if (!s.trim()) fail('Enter some source text.');
    const u = new URL(s.trim());
    return [...u.searchParams].map(([k, v]) => JSON.stringify(k) + ' = ' + JSON.stringify(v)).join('\n') || 'No query parameters.'
}
