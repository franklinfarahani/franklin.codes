export function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content
    .replace(/(```[\s\S]*?```)/g, '') // Remove code blocks
    .replace(/[#*`]/g, '') // Remove markdown symbols
    .trim()
    .split(/\s+/)
    .length;

  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min`;
}

export function getWordCount(content: string): number {
  return content
    .replace(/(```[\s\S]*?```)/g, '') // Remove code blocks
    .replace(/[#*`]/g, '') // Remove markdown symbols
    .trim()
    .split(/\s+/)
    .length;
}
