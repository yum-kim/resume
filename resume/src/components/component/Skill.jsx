import React from 'react';

const Skill = () => {
    return (
        <article className='box'>
            <span className='english-title'>Skills</span>
            <h2 className='main-title mb'>기술</h2>
            <div className='container'>
                <h3 className='sub-title check'>HTML / CSS</h3>
                <p className='item bullet'>Semantic한 Markup을 지향하며, HTML의 구조를 한 눈에 파악할 수 있도록 합니다.</p>
                <p className='item bullet'>웹 표준을 준수하며, 접근성 높은 웹 페이지를 구현합니다.</p>
                <p className='item bullet'>Chrome, Safari, Firefox 등 여러 브라우저에서 동일한 화면을 볼 수 있도록 크로스 브라우징 작업이 가능합니다.</p>
                <p className='item bullet'>반응형 웹을 구현할 수 있습니다.</p>
                <p className='item bullet'>SCSS, Post CSS, Styled-component를 사용해 스타일링을 적용할 수 있습니다.</p>
            </div>
            <div className="container">
                <h3 className='sub-title check'>JavaScript</h3>
                <p className='item bullet'>ES6 문법 사용에 익숙합니다.</p>
                <p className='item bullet'>ES5 문법으로 코드를 작성할 수 있으며, Babel을 사용하여 이를 변환할 수 있습니다.</p>
                <p className='item bullet'>webpack을 사용한 개발환경 구축 경험이 있습니다.</p>
                <p className='item bullet'>JavaScript의 동작원리를 이해하고 이를 바탕으로 코드를 작성합니다.</p>
                <p className='item bullet'>TypeScript를 사용할 수 있습니다.</p>
                <p className='item bullet'>서버 API 통신과 이에 따른 비동기 처리 작업에 익숙합니다.</p>
                <p className='item bullet'>jQuery 라이브러리를 사용한 코드 작성에 익숙합니다.</p>
                <p className='item bullet'>브라우저의 렌더링 원리를 이해하고 최적화된 프론트 코드 작성을 위해 노력합니다.</p>
            </div>
            <div className="container">
                <h3 className='sub-title check'>SPA Framework</h3>
                <p className='item bullet'>기존 jQuery로 작업하던 개발환경에서 React를 프로젝트에 적용해 마이그레이션 해 본 경험이 있습니다.</p>
                <p className='item bullet'>Redux, Redux-Saga를 사용한 상태관리가 가능합니다.</p>
            </div>
            <div className="container">
                <h3 className='sub-title check'>AWS</h3>
                <p className='item bullet'>S3를 통한 코드 배포 경험이 있습니다.</p>
                <p className='item bullet'>CloudFront를 통한 CDN 사용 경험이 있습니다.</p>
            </div>
            <div className="container">
                <h3 className='sub-title check'>Etc</h3>
                <p className='item bullet'>npm</p>
                <p className='item bullet'>pm2</p>
                <p className='item bullet'>swagger, postman</p>
            </div>
        </article>
    );
};

export default Skill;