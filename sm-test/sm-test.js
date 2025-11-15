// SM倾向测试 主脚本

// 测试题目数据
const questions = [
    {
        id: 1,
        text: '在团队项目中，你更倾向于？',
        dimension: '权力动态篇',
        options: [
            { value: 1, label: 'A. 听从领导安排，配合完成' },
            { value: 2, label: 'B. 主动承担领导角色，分配任务' },
            { value: 3, label: 'C. 独立完成自己部分，不喜欢被干涉' }
        ]
    },
    {
        id: 2,
        text: '当伴侣为你做决定时，你的感受是？',
        dimension: '权力动态篇',
        options: [
            { value: 1, label: 'A. 感到被关心和呵护' },
            { value: 2, label: 'B. 觉得不被尊重，想自己决定' },
            { value: 3, label: 'C. 取决于决定的内容和场合' }
        ]
    },
    {
        id: 3,
        text: '对于规则和界限，你的态度是？',
        dimension: '权力动态篇',
        options: [
            { value: 1, label: 'A. 规则让人有安全感' },
            { value: 2, label: 'B. 喜欢挑战和突破规则' },
            { value: 3, label: 'C. 视情况而定，灵活处理' }
        ]
    },
    {
        id: 4,
        text: '按摩时，你偏好？',
        dimension: '感官体验篇',
        options: [
            { value: 1, label: 'A. 轻柔舒缓的手法' },
            { value: 2, label: 'B. 力度适中，有痛感但舒服' },
            { value: 3, label: 'C. 强烈的按压，痛并快乐着' }
        ]
    },
    {
        id: 5,
        text: '吃辣的食物时，你？',
        dimension: '感官体验篇',
        options: [
            { value: 1, label: 'A. 完全不能接受辣' },
            { value: 2, label: 'B. 微辣即可，享受舌尖刺激' },
            { value: 3, label: 'C. 越辣越兴奋，享受那种灼热感' }
        ]
    },
    {
        id: 6,
        text: '运动后的肌肉酸痛让你？',
        dimension: '感官体验篇',
        options: [
            { value: 1, label: 'A. 很难受，想尽量避免' },
            { value: 2, label: 'B. 有点享受这种“努力过的证明”' },
            { value: 3, label: 'C. 特别喜欢这种身体的感觉' }
        ]
    },
    {
        id: 7,
        text: '在亲密关系中，你更看重？',
        dimension: '亲密关系篇',
        options: [
            { value: 1, label: 'A. 平等协商，共同决策' },
            { value: 2, label: 'B. 明确的角色分工' },
            { value: 3, label: 'C. 随性的相处模式' }
        ]
    },
    {
        id: 8,
        text: '当伴侣表现出强势时，你？',
        dimension: '亲密关系篇',
        options: [
            { value: 1, label: 'A. 感到不安和抗拒' },
            { value: 2, label: 'B. 觉得有吸引力' },
            { value: 3, label: 'C. 看心情决定是否配合' }
        ]
    },
    {
        id: 9,
        text: '关于承诺和忠诚，你认为？',
        dimension: '亲密关系篇',
        options: [
            { value: 1, label: 'A. 是关系的基础，必须严格遵守' },
            { value: 2, label: 'B. 可以有例外，只要双方同意' },
            { value: 3, label: 'C. 应该完全自由，不受约束' }
        ]
    },
    {
        id: 10,
        text: '犯错后被批评时，你？',
        dimension: '心理反应篇',
        options: [
            { value: 1, label: 'A. 感到羞愧难当' },
            { value: 2, label: 'B. 内心有些兴奋' },
            { value: 3, label: 'C. 理性接受，改正错误' }
        ]
    },
    {
        id: 11,
        text: '完成挑战性任务后，你希望？',
        dimension: '心理反应篇',
        options: [
            { value: 1, label: 'A. 获得表扬和认可' },
            { value: 2, label: 'B. 得到实质奖励' },
            { value: 3, label: 'C. 被赋予更难的挑战' }
        ]
    },
    {
        id: 12,
        text: '在压力环境下工作，你？',
        dimension: '心理反应篇',
        options: [
            { value: 1, label: 'A. 效率降低，想要逃避' },
            { value: 2, label: 'B. 表现出色，越压越强' },
            { value: 3, label: 'C. 表现平稳，不受影响' }
        ]
    },
    {
        id: 13,
        text: '阅读小说或看电影时，你更容易被？',
        dimension: '幻想与想象篇',
        options: [
            { value: 1, label: 'A. 浪漫温柔的情节吸引' },
            { value: 2, label: 'B. 权力斗争的情节吸引' },
            { value: 3, label: 'C. 冒险刺激的情节吸引' }
        ]
    },
    {
        id: 14,
        text: '关于“疼痛与快乐”的关系，你认为？',
        dimension: '幻想与想象篇',
        options: [
            { value: 1, label: 'A. 完全是两回事' },
            { value: 2, label: 'B. 有时会有联系' },
            { value: 3, label: 'C. 经常相辅相成' }
        ]
    },
    {
        id: 15,
        text: '在亲密时刻，你更喜欢？',
        dimension: '幻想与想象篇',
        options: [
            { value: 1, label: 'A. 温柔细腻的接触' },
            { value: 2, label: 'B. 强烈有力的接触' },
            { value: 3, label: 'C. 变化多样的体验' }
        ]
    },
    {
        id: 16,
        text: '有人为你制定详细计划时，你？',
        dimension: '控制与服从篇',
        options: [
            { value: 1, label: 'A. 感到被束缚' },
            { value: 2, label: 'B. 觉得省心省力' },
            { value: 3, label: 'C. 部分接受，部分调整' }
        ]
    },
    {
        id: 17,
        text: '在游戏中，你更喜欢？',
        dimension: '控制与服从篇',
        options: [
            { value: 1, label: 'A. 合作共赢的模式' },
            { value: 2, label: 'B. 竞争对抗的模式' },
            { value: 3, label: 'C. 角色扮演的模式' }
        ]
    },
    {
        id: 18,
        text: '当需要做重要决定时，你倾向于？',
        dimension: '控制与服从篇',
        options: [
            { value: 1, label: 'A. 独自决定，承担后果' },
            { value: 2, label: 'B. 听从信任的人的建议' },
            { value: 3, label: 'C. 民主投票，少数服从多数' }
        ]
    },
    {
        id: 19,
        text: '有人触碰你的个人界限时，你？',
        dimension: '界限测试篇',
        options: [
            { value: 1, label: 'A. 立即明确拒绝' },
            { value: 2, label: 'B. 视关系深浅决定' },
            { value: 3, label: 'C. 有时享受被突破的感觉' }
        ]
    },
    {
        id: 20,
        text: '关于“安全词”的概念，你觉得？',
        dimension: '界限测试篇',
        options: [
            { value: 1, label: 'A. 完全没必要' },
            { value: 2, label: 'B. 是个有趣的想法' },
            { value: 3, label: 'C. 很有必要，提供安全感' }
        ]
    },
    {
        id: 21,
        text: '在亲密关系中设立规则，你认为？',
        dimension: '界限测试篇',
        options: [
            { value: 1, label: 'A. 破坏浪漫氛围' },
            { value: 2, label: 'B. 增加情趣和期待' },
            { value: 3, label: 'C. 是关系健康的基础' }
        ]
    },
    {
        id: 22,
        text: '对于不同材质的触感，你？',
        dimension: '感官偏好篇',
        options: [
            { value: 1, label: 'A. 没有特别偏好' },
            { value: 2, label: 'B. 喜欢探索各种触感' },
            { value: 3, label: 'C. 对特定触感特别敏感' }
        ]
    },
    {
        id: 23,
        text: '温度变化给你的感受是？',
        dimension: '感官偏好篇',
        options: [
            { value: 1, label: 'A. 喜欢恒温舒适' },
            { value: 2, label: 'B. 享受适度的温差变化' },
            { value: 3, label: 'C. 喜欢极端的温度体验' }
        ]
    },
    {
        id: 24,
        text: '关于束缚感，你的感受是？',
        dimension: '感官偏好篇',
        options: [
            { value: 1, label: 'A. 令人焦虑' },
            { value: 2, label: 'B. 有时有安全感' },
            { value: 3, label: 'C. 经常带来兴奋' }
        ]
    },
    {
        id: 25,
        text: '面对恐惧和危险，你通常？',
        dimension: '心理强度篇',
        options: [
            { value: 1, label: 'A. 主动回避' },
            { value: 2, label: 'B. 适度尝试' },
            { value: 3, label: 'C. 积极寻求' }
        ]
    },
    {
        id: 26,
        text: '在情感表达上，你倾向于？',
        dimension: '心理强度篇',
        options: [
            { value: 1, label: 'A. 含蓄内敛' },
            { value: 2, label: 'B. 适度开放' },
            { value: 3, label: 'C. 强烈直接' }
        ]
    },
    {
        id: 27,
        text: '关于隐私和暴露，你的态度是？',
        dimension: '心理强度篇',
        options: [
            { value: 1, label: 'A. 注重隐私保护' },
            { value: 2, label: 'B. 在安全范围内可以分享' },
            { value: 3, label: 'C. 享受适度的暴露感' }
        ]
    },
    {
        id: 28,
        text: '回顾以往的亲密关系，你发现？',
        dimension: '综合倾向篇',
        options: [
            { value: 1, label: 'A. 喜欢温和平等的关系' },
            { value: 2, label: 'B. 有时渴望更强烈的情感体验' },
            { value: 3, label: 'C. 经常寻求 intensity 的情感连接' }
        ]
    },
    {
        id: 29,
        text: '对于“痛感”的耐受度，你？',
        dimension: '综合倾向篇',
        options: [
            { value: 1, label: 'A. 很低，尽量避免' },
            { value: 2, label: 'B. 一般，可以接受适度痛感' },
            { value: 3, label: 'C. 较高，甚至享受某些痛感' }
        ]
    },
    {
        id: 30,
        text: '在探索亲密关系模式时，你？',
        dimension: '综合倾向篇',
        options: [
            { value: 1, label: 'A. 保持传统安全的方式' },
            { value: 2, label: 'B. 愿意尝试新的可能性' },
            { value: 3, label: 'C. 主动寻求边缘体验' }
        ]
    }
];

// 维度配置
const dimensions = {
    '支配倾向': {
        questions: [1, 7, 11, 17, 18, 24],
        color: '#d94862',
        description: '评估你在亲密互动中掌控场景、设定节奏的欲望与舒适度。'
    },
    '服从倾向': {
        questions: [2, 8, 10, 16, 26, 28],
        color: '#7950f2',
        description: '反映你在被引导、服从安排时的心理安全感与愉悦感。'
    },
    '感官寻求': {
        questions: [4, 5, 6, 14, 22, 29],
        color: '#ffa94d',
        description: '呈现你对痛觉、束缚、触觉等身体刺激的接受度。'
    },
    '边缘探索': {
        questions: [12, 13, 23, 25, 27, 30],
        color: '#20c997',
        description: '衡量你对冒险元素、角色扮演与非传统体验的好奇心与投入度。'
    },
    '规则接受度': {
        questions: [3, 9, 15, 19, 20, 21],
        color: '#1c7ed6',
        description: '考察你对界限、安全词、契约化安排与事后照护的重视程度。'
    }
};

// 全局变量
let answers = {};
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let isTransitioning = false; // 防止跳转期间重复点击

// 开始测试
function startTest() {
    shuffledQuestions = [...questions];
    currentQuestionIndex = 0;
    answers = {};
    document.getElementById('progress-header').style.display = 'block';
    showPage('question-page');
    renderCurrentQuestion();
    updateProgress();
}

// 显示页面
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    if (pageId === 'start-page' || pageId === 'result-page') {
        document.getElementById('progress-header').style.display = 'none';
    } else {
        document.getElementById('progress-header').style.display = 'block';
    }
}

// 渲染当前问题
function renderCurrentQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    document.getElementById('question-number').textContent = `题目 ${currentQuestionIndex + 1} / ${questions.length}`;
    document.getElementById('question-text').textContent = question.text;
    const optionsContainer = document.getElementById('question-options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('label');
        optionDiv.className = 'option';
        const isSelected = answers[question.id] === option.value;
        if (isSelected) optionDiv.classList.add('selected');
        const optionId = `q${question.id}-opt${index}`;
        optionDiv.innerHTML = `
            <input type="radio" id="${optionId}" name="question-${question.id}" value="${option.value}" ${isSelected ? 'checked' : ''}>
            <span class="option-label">${option.label}</span>
        `;
        optionDiv.addEventListener('click', (e) => {
            e.preventDefault();
            selectOption(question.id, option.value);
        });
        optionsContainer.appendChild(optionDiv);
    });
    updateNavigationButtons();
}

// 选择选项
function selectOption(questionId, value) {
    if (isTransitioning) return;
    const optionValue = parseInt(value, 10);
    answers[questionId] = optionValue;
    const optionsContainer = document.getElementById('question-options');
    const allOptions = optionsContainer.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.remove('selected', 'animate'));
    const selectedInput = optionsContainer.querySelector(`input[name="question-${questionId}"][value="${optionValue}"]`);
    if (selectedInput) {
        selectedInput.checked = true;
        const selectedOption = selectedInput.closest('.option');
        if (selectedOption) {
            selectedOption.classList.add('selected', 'animate');
            selectedOption.addEventListener('animationend', function handler() {
                selectedOption.classList.remove('animate');
                selectedOption.removeEventListener('animationend', handler);
            });
        }
    }
    updateProgress();
    updateNavigationButtons();
    isTransitioning = true;
    setTimeout(() => {
        const isLastQuestion = currentQuestionIndex === questions.length - 1;
        if (isLastQuestion) {
            showOverview();
        } else {
            currentQuestionIndex++;
            renderCurrentQuestion();
            updateProgress();
        }
        isTransitioning = false;
    }, 300);
}

// 更新进度条
function updateProgress() {
    const answeredCount = Object.keys(answers).length;
    const progress = (answeredCount / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `题目 ${currentQuestionIndex + 1} / ${questions.length}`;
    document.getElementById('progress-percentage').textContent = Math.round(progress) + '%';
}

// 更新导航按钮
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    prevBtn.disabled = currentQuestionIndex === 0;
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const hasAnswer = currentQuestion && answers[currentQuestion.id] !== undefined;
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.textContent = hasAnswer ? '查看总览' : '下一题';
        nextBtn.disabled = false;
    } else {
        nextBtn.textContent = '下一题';
        nextBtn.disabled = !hasAnswer;
    }
}

// 上一题
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderCurrentQuestion();
        updateProgress();
    }
}

// 下一题
function nextQuestion() {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (currentQuestionIndex === questions.length - 1) {
        showOverview();
    } else if (answers[currentQuestion.id] !== undefined) {
        currentQuestionIndex++;
        renderCurrentQuestion();
        updateProgress();
    }
}

// 显示答题总览
function showOverview() {
    showPage('overview-page');
    renderOverview();
}

// 渲染答题总览
function renderOverview() {
    const container = document.getElementById('overview-container');
    container.innerHTML = '';
    shuffledQuestions.forEach((question, index) => {
        const hasAnswer = answers[question.id] !== undefined;
        let answerText = '未回答';
        if (hasAnswer) {
            const answerValue = answers[question.id];
            const option = question.options.find(opt => opt.value === answerValue);
            answerText = option ? option.label : '未回答';
        }
        const questionDiv = document.createElement('div');
        questionDiv.className = `overview-question ${hasAnswer ? 'answered' : 'unanswered'}`;
        questionDiv.innerHTML = `
            <div class="overview-text">${index + 1}. ${question.text}</div>
            <div class="overview-answer">${answerText}</div>
        `;
        questionDiv.addEventListener('click', () => {
            currentQuestionIndex = index;
            showPage('question-page');
            renderCurrentQuestion();
        });
        container.appendChild(questionDiv);
    });
}

// 返回答题
function backToQuestion() {
    showPage('question-page');
    renderCurrentQuestion();
}

// 分析结果
function analyzeResults() {
    if (Object.keys(answers).length < questions.length) {
        alert('请完成所有题目后再进行分析！');
        return;
    }
    showLoadingTransition();
    setTimeout(() => {
        const results = calculateResults();
        showResults(results);
        hideLoadingTransition();
        showPage('result-page');
    }, 2000);
}

// 加载动画
function showLoadingTransition() {
    let loadingDiv = document.getElementById('analyze-loading-transition');
    if (!loadingDiv) {
        loadingDiv = document.createElement('div');
        loadingDiv.id = 'analyze-loading-transition';
        Object.assign(loadingDiv.style, {
            position: 'fixed', left: '0', top: '0', width: '100vw', height: '100vh', background: 'rgba(255,255,255,0.96)',
            zIndex: '9999', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        });
        loadingDiv.innerHTML = `
            <div style="margin-bottom:18px;">
                <div class="loading-spinner" style="width:48px;height:48px;border-width:4px;"></div>
            </div>
            <div style="font-size:1.2em;color:#667eea;letter-spacing:1px;">正在分析SM倾向，请稍候...</div>
        `;
        document.body.appendChild(loadingDiv);
    } else {
        loadingDiv.style.display = 'flex';
    }
}
function hideLoadingTransition() {
    const loadingDiv = document.getElementById('analyze-loading-transition');
    if (loadingDiv) loadingDiv.style.display = 'none';
}

// 计算结果
function calculateResults() {
    const dimensionScores = {};

    Object.keys(dimensions).forEach(dimensionName => {
        const questionIds = dimensions[dimensionName].questions;
        const maxScore = questionIds.length * 3;
        let totalScore = 0;

        questionIds.forEach(questionId => {
            const score = answers[questionId] || 0;
            totalScore += score;
        });

        const percent = maxScore === 0 ? 0 : Math.round((totalScore / maxScore) * 100);
        dimensionScores[dimensionName] = { totalScore, maxScore, percent };
    });

    const overallTotal = questions.reduce((sum, question) => sum + (answers[question.id] || 0), 0);
    const overallMax = questions.length * 3;
    const totalPercent = overallMax === 0 ? 0 : Math.round((overallTotal / overallMax) * 100);

    return { totalPercent, totalScore: overallTotal, totalMax: overallMax, dimensions: dimensionScores };
}

function interpretSmLevel(percent) {
    if (percent <= 39) {
        return {
            label: '低倾向 · 偏好传统与温和节奏',
            description: '你对 SM 元素兴趣有限，更重视安全与均衡关系；若探索，请缓慢推进并把沟通放在首位。',
            color: '#4263eb'
        };
    }
    if (percent <= 69) {
        return {
            label: '中等倾向 · 开放且注重界限',
            description: '你愿意在信任关系中体验权力交换与感官刺激，建议持续强化安全词、沟通与事后关怀。',
            color: '#f08c00'
        };
    }
    return {
        label: '高倾向 · 追求强烈与深度体验',
        description: '你对 SM 场景具高度好奇与驱动力，务必建立清晰契约、渐进式训练与完善的安全保护。',
        color: '#c2255c'
    };
}

// 显示结果
function showResults(results) {
    const totalPercent = results.totalPercent;
    document.getElementById('total-score-number').textContent = `${totalPercent}%`;

    const band = interpretSmLevel(totalPercent);

    document.getElementById('score-label').textContent = band.label;
    document.getElementById('score-description').textContent = band.description;
    document.querySelector('.total-score-display').style.background = `linear-gradient(135deg, ${band.color} 0%, ${band.color}dd 100%)`;

    const dimensionScoresContainer = document.getElementById('dimension-scores');
    dimensionScoresContainer.innerHTML = '';
    Object.keys(results.dimensions).forEach(dimension => {
        const { percent, totalScore, maxScore } = results.dimensions[dimension];
        const meta = dimensions[dimension] || {};
        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'dimension-score';
        scoreDiv.innerHTML = `
            <div class="dimension-score-header">
                <span class="dimension-name">${dimension}</span>
                <span class="score-value">${percent}% (${totalScore}/${maxScore})</span>
            </div>
            <div class="dimension-progress-bar">
                <div class="dimension-progress-fill" style="width: ${percent}%; background: ${meta.color || '#667eea'}">
                    ${percent >= 10 ? percent + '%' : ''}
                </div>
            </div>
            ${meta.description ? `<div class="dimension-description">${meta.description}</div>` : ''}
        `;
        dimensionScoresContainer.appendChild(scoreDiv);
    });

    drawRadarChart(results.dimensions);
    generateAIAnalysis(results);
}

// 雷达图
function drawRadarChart(dimensionScores) {
    const container = document.getElementById('radar-chart-container');
    const padding = 35;
    const svgSize = 360 + padding * 2;
    const centerX = svgSize / 2;
    const centerY = svgSize / 2;
    const radius = 150;
    const labelDistance = radius + 30;
    const dimensionNames = Object.keys(dimensionScores);
    const angleStep = (2 * Math.PI) / dimensionNames.length;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', `0 0 ${svgSize} ${svgSize}`);
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    for (let i = 1; i <= 5; i++) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', centerX);
        circle.setAttribute('cy', centerY);
        circle.setAttribute('r', (radius * i) / 5);
        circle.setAttribute('fill', 'none');
        circle.setAttribute('stroke', '#e9ecef');
        circle.setAttribute('stroke-width', '1');
        svg.appendChild(circle);
    }
    dimensionNames.forEach((_, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', centerX);
        line.setAttribute('y1', centerY);
        line.setAttribute('x2', x);
        line.setAttribute('y2', y);
        line.setAttribute('stroke', '#e9ecef');
        line.setAttribute('stroke-width', '1');
        svg.appendChild(line);
    });
    for (let i = 1; i <= 5; i++) {
        const labelValue = i * 20;
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', centerX + 5);
        text.setAttribute('y', centerY - (radius * i) / 5 + 3);
        text.setAttribute('fill', '#999');
        text.setAttribute('font-size', '10');
        text.setAttribute('font-family', 'Arial, sans-serif');
        text.textContent = labelValue.toString();
        svg.appendChild(text);
    }
    let polygonPoints = '';
    const dataPoints = [];
    dimensionNames.forEach((dimension, index) => {
        const score = dimensionScores[dimension] ? dimensionScores[dimension].percent : 0;
        const angle = index * angleStep - Math.PI / 2;
        const distance = (score / 100) * radius;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        polygonPoints += `${x},${y} `;
        dataPoints.push({ x, y });
    });
    const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    polygon.setAttribute('points', polygonPoints.trim());
    polygon.setAttribute('fill', 'rgba(102, 126, 234, 0.2)');
    polygon.setAttribute('stroke', '#667eea');
    polygon.setAttribute('stroke-width', '3');
    polygon.setAttribute('stroke-linejoin', 'round');
    svg.appendChild(polygon);
    dataPoints.forEach(point => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', point.x);
        circle.setAttribute('cy', point.y);
        circle.setAttribute('r', '5');
        circle.setAttribute('fill', '#667eea');
        svg.appendChild(circle);
    });
    dimensionNames.forEach((dimension, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const x = centerX + Math.cos(angle) * labelDistance;
        const y = centerY + Math.sin(angle) * labelDistance;
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x);
        text.setAttribute('y', y);
        text.setAttribute('fill', '#333');
        text.setAttribute('font-size', '12');
        text.setAttribute('font-weight', '500');
        text.setAttribute('font-family', 'Arial, Microsoft YaHei, sans-serif');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.textContent = dimension;
        svg.appendChild(text);
    });
    container.innerHTML = '';
    container.appendChild(svg);
}

// 生成AI分析
async function generateAIAnalysis(results) {
    const aiContainer = document.getElementById('ai-analysis-container');
    if (!aiContainer) return;
    aiContainer.innerHTML = `
        <div class="ai-loading">
            <div class="loading-spinner"></div>
            <p>正在生成SM倾向解读...</p>
        </div>
    `;
    try {
        const overallPercent = results.totalPercent;
        const band = interpretSmLevel(overallPercent);
        const dimensionLines = Object.entries(results.dimensions)
            .map(([name, stats]) => `- ${name}：${stats.percent}% (${stats.totalScore}/${stats.maxScore})`)
            .join('\n');

        const prompt = `你是一位熟悉 BDSM 与亲密关系心理学的咨询师。请根据以下测评结果撰写一份 SM 倾向洞察报告：

    SM 倾向指数：${overallPercent}% (${results.totalScore}/${results.totalMax})
    整体等级：${band.label}
    各维度得分：
    ${dimensionLines}

    撰写要点：
    1. 解析受测者在权力交换、顺从/掌控、感官刺激等方面的核心特点与心理动机
    2. 点明五大维度的显著优势与潜在风险，特别关注安全界限与情绪调节
    3. 提供可执行的练习建议，涵盖沟通、安全词、事后照护、自我觉察等面向
    4. 给出至少两条可以持续追踪的自我提问或微行动，帮助建立负责任的探索流程

    语气：专业、尊重且具支持性
    长度：约600字
    避免出现“AI”或“测试题”等字样，以资深 SM 关系顾问的口吻撰写。`;
        // 调用通义千问API
        const response = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer sk-729c16f59e8e4295bec0ba0ac4d6a61e'
            },
            body: JSON.stringify({
                model: 'qwen-turbo',
                messages: [
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 1000
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `API错误: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.choices && data.choices[0] && data.choices[0].message) {
            const content = data.choices[0].message.content;
            
            // 显示分析结果
            aiContainer.innerHTML = `
                <div class="ai-analysis-content">
                    ${formatMarkdown(content)}
                </div>
            `;
        } else {
            throw new Error('API返回格式错误');
        }
    } catch (error) {
        console.error('AI分析错误:', error);
        aiContainer.innerHTML = `
            <div class="ai-error">
                <p>⚠️ SM倾向解读生成失败</p>
                <p style="font-size: 0.9em; margin-top: 10px;">${error.message}</p>
                <button onclick="retryAIAnalysis()">重新生成</button>
            </div>
        `;
    }
}

// Markdown格式化
function formatMarkdown(text) {
    if (!text) return '';
    let paragraphs = text.split(/\n\n+/);
    let html = '';
    paragraphs.forEach(para => {
        para = para.trim();
        if (!para) return;
        if (para.match(/^[\d]+\.\s/m) || para.match(/^[-*]\s/m)) {
            const items = para.split('\n').map(line => {
                line = line.trim();
                line = line.replace(/^[\d]+\.\s/, '').replace(/^[-*]\s/, '');
                line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                return `<li>${line}</li>`;
            }).join('');
            if (para.match(/^[\d]+\.\s/m)) html += `<ol>${items}</ol>`; else html += `<ul>${items}</ul>`;
        } else {
            para = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            para = para.replace(/\n/g, '<br>');
            html += `<p>${para}</p>`;
        }
    });
    return html;
}

// 重试AI
function retryAIAnalysis() {
    const results = calculateResults();
    generateAIAnalysis(results);
}

// 暴露需要在HTML中调用的函数
window.startTest = startTest;
window.previousQuestion = previousQuestion;
window.nextQuestion = nextQuestion;
window.backToQuestion = backToQuestion;
window.analyzeResults = analyzeResults;
window.retryAIAnalysis = retryAIAnalysis;
