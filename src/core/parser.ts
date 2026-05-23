import { PatchBlock } from '../types/patch';

/**
 * Parses the raw input stream into discrete PatchBlock objects.
 * Uses a Line-by-Line scanner for high-fidelity extraction and
 * robustness against whitespace/line-ending variations.
 */
export function parseBlocks(input: string): PatchBlock[] {
  const blocks: PatchBlock[] = [];
  const lines = input.split(/\r?\n/);

  let currentState: 'IDLE' | 'SEARCH' | 'REPLACE' = 'IDLE';
  let currentIndex = '';
  let searchBuffer: string[] = [];
  let replaceBuffer: string[] = [];

  for (const line of lines) {
    // Flexible marker detection (ignores trailing whitespace on the marker line)
    const searchMatch = line.match(/^<<<<<<< SEARCH \[([\w\d.-]+)\]/);
    const replaceMatch = line.match(/^>>>>>>> REPLACE \[([\w\d.-]+)\]/);

    if (searchMatch) {
      currentState = 'SEARCH';
      currentIndex = searchMatch[1];
      searchBuffer = [];
      continue;
    }

    if (line.trim() === '=======') {
      currentState = 'REPLACE';
      replaceBuffer = [];
      continue;
    }

    if (replaceMatch) {
      if (replaceMatch[1] === currentIndex) {
        blocks.push({
          index: currentIndex,
          search: searchBuffer.join('\n'),
          replace: replaceBuffer.join('\n'),
        });
      }
      currentState = 'IDLE';
      continue;
    }

    if (currentState === 'SEARCH') {
      searchBuffer.push(line);
    } else if (currentState === 'REPLACE') {
      replaceBuffer.push(line);
    }
  }

  return blocks;
}
