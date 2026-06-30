// timeline.jsx — Life timeline detail view (shared by 6 profile cards)

const TIMELINE_EVENTS = [
  {
    id: 'birth',
    date: '2001.01',
    title: '출생',
    sub: '서울',
    cardId: 'basic',
  },
  {
    id: 'meister',
    date: '2019.02',
    title: '서울도시과학기술고 졸업',
    sub: '해외건설전기통신과 (마이스터고)',
    cardId: 'industry',
    note: {
      label: '학교에서',
      items: [
        '인도네시아 자카르타 대규모 플랜트 산업 현장 경험 (2016.07)',
        '전기기능사 자격 취득 (2016.12)',
        '승강기기능사 자격 취득 (2017.12)',
        '생산자동화기능사 자격 취득 (2018.07)',
      ],
    },
  },
  {
    id: 'map',
    date: '2019.03',
    title: 'MAP건축설계사무소',
    sub: '근무 / 퇴사',
    cardId: 'industry',
  },
  {
    id: 'hongik',
    date: '2020.03',
    title: '홍익대학교 입학',
    sub: '경제학부',
    cardId: 'edu',
  },
  {
    id: 'army',
    date: '2024.01',
    title: '대한민국 공군 병장 만기전역',
    sub: '복무 종료',
  },
  {
    id: 'cpa',
    date: '2025.09',
    title: '제 60회 CPA 동차합격',
    sub: '공인회계사 시험',
    cardId: 'cpa',
  },
  {
    id: 'role',
    date: '2025.09 –',
    title: '홍익대 CPA 고시반 「연형재」 실장',
    sub: '재학 중',
    cardId: 'role',
  },
  {
    id: 'firm',
    date: '2026.01 – 03',
    title: '태성회계법인',
    sub: 'Part-Time',
    cardId: 'firm',
  },
];

// Cards that share this same detail view
const TIMELINE_CARDS = ['basic', 'edu', 'cpa', 'firm', 'role', 'industry'];

function TimelineDetail({ activeCardId }) {
  return (
    <div className="pf-timeline">
      <header className="pf-timeline-head">
        <div className="pf-timeline-eyebrow">Life Timeline</div>
        <h2 className="pf-timeline-title">25 <em>Years</em><br/>of Trajectory</h2>
        <div className="pf-timeline-sub">2001 — 2026 · Yoon Jongbeen</div>
      </header>

      <ol className="pf-timeline-list">
        {TIMELINE_EVENTS.map((ev, i) => {
          const isActive = activeCardId && ev.cardId === activeCardId;
          const [year, month] = ev.date.split('.');
          return (
            <li
              key={ev.id}
              className={`pf-tl-row ${isActive ? 'is-active' : ''}`}
              data-card-id={ev.cardId || ''}
            >
              <div className="pf-tl-year">
                {year}
                <span className="pf-tl-year-month">{month || ''}</span>
              </div>
              <div className="pf-tl-dot"></div>
              <div className="pf-tl-body">
                <div className="pf-tl-title">{ev.title}</div>
                {ev.sub && <div className="pf-tl-subtxt">{ev.sub}</div>}
                {ev.note && (
                  <div className="pf-tl-note">
                    <div className="pf-tl-note-label">{ev.note.label}</div>
                    {ev.note.items ? (
                      <ul className="pf-tl-note-list">
                        {ev.note.items.map((it, k) => (
                          <li key={k}>{it}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="pf-tl-note-body">— {ev.note.placeholder} —</div>
                    )}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

Object.assign(window, {
  TIMELINE_EVENTS,
  TIMELINE_CARDS,
  TimelineDetail,
});
