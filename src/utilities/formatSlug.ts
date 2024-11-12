'use client';
import type { FieldHook } from 'payload/types'

const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase()

const formatSlug =
  (fallback: string): FieldHook =>
  ({ data, operation, originalDoc, value }) => {
    if (typeof value === 'string') {
      return format(value)
    }

    // actually always 'update', never reaches.
    if (operation === 'update') {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback]

      if (fallbackData && typeof fallbackData === 'string') {
        return format(fallbackData)
      }
    }

    return value
  }

export default formatSlug