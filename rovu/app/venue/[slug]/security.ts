const attempts = new Map<string, {count: number, time: number}>()

export function isRateLimited(ip: string, venue: string): boolean {
  const key = `${ip}-${venue}`
  const now = Date.now()
  const entry = attempts.get(key)
  if (!entry || now - entry.time > 86400000) {
    attempts.set(key, {count: 1, time: now})
    return false
  }
  if (entry.count >= 3) return true
  entry.count++
  return false
}

export function sanitiseText(text: string): string {
  return text
    .replace(/<[^>]*>/g, '')
    .replace(/[<>"'&]/g, '')
    .slice(0, 2000)
    .trim()
}
