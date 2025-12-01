# 설정 가이드 - 가맹점 일일 리포트 자동화

## 목차
1. [사전 준비](#1-사전-준비)
2. [구글 시트 설정](#2-구글-시트-설정)
3. [n8n 설정](#3-n8n-설정)
4. [자격증명 설정](#4-자격증명-설정)
5. [테스트 및 활성화](#5-테스트-및-활성화)
6. [문제 해결](#6-문제-해결)

---

## 1. 사전 준비

### 필요한 계정
- [x] Google 계정 (구글 시트용)
- [x] OpenAI 계정 (API 키 필요)
- [x] Telegram 계정 (봇 생성용)
- [x] n8n 계정 (cloud 또는 self-hosted)

### API 키 준비
1. **OpenAI API Key**
   - https://platform.openai.com/api-keys 접속
   - "Create new secret key" 클릭
   - 키 복사해서 안전한 곳에 저장

2. **Telegram Bot Token**
   - Telegram에서 @BotFather 검색
   - `/newbot` 명령어 입력
   - 봇 이름 설정 후 토큰 받기
   - 봇과 대화 시작 (활성화 필요)

3. **Telegram Chat ID 확인**
   - https://api.telegram.org/bot{YOUR_BOT_TOKEN}/getUpdates
   - 봇에 메시지 전송 후 위 URL 접속
   - `"chat":{"id":123456789}` 에서 ID 확인

---

## 2. 구글 시트 설정

### 2-1. 시트 구조 생성

1. 구글 시트 열기:
   https://docs.google.com/spreadsheets/d/1VnOc5BH_ORMEq7Km6sUd93VAnMFvHWK-UPtUlO-MYk0/

2. 하단 탭에서 4개 시트 생성:
   - 지점A (강남역점)
   - 지점B (홍대입구점)
   - 지점C (판교테크노밸리점)
   - 지점D (잠실롯데월드점)

### 2-2. 샘플 데이터 입력

1. **가상 데이터 생성**
   ```bash
   cd n8n-franchise-report
   node scripts/generate-sample-data.cjs
   ```

2. **데이터 복사**
   - `data-templates/지점A_A001_data.tsv` 파일 내용 복사
   - 구글 시트 "지점A" 탭의 A1 셀에 붙여넣기
   - 나머지 지점도 동일하게 진행

### 2-3. 컬럼 확인

| 컬럼 | A | B | C | ... | AL |
|------|---|---|---|-----|-----|
| 내용 | 날짜 | 요일 | 가맹점명 | ... | 특이사항 |

---

## 3. n8n 설정

### 3-1. n8n 설치 (self-hosted)

```bash
# Docker 설치
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n

# 또는 npm 설치
npm install n8n -g
n8n start
```

### 3-2. 워크플로우 import

1. n8n 대시보드 접속 (http://localhost:5678)
2. Workflows → Import from File
3. `workflows/franchise-daily-report.json` 선택
4. Import 완료

### 3-3. 워크플로우 구조

```
[Schedule Trigger]
     │
     ├──▶ [지점A 데이터 읽기]
     ├──▶ [지점B 데이터 읽기]
     ├──▶ [지점C 데이터 읽기]
     └──▶ [지점D 데이터 읽기]
              │
              ▼
     [전체 데이터 병합]
              │
              ▼
     [데이터 분석 (Code)]
              │
              ▼
     [GPT 리포트 생성]
              │
              ├──▶ [텔레그램 발송]
              └──▶ [카카오톡 발송]
```

---

## 4. 자격증명 설정

### 4-1. Google Sheets OAuth

1. Google Cloud Console 접속
   https://console.cloud.google.com/

2. 프로젝트 생성 또는 선택

3. APIs & Services → Library
   - Google Sheets API 활성화
   - Google Drive API 활성화

4. APIs & Services → Credentials
   - OAuth 2.0 Client ID 생성
   - Redirect URI: `http://localhost:5678/rest/oauth2-credential/callback`

5. n8n에서 자격증명 추가
   - Credentials → Add Credential
   - Google Sheets OAuth2 API 선택
   - Client ID, Client Secret 입력
   - Connect 클릭하여 인증

### 4-2. OpenAI API

1. n8n → Credentials → Add Credential
2. OpenAI API 선택
3. API Key 입력
4. 저장

### 4-3. Telegram Bot

1. n8n → Credentials → Add Credential
2. Telegram API 선택
3. Access Token 입력 (BotFather에서 받은 토큰)
4. 저장

### 4-4. 노드별 자격증명 연결

각 노드 클릭 후:
- Google Sheets 노드: Google Sheets OAuth2 선택
- OpenAI 노드: OpenAI API 선택
- Telegram 노드: Telegram API 선택, Chat ID 입력

---

## 5. 테스트 및 활성화

### 5-1. 수동 테스트

1. 워크플로우 열기
2. "Execute Workflow" 클릭
3. 각 노드별 결과 확인
4. 텔레그램 메시지 수신 확인

### 5-2. 스케줄 설정

1. Schedule Trigger 노드 클릭
2. 설정 확인:
   - Cron Expression: `0 9 * * *`
   - Timezone: Asia/Seoul
3. 매일 오전 9시 자동 실행

### 5-3. 활성화

1. 워크플로우 상단의 "Active" 토글 ON
2. 저장

---

## 6. 문제 해결

### Q1. Google Sheets 데이터를 못 읽어요

**원인**: 권한 문제 또는 시트 ID 오류

**해결**:
1. 구글 시트 공유 설정 확인 (읽기 권한)
2. 시트 ID 확인:
   ```
   URL: https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit
   ```
3. OAuth 재인증 시도

### Q2. "날짜 데이터가 없습니다" 오류

**원인**: 어제 날짜의 데이터가 시트에 없음

**해결**:
1. 가상 데이터 재생성:
   ```bash
   node scripts/generate-sample-data.cjs
   ```
2. 시트에 데이터 다시 붙여넣기
3. 날짜 형식 확인 (YYYY-MM-DD)

### Q3. GPT 응답이 너무 길어요

**원인**: 토큰 제한 초과

**해결**:
1. OpenAI 노드 설정에서 `maxTokens: 1500` 확인
2. 프롬프트 간소화

### Q4. 텔레그램 메시지가 안 와요

**원인**: Chat ID 오류 또는 봇 비활성화

**해결**:
1. 봇과 대화 시작 (최초 1회 필수)
2. Chat ID 재확인:
   ```
   https://api.telegram.org/bot{TOKEN}/getUpdates
   ```
3. Bot Token 확인

### Q5. 특정 지점 데이터만 안 나와요

**원인**: 시트 이름 불일치

**해결**:
1. 시트 탭 이름 확인: 지점A, 지점B, 지점C, 지점D
2. n8n 노드의 `sheetName` 설정 확인

---

## 추가 커스터마이징

### 분석 지표 추가

`scripts/n8n-analysis-code.js` 파일 수정:
- 새로운 분석 함수 추가
- return 객체에 새 데이터 포함

### GPT 프롬프트 수정

`scripts/gpt-prompt-template.md` 참조:
- 일일 리포트
- 주간 트렌드 분석
- 이상 탐지 알림
- 경영진 브리핑용

### 알림 채널 추가

- Slack: n8n Slack 노드 추가
- 이메일: n8n Email 노드 추가
- Discord: Webhook 사용

---

## 지원

문제가 해결되지 않으면:
1. n8n 커뮤니티: https://community.n8n.io/
2. n8n 문서: https://docs.n8n.io/

---

**마지막 업데이트**: 2024-01-15
