// cards.jsx — Portfolio cards data + components
// Card types: 'stat' (numbers/text big), 'logo' (logo + text), 'period' (date range), 'craft' (vibe coding showcase), 'industry' (heritage)

const PORTFOLIO_CARDS = [
{
  id: 'basic',
  type: 'stat',
  label: '기본 정보',
  size: 1,
  main: '만 25세',
  accent: '2001',
  accentSuffix: '년생',
  sub: '서울 출생',
  detail: {
    heading: '기본 정보',
    body: [
    ['생년', '2001년'],
    ['나이', '만 25세'],
    ['거주지', '서울']]

  }
},
{
  id: 'edu',
  type: 'logo',
  label: '학력',
  size: 1,
  logo: 'assets/logo-hongik.jpg',
  main: '홍익대학교',
  sub: '경제학부 졸업예정',
  detail: {
    heading: '홍익대학교 경제학부',
    body: [
    ['대학', '홍익대학교'],
    ['전공', '경제학부'],
    ['상태', '졸업예정']]

  }
},
{
  id: 'cpa',
  type: 'logo',
  label: '자격',
  size: 1,
  logo: 'assets/logo-cpa.jpg',
  main: '동차합격',
  sub: '제 60회 공인회계사 시험',
  detail: {
    heading: '공인회계사 (CPA)',
    body: [
    ['시험', '제 60회 공인회계사 시험'],
    ['결과', '1·2차 동차합격'],
    ['상태', '수습 공인회계사']]

  }
},
{
  id: 'firm',
  type: 'logo',
  label: '경력',
  size: 1,
  logo: 'assets/logo-taesung.jpg',
  main: '태성회계법인',
  sub: 'Part-Time',
  period: { from: '2026.01', to: '2026.03' },
  detail: {
    heading: '태성회계법인 — Part-Time',
    body: [
    ['소속', '태성회계법인'],
    ['기간', '2026년 1월 – 3월'],
    ['근무 형태', 'Part-Time'],
    ['직무', '외부감사 / 임의감사 보조']]

  }
},
{
  id: 'role',
  type: 'period',
  label: '대내 활동',
  size: 1,
  main: 'CPA 고시반',
  sub: '홍익대학교',
  accent: '「연형재」 실장',
  period: { from: '2025-2학기', to: '2026-1학기' },
  detail: {
    heading: '홍익대학교 고시반 「연형재」 실장',
    body: [
    ['직책', '실장'],
    ['기간', '2025-2학기 ~ 2026-1학기'],
    ['소속', '홍익대학교 CPA 고시반 「연형재」'],
    ['역할', '고시반 운영 · 학습 환경 관리 · 후배 멘토링']]

  }
},
{
  id: 'industry',
  type: 'logo',
  label: '산업 전문성',
  size: 1,
  logo: 'assets/logo-sust.jpg',
  main: '마이스터고 졸업',
  sub: '해외건설전기통신과 전공·자격증 · 산업현장 근무 경험 → 제조·건설업 이해도',
  detail: {
    heading: '산업 전문성 — 제조업 · 건설업',
    body: [
    ['고등학교', '서울도시과학기술고등학교 (마이스터고)'],
    ['전공 (고)', '해외건설전기통신과'],
    ['도메인 이해', '제조업 · 건설업 산업 구조 / 공정 / 용어 친숙'],
    ['감사 경험', '제조업 비상장사 6곳, 건설 도메인 이해 활용']]

  }
},
{
  id: 'craft',
  type: 'craft',
  label: '바이브 코딩',
  size: 2,
  skills: [
    { name: 'Claude Code', desc: '실사용 개발 워크플로우' },
    { name: 'AI 에이전트', desc: '업무 자동화 설계·구축' },
    { name: 'Python · SQL', desc: 'AI 활용 데이터 분석' },
  ],
  product: {
    name: '수습 회계사를 위한',
    nameStrong: '학습 도구 개발',
    tagline: '현장에 가기 전에, 데이터로 먼저 공부한다',
    desc: 'DART 공시 감사보고서 데이터로 동종업계 주석·핵심감사사항(KAM) 패턴을 미리 학습하는 도구',
  },
  detail: {
    heading: '외부감사 보조 웹',
  }
}];


const PROJECT_CARDS = [
{
  id: 'p-monami',
  client: '(주)모나미',
  logo: 'assets/proj-monami.png',
  type: '기말 외부감사',
  issue: '(주)항소 · (주)MIS 합병 이슈',
  tag: '코스피 상장사'
},
{
  id: 'p-alphaai',
  client: '(주)알파AI',
  logo: 'assets/proj-alphaai.png',
  type: '기말 외부감사',
  issue: '의견거절',
  tag: '코스닥 상장사'
},
{
  id: 'p-miracell',
  client: '(주)미라셀',
  logo: 'assets/proj-miracell.png',
  type: '기말 외부감사',
  issue: '줄기세포 바이오 제조',
  tag: '비상장사'
},
{
  id: 'p-geokwang',
  client: '(주)거광기업',
  logo: 'assets/proj-geokwang.png',
  type: '기말 외부감사',
  issue: '금속제창 · 모듈러 제조',
  tag: '비상장사'
},
{
  id: 'p-hope',
  client: '(주)희망에어텍',
  logo: 'assets/proj-hope.png',
  type: '기말 외부감사',
  issue: '레이더 등 방산 장비 제조',
  tag: '비상장사'
},
{
  id: 'p-banjang',
  client: '(주)반장창고',
  logo: 'assets/proj-banjang.png',
  type: '임의감사',
  issue: '스타트업 임의감사',
  tag: '스타트업'
}];


// ============================================================================
// Card components — variant by `type`
// ============================================================================

function ProfileCard({ card, isOpen, onToggle }) {
  const widthClass = card.size === 2 ? 'card-w2' : 'card-w1';
  return (
    <div
      className={`pf-card pf-card--${card.type} ${widthClass} ${isOpen ? 'is-open' : ''}`}
      data-card-id={card.id}
      onClick={onToggle}>
      
      <div className="pf-card-label">
        <span>{card.label}</span>
      </div>

      {card.type === 'stat' && <StatBody card={card} />}
      {card.type === 'logo' && <LogoBody card={card} />}
      {card.type === 'period' && <PeriodBody card={card} />}
      {card.type === 'industry' && <IndustryBody card={card} />}
      {card.type === 'craft' && <CraftBody card={card} />}

      <div className="pf-card-chev" aria-hidden="true">{isOpen ? '−' : '+'}</div>
    </div>);

}

function StatBody({ card }) {
  return (
    <div className="pf-body pf-body--stat">
      <div className="pf-uniform">{card.main}</div>
      <div className="pf-uniform">{card.accent}{card.accentSuffix}</div>
      {card.sub && <div className="pf-sub" style={{ fontSize: "18px" }}>{card.sub}</div>}
    </div>);

}

function LogoBody({ card }) {
  return (
    <div className="pf-body pf-body--logo">
      <div className="pf-logo-wrap">
        <img src={card.logo} alt="" />
      </div>
      <div className="pf-uniform">{card.main}</div>
      {card.sub && <div className="pf-uniform-sub">{card.sub}</div>}
      {card.period &&
      <div className="pf-period-inline">
          {card.period.from} <span className="pf-period-arrow">→</span> {card.period.to}
        </div>
      }
    </div>);

}

function PeriodBody({ card }) {
  return (
    <div className="pf-body pf-body--period">
      {card.logo &&
      <div className="pf-period-logo">
          <img src={card.logo} alt="" />
        </div>
      }
      <div className="pf-uniform">{card.main}</div>
      {card.sub && <div className="pf-uniform-sub">{card.sub}</div>}
      {card.accent && <div className="pf-uniform-accent">{card.accent}</div>}
      <div className="pf-period-inline">
        {card.period.from} <span className="pf-period-arrow">→</span> {card.period.to}
      </div>
    </div>);

}

function IndustryBody({ card }) {
  return (
    <div className="pf-body pf-body--industry">
      <div className="pf-industry-logo">
        <img src={card.logo} alt="" />
      </div>
      <div className="pf-industry-main">{card.main}</div>
      <div className="pf-industry-sub">{card.sub}</div>
      <div className="pf-industry-tags">
        {card.tags.map((t, i) =>
        <span key={i} className="pf-industry-tag">{t}</span>
        )}
      </div>
      <div className="pf-industry-subtle">{card.subtle}</div>
    </div>);

}

function CraftBody({ card }) {
  return (
    <div className="pf-body pf-body--craft">
      <div className="pf-craft-split">
        <div className="pf-craft-skills">
          <ul className="pf-craft-skilllist">
            {card.skills.map((s, i) =>
            <li key={i} className="pf-craft-skill">
                <span className="pf-craft-skill-name">{s.name}</span>
                <span className="pf-craft-skill-desc">{s.desc}</span>
              </li>
            )}
          </ul>
        </div>
        <div className="pf-craft-product">
          <div className="pf-craft-prod-name">{card.product.name}</div>
          <div className="pf-craft-prod-namestrong">{card.product.nameStrong}</div>
          <div className="pf-craft-prod-tagline">{card.product.tagline}</div>
          <div className="pf-craft-prod-desc">{card.product.desc}</div>
        </div>
      </div>
    </div>);

}

// ----- Detail (in-place expanded view) -----
function CardDetail({ card }) {
  if (!card?.detail) return null;
  const { heading, body } = card.detail;
  return (
    <div className="pf-detail-inner">
      <div className="pf-detail-eyebrow">상세</div>
      <h3 className="pf-detail-heading">{heading}</h3>
      <dl className="pf-detail-list">
        {body.map(([k, v], i) =>
        <div key={i} className="pf-detail-row">
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        )}
      </dl>
    </div>);

}

// ----- Craft detail: the audit-tool product showcase -----
function CraftDetail() {
  return (
    <div className="pf-detail-inner pf-craftd">
      <header className="pf-craftd-top">
        <a
          className="pf-craftd-cta"
          href="https://audit-toolkit-i1bv.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          바로가기 <span className="pf-craftd-cta-arrow">→</span>
        </a>
      </header>

      <div className="pf-craftd-zig">
        <figure className="pf-craftd-shot pf-craftd-shot--a">
          <figcaption className="pf-craftd-cap">메인</figcaption>
          <img src="assets/craft-1-hero.png" alt="메인 화면 — 현장에 가기 전에, 데이터로 먼저 공부한다" />
        </figure>
        <figure className="pf-craftd-shot pf-craftd-shot--b">
          <figcaption className="pf-craftd-cap">동작 방식</figcaption>
          <img src="assets/craft-2-flow.png" alt="업종을 고르면 동종업계 감사 패턴이 한눈에" />
        </figure>
        <figure className="pf-craftd-shot pf-craftd-shot--c">
          <figcaption className="pf-craftd-cap">기능 01 · 주석 도우미</figcaption>
          <img src="assets/craft-3-notes.png" alt="주석 도우미 — 동종업계 주석 빈도 체크리스트" />
        </figure>
        <figure className="pf-craftd-shot pf-craftd-shot--d">
          <figcaption className="pf-craftd-cap">기능 02 · KAM 학습</figcaption>
          <img src="assets/craft-4-kam.png" alt="KAM 학습 — 핵심감사사항 6단계 구조 학습" />
        </figure>
      </div>

      <div className="pf-craftd-built">Claude Code · 바이브 코딩으로 직접 설계·구축</div>
    </div>);

}

// ----- Projects card -----
function ProjectsCard({ projects, isOpen, onToggle }) {
  return (
    <div className={`pf-card pf-card-projects card-w4 ${isOpen ? 'is-open' : ''}`} onClick={onToggle}>
      <div className="pf-card-label">
        <span>참여 프로젝트</span>
      </div>
      <div className="pf-proj2-head">
        <div className="pf-proj2-headline">
          <div className="pf-proj2-title">2025 회계연도 기말 외부감사</div>
        </div>
      </div>
      <div className="pf-proj2-wall">
        {projects.map((p) =>
        <div key={p.id} className="pf-proj2-tile" data-proj={p.id}>
            <div className="pf-proj2-logo">
              <img src={p.logo} alt={p.client} />
            </div>
            <div className="pf-proj2-tile-foot">
              <span className="pf-proj2-tile-name">{p.client}</span>
              <span className="pf-proj2-tile-tag">{p.tag}</span>
            </div>
          </div>
        )}
      </div>
      <div className="pf-proj2-more">
        그 외 (주)신우 · (주)금와 · (주)대대건설 등 비상장사 3곳 기말 외부감사
      </div>
      <div className="pf-card-chev" aria-hidden="true">{isOpen ? '−' : '+'}</div>
    </div>);

}

function ProjectsDetail({ projects }) {
  return (
    <div className="pf-detail-inner pf-projd">
      <header className="pf-timeline-head">
        <div className="pf-timeline-eyebrow">Audit Engagements</div>
        <h2 className="pf-timeline-title">참여 <em>프로젝트</em></h2>
        <div className="pf-timeline-sub">2025 회계연도 기말 외부감사 · 2026.01–03</div>
      </header>
      <div className="pf-projd-list">
        {projects.map((p) =>
        <div key={p.id} className="pf-projd-row">
            <div className="pf-projd-logo"><img src={p.logo} alt={p.client} /></div>
            <div className="pf-projd-info">
              <div className="pf-projd-client">{p.client}</div>
              <div className="pf-projd-issue">{p.issue}</div>
            </div>
            <div className="pf-projd-meta">
              <span className="pf-projd-type">{p.type}</span>
              <span className="pf-projd-tag">{p.tag}</span>
            </div>
          </div>
        )}
      </div>
      <div className="pf-projd-more">
        그 외 (주)신우 · (주)금와 · (주)대대건설 등 비상장사 3곳 기말 외부감사
      </div>
    </div>);

}

Object.assign(window, {
  PORTFOLIO_CARDS,
  PROJECT_CARDS,
  CraftDetail,
  ProfileCard,
  CardDetail,
  ProjectsCard,
  ProjectsDetail
});