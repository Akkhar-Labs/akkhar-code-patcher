# Changelog

All notable changes to the **Akkhar-SR (Surgical Search & Replace)** extension
will be documented in this file. This project adheres to
[Semantic Versioning](https://semver.org/) and follows the
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format.

## [0.0.4] - 2026-05-23

### Added

- **Structural Matching Engine**: Implemented an indentation-neutral search
  algorithm. The tool now matches the "meat" of the code, ignoring
  leading/trailing whitespace to resist AI indentation hallucinations.
- **Intelligent Re-indentation**: Replacement blocks now automatically inherit
  the document's base indentation from the source file.

### Fixed

- **Webview Persistence**: Added `retainContextWhenHidden` to ensure the patch
  buffer is not cleared when switching sidebars.
- **Race Condition**: The execution engine now automatically closes active
  Preview Diff tabs before committing to prevent URI collision.

## [0.0.3] - 2026-05-23

### Changed

- **Architectural Refactor**: Decoupled the extension into a service-oriented
  structure (src/core, src/providers, src/utils) following Meta/Microsoft OSS
  standards.
- **UI Externalization**: Moved Webview HTML, CSS, and JS into dedicated
  resource files for better maintainability and syntax highlighting.

### Added

- **Singleton Logger**: Centralized diagnostic logging via the `AkkharLogger`
  utility.
- **Native Syntax Highlighting**: Implemented language-aware URI injection to
  enable full syntax coloring in the Bulk Diff Preview.

## [0.0.2] - 2026-05-22

### Added

- **Bulk Preview Diff**: Integrated VS Code's native side-by-side diff engine to
  review multiple patches before commitment.
- **Reverse-Topological Execution**: Implemented bottom-to-top patch application
  to maintain line-number integrity.
- **Atomic Transactions**: Integrated `vscode.workspace.applyEdit` to ensure all
  blocks are applied as a single undo-able event.
- **DSL Parsing**: Built a line-by-line scanner to extract surgical blocks from
  the Akkhar Orchestration Protocol V2 stream.

## [0.0.1] - 2026-05-22

### Added

- Initial project scaffolding with TypeScript and Webpack.
- Activity Bar registration and Sidebar Webview Provider.
- Core manifest configuration for the Akkhar-SR orchestration workflow.

---

_© 2026 Akkhar-Labs. Orchestrating precision._
