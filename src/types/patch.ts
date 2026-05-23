export interface PatchBlock {
  index: string;
  search: string;
  replace: string;
}

export interface MatchResult {
  startLine: number;
  endLine: number;
  replace: string;
  index: string;
}