/**
 * n8n Code 노드용 고급 분석 스크립트
 *
 * 이 코드를 n8n의 Code 노드에 붙여넣어 사용합니다.
 * 경향 분석, 개선 방향 도출, 상세 인사이트 제공
 */

// ============================================
// 설정
// ============================================
const CONFIG = {
  // 발주 기준선
  inventory: {
    bean: { warning: 3, critical: 1.5 },
    milk: { warning: 4, critical: 2 },
    syrup: { warning: 4, critical: 2 },
    cup: { warning: 200, critical: 100 }
  },
  // 성과 기준
  performance: {
    salesGrowthTarget: 5, // 목표 매출 성장률 %
    revisitRateTarget: 40, // 목표 재방문율 %
    wasteRateLimit: 3, // 폐기율 한계 %
    productivityTarget: 400000 // 직원당 목표 매출
  }
};

// ============================================
// 날짜 유틸리티
// ============================================
const formatDate = (date) => date.toISOString().split('T')[0];

const getDateRange = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const dayBefore = new Date(yesterday);
  dayBefore.setDate(dayBefore.getDate() - 1);

  const weekAgo = new Date(yesterday);
  weekAgo.setDate(weekAgo.getDate() - 7);

  const monthAgo = new Date(yesterday);
  monthAgo.setDate(monthAgo.getDate() - 30);

  return {
    today: formatDate(today),
    yesterday: formatDate(yesterday),
    dayBefore: formatDate(dayBefore),
    weekAgo: formatDate(weekAgo),
    monthAgo: formatDate(monthAgo)
  };
};

// ============================================
// 데이터 필터링
// ============================================
const filterByDate = (data, dateStr) => data.filter(r => r['날짜'] === dateStr);
const filterByDateRange = (data, startDate, endDate) => {
  return data.filter(r => r['날짜'] >= startDate && r['날짜'] <= endDate);
};
const filterByStore = (data, storeCode) => data.filter(r => r['지점코드'] === storeCode);

// ============================================
// 기본 통계 함수
// ============================================
const sum = (arr, key) => arr.reduce((acc, r) => acc + (parseInt(r[key]) || 0), 0);
const avg = (arr, key) => arr.length ? sum(arr, key) / arr.length : 0;
const max = (arr, key) => Math.max(...arr.map(r => parseInt(r[key]) || 0));
const min = (arr, key) => Math.min(...arr.map(r => parseInt(r[key]) || 0));

// 증감률 계산
const calcChangeRate = (current, previous) => {
  if (!previous || previous === 0) return 0;
  return ((current - previous) / previous * 100).toFixed(1);
};

// ============================================
// 매출 분석
// ============================================
const analyzeSales = (todayData, yesterdayData, weekData, monthData) => {
  const todaySales = sum(todayData, '총매출');
  const yesterdaySales = sum(yesterdayData, '총매출');
  const weekAvgSales = avg(weekData, '총매출');
  const monthAvgSales = avg(monthData, '총매출');

  // 시간대별 분석
  const timeSlots = {
    morning: sum(todayData, '오전매출(7-12)'),
    lunch: sum(todayData, '점심매출(12-14)'),
    afternoon: sum(todayData, '오후매출(14-18)'),
    evening: sum(todayData, '저녁매출(18-22)')
  };

  const totalTimeSales = Object.values(timeSlots).reduce((a, b) => a + b, 0);
  const timeDistribution = {
    morning: ((timeSlots.morning / totalTimeSales) * 100).toFixed(1),
    lunch: ((timeSlots.lunch / totalTimeSales) * 100).toFixed(1),
    afternoon: ((timeSlots.afternoon / totalTimeSales) * 100).toFixed(1),
    evening: ((timeSlots.evening / totalTimeSales) * 100).toFixed(1)
  };

  return {
    today: todaySales,
    yesterday: yesterdaySales,
    dayChange: calcChangeRate(todaySales, yesterdaySales),
    weekAvg: Math.round(weekAvgSales),
    weekChange: calcChangeRate(todaySales, weekAvgSales),
    monthAvg: Math.round(monthAvgSales),
    monthChange: calcChangeRate(todaySales, monthAvgSales),
    timeSlots,
    timeDistribution,
    netSales: sum(todayData, '순매출'),
    discountRate: ((sum(todayData, '할인금액') / todaySales) * 100).toFixed(1)
  };
};

// ============================================
// 고객 분석
// ============================================
const analyzeCustomers = (todayData, yesterdayData, weekData) => {
  const todayCustomers = sum(todayData, '총고객수');
  const yesterdayCustomers = sum(yesterdayData, '총고객수');
  const avgTicket = Math.round(avg(todayData, '객단가'));
  const weekAvgTicket = Math.round(avg(weekData, '객단가'));

  return {
    total: todayCustomers,
    change: calcChangeRate(todayCustomers, yesterdayCustomers),
    avgTicket,
    avgTicketChange: calcChangeRate(avgTicket, weekAvgTicket),
    newMembers: sum(todayData, '신규회원'),
    avgRevisitRate: avg(todayData, '재방문율(%)').toFixed(1),
    peakCustomers: sum(todayData, '피크타임고객수'),
    peakRatio: ((sum(todayData, '피크타임고객수') / todayCustomers) * 100).toFixed(1)
  };
};

// ============================================
// 메뉴 분석
// ============================================
const analyzeMenu = (todayData, weekData) => {
  const menuItems = [
    { key: '아메리카노', name: '아메리카노', category: 'coffee' },
    { key: '카페라떼', name: '카페라떼', category: 'coffee' },
    { key: '바닐라라떼', name: '바닐라라떼', category: 'coffee' },
    { key: '카라멜마끼아또', name: '카라멜마끼아또', category: 'coffee' },
    { key: '콜드브루', name: '콜드브루', category: 'coffee' },
    { key: '논커피음료', name: '논커피음료', category: 'non-coffee' },
    { key: '디저트', name: '디저트', category: 'food' },
    { key: 'MD상품', name: 'MD상품', category: 'md' },
    { key: '신메뉴', name: '신메뉴', category: 'new' }
  ];

  const todaySales = menuItems.map(item => ({
    ...item,
    today: sum(todayData, item.key),
    weekAvg: Math.round(avg(weekData, item.key))
  }));

  const totalDrinks = todaySales
    .filter(m => ['coffee', 'non-coffee'].includes(m.category))
    .reduce((acc, m) => acc + m.today, 0);

  // 비중 및 성장률 계산
  const menuAnalysis = todaySales.map(m => ({
    ...m,
    ratio: totalDrinks ? ((m.today / totalDrinks) * 100).toFixed(1) : 0,
    change: calcChangeRate(m.today, m.weekAvg)
  }));

  // 베스트/워스트
  const sortedByVolume = [...menuAnalysis].sort((a, b) => b.today - a.today);
  const sortedByGrowth = [...menuAnalysis].sort((a, b) => parseFloat(b.change) - parseFloat(a.change));

  return {
    items: menuAnalysis,
    totalDrinks,
    coffeeRatio: ((todaySales.filter(m => m.category === 'coffee').reduce((a, m) => a + m.today, 0) / totalDrinks) * 100).toFixed(1),
    bestSeller: sortedByVolume[0],
    fastestGrowing: sortedByGrowth[0],
    slowestGrowing: sortedByGrowth[sortedByGrowth.length - 1]
  };
};

// ============================================
// 재고 분석
// ============================================
const analyzeInventory = (todayData, weekData) => {
  const inventory = {
    bean: {
      current: Math.min(...todayData.map(r => parseFloat(r['원두재고(kg)']) || 0)),
      avgDailyUsage: 0,
      daysRemaining: 0,
      status: 'normal'
    },
    milk: {
      current: Math.min(...todayData.map(r => parseInt(r['우유재고(박스)']) || 0)),
      avgDailyUsage: 0,
      daysRemaining: 0,
      status: 'normal'
    },
    syrup: {
      current: Math.min(...todayData.map(r => parseInt(r['시럽재고(병)']) || 0)),
      avgDailyUsage: 0,
      daysRemaining: 0,
      status: 'normal'
    },
    cup: {
      current: Math.min(...todayData.map(r => parseInt(r['컵재고(개)']) || 0)),
      avgDailyUsage: 0,
      daysRemaining: 0,
      status: 'normal'
    }
  };

  // 일평균 사용량 계산 (주간 데이터 기준)
  if (weekData.length > 1) {
    const firstWeek = weekData[0];
    const lastWeek = weekData[weekData.length - 1];
    const days = weekData.length;

    // 음료 판매량 기반 추정
    const avgDrinks = avg(weekData, '아메리카노') + avg(weekData, '카페라떼') + avg(weekData, '바닐라라떼');
    inventory.bean.avgDailyUsage = (avgDrinks * 0.018).toFixed(2); // 잔당 18g
    inventory.milk.avgDailyUsage = ((avg(weekData, '카페라떼') + avg(weekData, '바닐라라떼')) * 0.03).toFixed(1);
  }

  // 상태 판단
  Object.keys(inventory).forEach(key => {
    const item = inventory[key];
    const config = CONFIG.inventory[key];

    if (item.current <= config.critical) {
      item.status = 'critical';
    } else if (item.current <= config.warning) {
      item.status = 'warning';
    }

    if (item.avgDailyUsage > 0) {
      item.daysRemaining = Math.floor(item.current / item.avgDailyUsage);
    }
  });

  return inventory;
};

// ============================================
// 운영 효율 분석
// ============================================
const analyzeOperations = (todayData, weekData) => {
  const todaySales = sum(todayData, '총매출');
  const todayStaff = sum(todayData, '근무인원');
  const todayWaste = sum(todayData, '폐기량(잔)');
  const totalDrinks = sum(todayData, '아메리카노') + sum(todayData, '카페라떼') +
                      sum(todayData, '바닐라라떼') + sum(todayData, '카라멜마끼아또');

  const productivity = todayStaff ? Math.round(todaySales / todayStaff) : 0;
  const wasteRate = totalDrinks ? ((todayWaste / totalDrinks) * 100).toFixed(2) : 0;

  const weekProductivity = weekData.length ?
    Math.round(sum(weekData, '총매출') / sum(weekData, '근무인원')) : 0;

  return {
    productivity,
    productivityChange: calcChangeRate(productivity, weekProductivity),
    productivityTarget: CONFIG.performance.productivityTarget,
    isAboveTarget: productivity >= CONFIG.performance.productivityTarget,
    wasteCount: todayWaste,
    wasteRate,
    wasteStatus: parseFloat(wasteRate) > CONFIG.performance.wasteRateLimit ? 'warning' : 'normal',
    staffCount: todayStaff,
    operatingHours: avg(todayData, '운영시간').toFixed(1)
  };
};

// ============================================
// 트렌드 분석 (7일 / 30일)
// ============================================
const analyzeTrends = (weekData, monthData) => {
  // 주간 일별 매출 추이
  const weeklyTrend = weekData.map(d => ({
    date: d['날짜'],
    day: d['요일'],
    sales: parseInt(d['총매출']) || 0
  }));

  // 요일별 평균 매출
  const dayOfWeekAvg = {};
  const dayNames = ['월', '화', '수', '목', '금', '토', '일'];
  dayNames.forEach(day => {
    const dayData = monthData.filter(d => d['요일'] === day);
    dayOfWeekAvg[day] = dayData.length ? Math.round(avg(dayData, '총매출')) : 0;
  });

  // 베스트/워스트 요일
  const sortedDays = Object.entries(dayOfWeekAvg).sort((a, b) => b[1] - a[1]);

  // 성장 추세 (선형 회귀 간소화)
  const recentWeek = weekData.slice(-7);
  const prevWeek = weekData.slice(-14, -7);
  const recentAvg = avg(recentWeek, '총매출');
  const prevAvg = prevWeek.length ? avg(prevWeek, '총매출') : recentAvg;
  const growthTrend = calcChangeRate(recentAvg, prevAvg);

  return {
    weeklyTrend,
    dayOfWeekAvg,
    bestDay: sortedDays[0],
    worstDay: sortedDays[sortedDays.length - 1],
    growthTrend,
    growthDirection: parseFloat(growthTrend) > 0 ? 'up' : parseFloat(growthTrend) < 0 ? 'down' : 'stable'
  };
};

// ============================================
// 지점별 비교 분석
// ============================================
const compareStores = (allStoresData, dateStr) => {
  const todayAllStores = filterByDate(allStoresData, dateStr);

  const storeComparison = [];
  const storeCodes = [...new Set(todayAllStores.map(d => d['지점코드']))];

  storeCodes.forEach(code => {
    const storeData = todayAllStores.filter(d => d['지점코드'] === code);
    if (storeData.length === 0) return;

    const store = storeData[0];
    storeComparison.push({
      code,
      name: store['가맹점명'],
      sales: parseInt(store['총매출']) || 0,
      customers: parseInt(store['총고객수']) || 0,
      avgTicket: parseInt(store['객단가']) || 0,
      productivity: Math.round((parseInt(store['총매출']) || 0) / (parseInt(store['근무인원']) || 1))
    });
  });

  // 순위 정렬
  const salesRanked = [...storeComparison].sort((a, b) => b.sales - a.sales);
  const productivityRanked = [...storeComparison].sort((a, b) => b.productivity - a.productivity);

  return {
    stores: storeComparison,
    totalSales: sum(todayAllStores, '총매출'),
    avgSales: Math.round(avg(todayAllStores, '총매출')),
    topBySales: salesRanked[0],
    topByProductivity: productivityRanked[0],
    needsAttention: salesRanked[salesRanked.length - 1]
  };
};

// ============================================
// 인사이트 생성
// ============================================
const generateInsights = (analysis) => {
  const insights = [];
  const recommendations = [];
  const alerts = [];

  // 매출 인사이트
  if (parseFloat(analysis.sales.dayChange) > 10) {
    insights.push(`📈 전일 대비 매출 ${analysis.sales.dayChange}% 상승 - 우수한 실적`);
  } else if (parseFloat(analysis.sales.dayChange) < -10) {
    insights.push(`📉 전일 대비 매출 ${analysis.sales.dayChange}% 하락 - 원인 분석 필요`);
    recommendations.push('전일 대비 매출 하락 원인 파악 (날씨, 이벤트, 경쟁점 등)');
  }

  if (parseFloat(analysis.sales.monthChange) > CONFIG.performance.salesGrowthTarget) {
    insights.push(`🎯 월평균 대비 ${analysis.sales.monthChange}% 성장 - 목표 달성`);
  }

  // 고객 인사이트
  if (parseFloat(analysis.customers.avgRevisitRate) < CONFIG.performance.revisitRateTarget) {
    recommendations.push(`재방문율 ${analysis.customers.avgRevisitRate}% → 멤버십 프로모션 강화 필요`);
  }

  if (parseFloat(analysis.customers.peakRatio) > 40) {
    insights.push(`⏰ 피크타임 집중도 ${analysis.customers.peakRatio}% - 인력 배치 최적화 권장`);
  }

  // 메뉴 인사이트
  if (analysis.menu.fastestGrowing && parseFloat(analysis.menu.fastestGrowing.change) > 20) {
    insights.push(`🔥 ${analysis.menu.fastestGrowing.name} 판매량 ${analysis.menu.fastestGrowing.change}% 급증`);
  }

  if (analysis.menu.slowestGrowing && parseFloat(analysis.menu.slowestGrowing.change) < -20) {
    recommendations.push(`${analysis.menu.slowestGrowing.name} 판매 부진 - 프로모션 또는 메뉴 개선 검토`);
  }

  // 재고 알림
  Object.entries(analysis.inventory).forEach(([key, item]) => {
    const names = { bean: '원두', milk: '우유', syrup: '시럽', cup: '컵' };
    if (item.status === 'critical') {
      alerts.push(`🚨 ${names[key]} 긴급 발주 필요 (현재: ${item.current})`);
    } else if (item.status === 'warning') {
      alerts.push(`⚠️ ${names[key]} 발주 필요 (현재: ${item.current}, 예상 ${item.daysRemaining}일 후 소진)`);
    }
  });

  // 운영 인사이트
  if (!analysis.operations.isAboveTarget) {
    recommendations.push(`직원당 생산성 ${analysis.operations.productivity.toLocaleString()}원 → 목표 ${CONFIG.performance.productivityTarget.toLocaleString()}원 미달`);
  }

  if (analysis.operations.wasteStatus === 'warning') {
    alerts.push(`⚠️ 폐기율 ${analysis.operations.wasteRate}% - 제조량 조절 필요`);
  }

  // 트렌드 인사이트
  if (analysis.trends.growthDirection === 'up') {
    insights.push(`📊 최근 2주 매출 ${analysis.trends.growthTrend}% 상승 추세`);
  } else if (analysis.trends.growthDirection === 'down') {
    recommendations.push(`최근 2주 매출 ${analysis.trends.growthTrend}% 하락 추세 - 대응 전략 필요`);
  }

  insights.push(`💡 최고 매출 요일: ${analysis.trends.bestDay[0]}요일 (평균 ${analysis.trends.bestDay[1].toLocaleString()}원)`);
  insights.push(`💡 최저 매출 요일: ${analysis.trends.worstDay[0]}요일 (평균 ${analysis.trends.worstDay[1].toLocaleString()}원)`);

  return { insights, recommendations, alerts };
};

// ============================================
// 메인 분석 함수 (n8n에서 호출)
// ============================================
const runAnalysis = (allData) => {
  const dates = getDateRange();

  // 데이터 필터링
  const todayData = filterByDate(allData, dates.yesterday);
  const yesterdayData = filterByDate(allData, dates.dayBefore);
  const weekData = filterByDateRange(allData, dates.weekAgo, dates.yesterday);
  const monthData = filterByDateRange(allData, dates.monthAgo, dates.yesterday);

  if (todayData.length === 0) {
    return {
      error: true,
      message: `${dates.yesterday} 데이터가 없습니다.`,
      availableDates: [...new Set(allData.map(d => d['날짜']))].slice(-5)
    };
  }

  // 각 분석 실행
  const sales = analyzeSales(todayData, yesterdayData, weekData, monthData);
  const customers = analyzeCustomers(todayData, yesterdayData, weekData);
  const menu = analyzeMenu(todayData, weekData);
  const inventory = analyzeInventory(todayData, weekData);
  const operations = analyzeOperations(todayData, weekData);
  const trends = analyzeTrends(weekData, monthData);
  const storeComparison = compareStores(allData, dates.yesterday);

  const analysis = { sales, customers, menu, inventory, operations, trends, storeComparison };
  const { insights, recommendations, alerts } = generateInsights(analysis);

  return {
    date: dates.yesterday,
    reportGeneratedAt: new Date().toISOString(),
    summary: {
      totalSales: sales.today.toLocaleString(),
      salesChange: `${parseFloat(sales.dayChange) >= 0 ? '+' : ''}${sales.dayChange}%`,
      totalCustomers: customers.total,
      avgTicket: customers.avgTicket.toLocaleString(),
      storeCount: todayData.length
    },
    analysis,
    insights,
    recommendations,
    alerts
  };
};

// ============================================
// n8n Code 노드에서 실행될 메인 코드
// ============================================

// 입력 데이터 (Google Sheets에서 가져온 데이터)
const allData = $input.all().map(item => item.json);

// 분석 실행
const result = runAnalysis(allData);

// 결과 반환
return [{ json: result }];
