// app.jsx — Portfolio main app
const { useState, useEffect, useRef, useLayoutEffect } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#E8242C",
  "cornerStyle": "sharp",
  "darkMode": false,
  "namePrimary": "korean"
}/*EDITMODE-END*/;

function Header({ tweaks }) {
  const isEnglishPrimary = tweaks.namePrimary === 'english';
  return (
    <header className="pf-header">
      <div className="pf-header-photo">
        <div className="pf-photo-frame">
          <img className="pf-photo-img" src="assets/profile.png" alt="윤종빈" />
        </div>
      </div>
      <div className="pf-header-name">
        <div className="pf-tagline">
          <span className="pf-tagline-text">주체적인 삶의 궤적으로 증명한 실행력,<br/>풀 스택형 회계사가 되겠습니다.</span>
        </div>
        {isEnglishPrimary ? (
          <>
            <div className="pf-name-ko-small">윤 종 빈</div>
            <h1 className="pf-name-en-big">Yoon<br/>Jongbeen</h1>
          </>
        ) : (
          <>
            <h1 className="pf-name-ko-big">윤 종 빈</h1>
            <div className="pf-name-en-small">Yoon Jongbeen</div>
          </>
        )}
      </div>
    </header>
  );
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', tweaks.accentColor);
    root.style.setProperty('--radius', tweaks.cornerStyle === 'rounded' ? '14px' : tweaks.cornerStyle === 'soft' ? '6px' : '0px');
    document.body.classList.toggle('dark', !!tweaks.darkMode);
  }, [tweaks]);

  const handleToggle = (id) => {
    setOpenId((cur) => (cur === id ? null : id));
  };

  return (
    <div className="pf-root">
      <div className={`pf-page ${openId ? 'has-detail' : ''}`}>
        <div className="pf-stage">
          <div className="pf-stage-main">
            <Header tweaks={tweaks} />

            <main className="pf-grid">
              {PORTFOLIO_CARDS.map((c) => (
                <ProfileCard
                  key={c.id}
                  card={c}
                  isOpen={openId === c.id}
                  onToggle={() => handleToggle(c.id)}
                />
              ))}
              <ProjectsCard
                projects={PROJECT_CARDS}
                isOpen={openId === 'projects'}
                onToggle={() => handleToggle('projects')}
              />
            </main>

            <footer className="pf-footer">
              <div className="pf-contact">
                <a className="pf-contact-item" href="mailto:whdqls5712@naver.com">
                  <span className="pf-contact-key">Email</span>
                  <span className="pf-contact-val">whdqls5712@naver.com</span>
                </a>
                <a className="pf-contact-item" href="tel:+821082865712">
                  <span className="pf-contact-key">Phone</span>
                  <span className="pf-contact-val">010-8286-5712</span>
                </a>
                <a className="pf-contact-item" href="https://github.com/jongbeeny" target="_blank" rel="noopener noreferrer">
                  <span className="pf-contact-key">GitHub</span>
                  <span className="pf-contact-val">github.com/jongbeeny</span>
                </a>
              </div>
            </footer>
          </div>

          <aside className="pf-stage-detail" aria-hidden={!openId}>
            {openId && (
              <DetailPanel
                openId={openId}
                onClose={() => setOpenId(null)}
              />
            )}
          </aside>
        </div>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection title="비주얼">
          <TweakColor
            label="포인트 컬러"
            value={tweaks.accentColor}
            onChange={(v) => setTweak('accentColor', v)}
          />
          <TweakRadio
            label="카드 모서리"
            value={tweaks.cornerStyle}
            options={[
              { value: 'sharp', label: '각짐' },
              { value: 'soft', label: '살짝' },
              { value: 'rounded', label: '둥글게' },
            ]}
            onChange={(v) => setTweak('cornerStyle', v)}
          />
          <TweakToggle
            label="다크모드"
            value={tweaks.darkMode}
            onChange={(v) => setTweak('darkMode', v)}
          />
        </TweakSection>
        <TweakSection title="레이아웃">
          <TweakRadio
            label="이름 표기"
            value={tweaks.namePrimary}
            options={[
              { value: 'korean', label: '한글' },
              { value: 'english', label: '영문' },
            ]}
            onChange={(v) => setTweak('namePrimary', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

// DetailPanel: slides in from the right (1:1 split)
function DetailPanel({ openId, onClose }) {
  const isTimeline = TIMELINE_CARDS.includes(openId);
  const card = openId === 'projects' || isTimeline
    ? null
    : PORTFOLIO_CARDS.find((c) => c.id === openId);
  return (
    <div className="pf-detailpanel">
      <button
        className="pf-detailpanel-close"
        onClick={onClose}
        aria-label="닫기"
      >
        ✕
      </button>
      {isTimeline
        ? <TimelineDetail activeCardId={openId} />
        : openId === 'projects'
          ? <ProjectsDetail projects={PROJECT_CARDS} />
          : openId === 'craft'
            ? <CraftDetail />
            : <CardDetail card={card} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
