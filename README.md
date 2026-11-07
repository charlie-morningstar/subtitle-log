# 8080_folio — 조은진 Security Research Portfolio

버건디 벨벳 + 양피지 두루마리 컨셉의 보안 연구 포트폴리오.
[Astro](https://astro.build) 정적 사이트 생성기로 만들어졌고, 글은 마크다운 파일로 자유롭게 추가합니다.

## 빠른 시작

```bash
npm install      # 최초 1회 (의존성 설치)
npm run dev      # 로컬 미리보기 → http://localhost:4321/8080_folio
npm run build    # 배포용 빌드 (dist/ 생성)
npm run preview  # 빌드 결과 미리보기
```

## 글 추가하는 법 (코딩 아님)

새 글 = 마크다운 파일 하나 추가. 사이트가 자동으로 목록·페이지를 만들어 줍니다.

- **직접 수행한 연구** → `src/content/research/` 에 `.md` 추가 → 홈의 "두루마리"로 표시
- **분석 글(블로그)** → `src/content/analysis/` 에 `.md` 추가 → 홈의 "Analysis" 목록에 표시

각 파일 맨 위 형식:

```markdown
---
title: "글 제목"
summary: "한 줄 요약"
date: 2026-11-08
tags: ["Kernel", "HEVD"]
draft: false      # true 로 두면 사이트에 안 나옴 (초안)
---

여기부터 본문 (마크다운)
```

## 비공개 글

- 사이트에서 숨기기만: 글 맨 위 `draft: true`
- 아예 올리지 않기(진짜 비공개): `drafts/` 폴더에 두면 git에 커밋되지 않습니다 (`.gitignore` 처리됨).
  공개 전 PoC, 민감한 분석은 여기에 두세요.

## 디자인 수정

- 색/폰트: `src/styles/global.css` 맨 위 `:root` 변수
- CS 마인드맵 내용: `src/data/mindmap.ts`
- 배포 주소 설정: `astro.config.mjs` (`site`, `base`)

## 브랜치 운영

- `main` — 배포되는 공개 버전 (push 하면 자동으로 GitHub Pages 배포)
- `dev` — 개발/작성용. 글·디자인 작업은 여기서 하고, 완성되면 `main` 으로 병합

## 배포

`main` 브랜치에 push 하면 `.github/workflows/deploy.yml` 이 자동으로 빌드 후
GitHub Pages 에 배포합니다. (GitHub 저장소 Settings → Pages → Source 를
"GitHub Actions" 로 한 번 설정해 두어야 합니다.)
