// CS 마인드맵 데이터. 노드를 추가/수정하려면 branches 배열만 고치면 됩니다.
// note 안에서 줄바꿈은 \n 으로.
export const mindmap = {
  root: 'CS 기반',
  branches: [
    {
      label: 'OS / 메모리관리',
      note: '가상 메모리, 페이징, 커널/유저 주소공간 분리…\n\n(여기에 직접 정리한 내용을 적습니다.)',
    },
    {
      label: '권한 모델',
      note: '프로세스 토큰, 권한 상승(EOP)의 의미, 주요 권한(Privilege)들…',
    },
    {
      label: '시스템 콜 / IOCTL',
      note: '유저 → 커널 전이 과정, IOCTL 핸들러, 드라이버 통신 구조…',
    },
    {
      label: '컴퓨터 아키텍처',
      note: '레지스터, 스택 프레임, 호출 규약(calling convention)…',
    },
    {
      label: '완화 기법',
      note: 'SMEP / SMAP / kASLR / DEP 가 익스플로잇을 어떻게 막는가…',
    },
    {
      label: '리버싱 기초',
      note: 'IDA / 디스어셈블리 읽기, 함수 식별, 제어 흐름 파악…',
    },
  ],
};
