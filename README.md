# Subtitle Log

Astro로 만든 보안 연구 기록용 정적 사이트. 마크다운 파일을 추가하면 목록과 글 페이지가 자동으로 생성된다.

## 실행

```bash
npm install      # 최초 1회
npm run dev      # 로컬 미리보기 (localhost:4321/subtitle-log)
npm run build    # 배포용 빌드 (dist/)
npm run preview  # 빌드 결과 확인
```

## 글 추가

- 연구 기록: `src/content/research/` 에 `.md` 추가
- 분석 글: `src/content/analysis/` 에 `.md` 추가

파일 맨 위 형식:

```markdown
---
title: "제목"
date: 2026-11-16
category: "Kernel"   # Kernel | CVE | Reversing | Tooling | Notes
featured: false      # true 면 홈 Featured Posts 에 노출 (최대 3개)
draft: false         # true 면 사이트에 안 나옴
---

본문
```

`summary` 와 `tags` 는 선택 항목이다. 홈의 Latest Entries 에는 날짜순으로 자동 반영되고, Featured Posts 에는 `featured: true` 인 글만 올라간다.

## 비공개

- 사이트에서만 숨기기: `draft: true`
- 아예 커밋하지 않기: `drafts/` 폴더에 두면 `.gitignore` 로 제외된다. 공개 전 PoC나 민감한 자료는 여기에.

## 배포

`main` 에 push 하면 `.github/workflows/deploy.yml` 가 빌드 후 GitHub Pages 에 배포한다. 저장소 Settings → Pages → Source 를 "GitHub Actions" 로 한 번 설정해 두어야 한다.
