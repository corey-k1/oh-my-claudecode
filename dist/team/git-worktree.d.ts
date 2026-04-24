export type TeamWorktreeMode = 'disabled' | 'detached' | 'branch';
export interface WorktreeInfo {
    path: string;
    branch: string;
    workerName: string;
    teamName: string;
    createdAt: string;
    repoRoot?: string;
    detached?: boolean;
    created?: boolean;
    reused?: boolean;
}
export interface EnsureWorkerWorktreeOptions {
    mode?: TeamWorktreeMode;
    baseRef?: string;
    requireCleanLeader?: boolean;
}
export interface EnsureWorkerWorktreeResult extends WorktreeInfo {
    mode: TeamWorktreeMode;
    repoRoot: string;
    detached: boolean;
    created: boolean;
    reused: boolean;
}
export interface CleanupTeamWorktreesResult {
    removed: string[];
    preserved: Array<{
        workerName: string;
        path: string;
        reason: string;
    }>;
}
/** Get canonical native team worktree path for a worker. */
export declare function getWorktreePath(repoRoot: string, teamName: string, workerName: string): string;
/** Get branch name for a worker. */
export declare function getBranchName(teamName: string, workerName: string): string;
export declare function normalizeTeamWorktreeMode(value: unknown): TeamWorktreeMode;
/**
 * Ensure a worker worktree exists according to the selected opt-in mode.
 * Disabled mode is a no-op. Existing clean compatible worktrees are reused;
 * dirty or mismatched existing worktrees throw without deleting files.
 */
export declare function ensureWorkerWorktree(teamName: string, workerName: string, repoRoot: string, options?: EnsureWorkerWorktreeOptions): EnsureWorkerWorktreeResult | null;
/** Legacy creation helper: create or reuse a branch-mode worker worktree. */
export declare function createWorkerWorktree(teamName: string, workerName: string, repoRoot: string, baseBranch?: string): WorktreeInfo;
/** Remove a worker's worktree and branch, preserving dirty worktrees. */
export declare function removeWorkerWorktree(teamName: string, workerName: string, repoRoot: string): void;
/** List all worktrees for a team. */
export declare function listTeamWorktrees(teamName: string, repoRoot: string): WorktreeInfo[];
/** Remove all clean worktrees for a team, preserving dirty worktrees. */
export declare function cleanupTeamWorktrees(teamName: string, repoRoot: string): CleanupTeamWorktreesResult;
//# sourceMappingURL=git-worktree.d.ts.map