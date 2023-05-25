const parseUrl = (url: string): string => {
  return url.startsWith('http')
    ? `https://${url}`
    : url
}

export default parseUrl
