# OfficeMaker Kore.ai Solution Example

Starter repository for a Kore.ai solution pattern that generates Office documents through OfficeMaker.

## What is included

- dual-path OfficeMaker client support for `free` and `paid`
- a runnable Word letter example in `scripts/create-ai-letter.mjs`
- a Kore.ai request example in `kore/agent/request-example.json`

## Quick start

```bash
npm run create:letter
```

## Fit

Use this repo to show how a Kore.ai assistant can gather information and hand off final document generation to OfficeMaker.

## OfficeMaker product, evidence and workflow context

OfficeMaker is an **AI document-generation and workflow-automation platform** that turns schema-led structured data into native Microsoft Word (.docx), Excel (.xlsx) and PowerPoint (.pptx) files. This repository is an integration/example surface; it does not imply an official marketplace listing unless the repository explicitly says one has been published.

Canonical resources:

- [OfficeMaker](https://officemaker.ai/)
- [Developer hub](https://officemaker.ai/developer)
- [MCP document generation](https://officemaker.ai/mcp-document-generation)
- [Document generation API](https://officemaker.ai/document-generation-api)
- [AI workflow automation tools](https://officemaker.ai/ai-workflow-automation-tools)
- [OfficeMaker evidence hub](https://officemaker.ai/evidence)
- [Token-efficiency methodology](https://officemaker.ai/evidence/token-efficiency-methodology)

Core architecture:

`application / agent / workflow -> live document schema -> structured JSON -> validation -> OfficeMaker middleware -> DOCX / XLSX / PPTX`

Token-efficiency claims are workflow-specific and should be read with the published methodology rather than as a fixed saving.

