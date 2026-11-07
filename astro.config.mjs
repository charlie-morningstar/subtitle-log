// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages 프로젝트 사이트 주소에 맞춘 설정.
// 배포 주소: https://charlie-morningstar.github.io/8080_folio/
// 나중에 커스텀 도메인을 쓰면 site/base 를 바꾸면 됩니다.
export default defineConfig({
  site: 'https://charlie-morningstar.github.io',
  base: '/8080_folio',
  trailingSlash: 'always',
});
