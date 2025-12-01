/**
 * 가맹점 일일 리포트 - 가상 데이터 생성 스크립트
 *
 * 실행: node generate-sample-data.js
 * 출력: 각 지점별 CSV 파일 (구글 시트에 복사/붙여넣기용)
 */

const fs = require('fs');
const path = require('path');

// 지점 정보
const stores = [
  {
    code: 'A001',
    name: '강남역점',
    type: 'office', // 오피스 상권
    baseSales: 1200000,
    variance: 0.15,
    peakHours: 'morning', // 아침 피크
    weekendFactor: 0.6, // 주말 매출 감소
    characteristics: {
      americanoRatio: 0.45, // 아메리카노 비중 높음
      takeoutRatio: 0.7,
      avgCustomers: 180
    }
  },
  {
    code: 'B001',
    name: '홍대입구점',
    type: 'youth',
    baseSales: 980000,
    variance: 0.2,
    peakHours: 'afternoon', // 오후 피크
    weekendFactor: 1.3, // 주말 매출 증가
    characteristics: {
      americanoRatio: 0.3,
      takeoutRatio: 0.5,
      avgCustomers: 210
    }
  },
  {
    code: 'C001',
    name: '판교테크노밸리점',
    type: 'tech',
    baseSales: 1450000,
    variance: 0.12,
    peakHours: 'afternoon', // 오후 피크 (야근 문화)
    weekendFactor: 0.3,
    characteristics: {
      americanoRatio: 0.5,
      takeoutRatio: 0.8,
      avgCustomers: 165
    }
  },
  {
    code: 'D001',
    name: '잠실롯데월드점',
    type: 'mall',
    baseSales: 1100000,
    variance: 0.25,
    peakHours: 'lunch', // 점심 피크
    weekendFactor: 1.5, // 주말 대폭 증가
    characteristics: {
      americanoRatio: 0.25,
      takeoutRatio: 0.4,
      avgCustomers: 250
    }
  }
];

// 날씨 데이터 (겨울 기준)
const weatherPatterns = [
  { weather: '맑음', temp: 3, salesFactor: 1.0 },
  { weather: '맑음', temp: 5, salesFactor: 1.05 },
  { weather: '흐림', temp: 2, salesFactor: 0.95 },
  { weather: '흐림', temp: 0, salesFactor: 0.9 },
  { weather: '비', temp: 4, salesFactor: 0.75 },
  { weather: '눈', temp: -2, salesFactor: 0.7 },
  { weather: '맑음', temp: 7, salesFactor: 1.1 },
];

// 특이사항 목록
const events = [
  '', '', '', '', '', // 대부분은 특이사항 없음
  '', '', '', '', '',
  '신메뉴 출시 첫날',
  '1+1 이벤트 진행',
  '인근 행사로 유동인구 증가',
  '인근 공사로 유동인구 감소',
  '직원 교육 진행',
  '에어컨 고장 수리',
  '단체 주문 발생',
  '배달앱 프로모션 진행',
  'SNS 바이럴 효과',
  '인플루언서 방문',
];

// 요일 배열
const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

// 유틸리티 함수
function randomInRange(base, variance) {
  const min = base * (1 - variance);
  const max = base * (1 + variance);
  return Math.floor(Math.random() * (max - min) + min);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 날짜 포맷
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

// 단일 날짜 데이터 생성
function generateDayData(store, date, prevDayData = null) {
  const dayOfWeek = date.getDay();
  const dayName = dayNames[dayOfWeek];
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  // 날씨 선택
  const weatherData = getRandomElement(weatherPatterns);

  // 기본 매출 계산
  let baseSales = store.baseSales;

  // 주말 보정
  if (isWeekend) {
    baseSales *= store.weekendFactor;
  }

  // 요일별 패턴 (금요일 증가)
  if (dayOfWeek === 5) baseSales *= 1.1;
  if (dayOfWeek === 1) baseSales *= 0.95; // 월요병

  // 날씨 보정
  baseSales *= weatherData.salesFactor;

  // 트렌드 반영 (최근 데이터일수록 약간 증가)
  const today = new Date();
  const daysDiff = Math.floor((today - date) / (1000 * 60 * 60 * 24));
  if (daysDiff < 30) {
    baseSales *= (1 + (30 - daysDiff) * 0.002); // 최근 30일 약간 증가 트렌드
  }

  // 최종 매출 (변동성 적용)
  const totalSales = randomInRange(baseSales, store.variance);

  // 결제수단별 비율
  const cardRatio = 0.85 + Math.random() * 0.1;
  const cardSales = Math.floor(totalSales * cardRatio);
  const cashSales = totalSales - cardSales;

  // 배달 매출 (지점 특성에 따라)
  const deliveryRatio = store.type === 'office' ? 0.15 :
                        store.type === 'youth' ? 0.25 :
                        store.type === 'tech' ? 0.2 : 0.1;
  const deliverySales = Math.floor(totalSales * (deliveryRatio + (Math.random() - 0.5) * 0.1));

  // 할인
  const discountAmount = Math.floor(totalSales * (0.02 + Math.random() * 0.03));
  const netSales = totalSales - discountAmount;

  // 고객 수
  const avgPrice = store.type === 'mall' ? 5500 :
                   store.type === 'youth' ? 5800 : 6200;
  const totalCustomers = Math.floor(totalSales / avgPrice);
  const avgTicket = Math.floor(totalSales / totalCustomers);

  // 신규회원
  const newMembers = randomInt(5, 20);

  // 재방문율
  const revisitRate = store.type === 'office' ? randomInt(35, 50) :
                      store.type === 'tech' ? randomInt(40, 55) :
                      randomInt(20, 35);

  // 피크타임 고객수
  const peakCustomers = Math.floor(totalCustomers * (0.25 + Math.random() * 0.1));

  // 메뉴별 판매량
  const totalDrinks = Math.floor(totalCustomers * 1.15); // 음료 평균 1.15잔/인
  const americano = Math.floor(totalDrinks * store.characteristics.americanoRatio);
  const latte = Math.floor(totalDrinks * 0.22);
  const vanillaLatte = Math.floor(totalDrinks * 0.12);
  const caramelMacc = Math.floor(totalDrinks * 0.08);
  const coldBrew = Math.floor(totalDrinks * 0.1);
  const nonCoffee = Math.floor(totalDrinks * 0.1);

  // 디저트/MD
  const dessert = randomInt(10, 35);
  const mdProduct = randomInt(0, 5);
  const newMenu = randomInt(3, 15);

  // 시간대별 매출
  let morningRatio, lunchRatio, afternoonRatio, eveningRatio;

  if (store.peakHours === 'morning') {
    morningRatio = 0.38; lunchRatio = 0.28; afternoonRatio = 0.22; eveningRatio = 0.12;
  } else if (store.peakHours === 'lunch') {
    morningRatio = 0.25; lunchRatio = 0.35; afternoonRatio = 0.25; eveningRatio = 0.15;
  } else { // afternoon
    morningRatio = 0.28; lunchRatio = 0.25; afternoonRatio = 0.32; eveningRatio = 0.15;
  }

  // 주말은 저녁 매출 증가
  if (isWeekend) {
    eveningRatio += 0.08;
    morningRatio -= 0.08;
  }

  const morningSales = Math.floor(totalSales * morningRatio);
  const lunchSales = Math.floor(totalSales * lunchRatio);
  const afternoonSales = Math.floor(totalSales * afternoonRatio);
  const eveningSales = totalSales - morningSales - lunchSales - afternoonSales;

  // 재고 (전날 기준으로 감소)
  let beanStock, milkStock, syrupStock, cupStock;

  if (prevDayData) {
    beanStock = Math.max(0.5, prevDayData.beanStock - (totalDrinks * 0.015)); // 잔당 15g
    milkStock = Math.max(1, prevDayData.milkStock - (latte + vanillaLatte + caramelMacc) * 0.02);
    syrupStock = Math.max(1, prevDayData.syrupStock - (vanillaLatte + caramelMacc) * 0.01);
    cupStock = Math.max(50, prevDayData.cupStock - Math.floor(totalDrinks * store.characteristics.takeoutRatio));

    // 발주로 재고 보충 (재고 낮으면 보충)
    if (beanStock < 3) beanStock = randomInt(8, 12);
    if (milkStock < 3) milkStock = randomInt(10, 15);
    if (syrupStock < 3) syrupStock = randomInt(8, 12);
    if (cupStock < 150) cupStock = randomInt(400, 600);
  } else {
    beanStock = randomInt(5, 10);
    milkStock = randomInt(6, 12);
    syrupStock = randomInt(5, 10);
    cupStock = randomInt(300, 500);
  }

  beanStock = Math.round(beanStock * 10) / 10;

  // 운영 정보
  const operatingHours = isWeekend ? randomInt(10, 14) : randomInt(12, 15);
  const staffCount = isWeekend ? randomInt(2, 4) : randomInt(3, 5);
  const wasteCount = randomInt(2, 8);

  // 특이사항
  const event = getRandomElement(events);

  return {
    date: formatDate(date),
    dayName,
    storeName: store.name,
    storeCode: store.code,
    operatingHours,
    totalSales,
    cardSales,
    cashSales,
    deliverySales,
    discountAmount,
    netSales,
    totalCustomers,
    avgTicket,
    newMembers,
    revisitRate,
    peakCustomers,
    americano,
    latte,
    vanillaLatte,
    caramelMacc,
    coldBrew,
    nonCoffee,
    dessert,
    mdProduct,
    newMenu,
    morningSales,
    lunchSales,
    afternoonSales,
    eveningSales,
    beanStock,
    milkStock: Math.floor(milkStock),
    syrupStock: Math.floor(syrupStock),
    cupStock: Math.floor(cupStock),
    weather: weatherData.weather,
    temperature: weatherData.temp,
    staffCount,
    wasteCount,
    event
  };
}

// 지점별 데이터 생성 (90일치)
function generateStoreData(store, days = 90) {
  const data = [];
  const today = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    const prevData = data.length > 0 ? data[data.length - 1] : null;
    data.push(generateDayData(store, date, prevData));
  }

  return data;
}

// CSV 헤더
const headers = [
  '날짜', '요일', '가맹점명', '지점코드', '운영시간',
  '총매출', '카드매출', '현금매출', '배달매출', '할인금액', '순매출',
  '총고객수', '객단가', '신규회원', '재방문율(%)', '피크타임고객수',
  '아메리카노', '카페라떼', '바닐라라떼', '카라멜마끼아또', '콜드브루', '논커피음료', '디저트', 'MD상품', '신메뉴',
  '오전매출(7-12)', '점심매출(12-14)', '오후매출(14-18)', '저녁매출(18-22)',
  '원두재고(kg)', '우유재고(박스)', '시럽재고(병)', '컵재고(개)',
  '날씨', '기온', '근무인원', '폐기량(잔)', '특이사항'
];

// CSV 생성
function toCSV(data) {
  const rows = data.map(d => [
    d.date, d.dayName, d.storeName, d.storeCode, d.operatingHours,
    d.totalSales, d.cardSales, d.cashSales, d.deliverySales, d.discountAmount, d.netSales,
    d.totalCustomers, d.avgTicket, d.newMembers, d.revisitRate, d.peakCustomers,
    d.americano, d.latte, d.vanillaLatte, d.caramelMacc, d.coldBrew, d.nonCoffee, d.dessert, d.mdProduct, d.newMenu,
    d.morningSales, d.lunchSales, d.afternoonSales, d.eveningSales,
    d.beanStock, d.milkStock, d.syrupStock, d.cupStock,
    d.weather, d.temperature, d.staffCount, d.wasteCount, d.event
  ].join('\t'));

  return [headers.join('\t'), ...rows].join('\n');
}

// 메인 실행
function main() {
  const outputDir = path.join(__dirname, '..', 'data-templates');

  console.log('🚀 가맹점 가상 데이터 생성 시작...\n');

  stores.forEach((store, index) => {
    console.log(`📊 ${store.name} (${store.code}) 데이터 생성 중...`);
    const data = generateStoreData(store, 90);
    const csv = toCSV(data);

    const sheetName = `지점${String.fromCharCode(65 + index)}`; // A, B, C, D
    const filename = path.join(outputDir, `${sheetName}_${store.code}_data.tsv`);

    fs.writeFileSync(filename, csv, 'utf8');
    console.log(`   ✅ ${filename} 저장 완료 (${data.length}일치)`);
  });

  console.log('\n✨ 모든 데이터 생성 완료!');
  console.log('\n📋 사용 방법:');
  console.log('   1. 생성된 TSV 파일을 열어 전체 내용 복사');
  console.log('   2. 구글 시트의 각 탭(지점A~D)에 붙여넣기');
  console.log('   3. A1 셀부터 붙여넣으면 자동으로 탭으로 분리됨');
}

main();
