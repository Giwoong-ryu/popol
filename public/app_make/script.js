// 스크롤 애니메이션 (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('section, .career-item').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

// 마우스 오버 효과 (이미지는 CSS로, 버튼/스킬 태그에 강조)
// (추가적인 버튼이 생기면 여기에 JS 효과 추가 가능) 