export function toPascalCase(str: string): string {
  // Handle empty or non-string inputs
  if (!str || typeof str !== 'string') {
    return ''
  }

  // Replace non-alphanumeric characters with spaces and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, ' ').toLowerCase()

  // Split the string into words, capitalize the first letter of each, and join them
  return cleanedStr
    .split(' ')
    .map((word) => {
      if (word.length === 0) {
        return ''
      }
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}
