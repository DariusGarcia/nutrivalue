export default function capitalize(str: string): string {
  if (str.length === 0) {
    return str
  }

  const firstLetter = str[0].toUpperCase()
  const restOfString = str.slice(1)

  return firstLetter + restOfString
}
