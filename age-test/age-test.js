// 心理年龄测试 主脚本

// 测试题目数据
const questions = [
    {
        id: 1,
        text: '周末早晨醒来，你第一件事想做什么？',
        dimension: '活力指数',
        options: [
            { value: 1, label: 'A. 继续赖床刷手机' },
            { value: 2, label: 'B. 起床做早餐，规划一天安排' },
            { value: 3, label: 'C. 约朋友出去吃brunch' }
        ]
    },
    {
        id: 2,
        text: '看到新出的电子产品，你的反应是？',
        dimension: '活力指数',
        options: [
            { value: 1, label: 'A. 立即研究参数，考虑入手' },
            { value: 2, label: 'B. 等评测出来再说' },
            { value: 3, label: 'C. 能用就行，不追求新款' }
        ]
    },
    {
        id: 3,
        text: '朋友约你晚上聚会，但明天要上班，你会？',
        dimension: '活力指数',
        options: [
            { value: 1, label: 'A. 果断参加，玩到尽兴' },
            { value: 2, label: 'B. 参加但会提前离开' },
            { value: 3, label: 'C. 直接拒绝，保证睡眠' }
        ]
    },
    {
        id: 4,
        text: '遇到喜欢的人，你会？',
        dimension: '情感成熟度',
        options: [
            { value: 1, label: 'A. 直接表白，不留遗憾' },
            { value: 2, label: 'B. 先观察了解，慢慢接近' },
            { value: 3, label: 'C. 暗恋就好，怕被拒绝' }
        ]
    },
    {
        id: 5,
        text: '对于婚姻的看法是？',
        dimension: '情感成熟度',
        options: [
            { value: 1, label: 'A. 顺其自然，遇到对的人就结' },
            { value: 2, label: 'B. 30岁前一定要结婚' },
            { value: 3, label: 'C. 婚姻不是必需品' }
        ]
    },
    {
        id: 6,
        text: '和伴侣吵架后，你通常？',
        dimension: '情感成熟度',
        options: [
            { value: 1, label: 'A. 立即道歉和解' },
            { value: 2, label: 'B. 冷静几天再沟通' },
            { value: 3, label: 'C. 等对方先低头' }
        ]
    },
    {
        id: 7,
        text: '发工资后第一笔开销通常是？',
        dimension: '责任意识',
        options: [
            { value: 1, label: 'A. 还信用卡/贷款' },
            { value: 2, label: 'B. 存起来或投资' },
            { value: 3, label: 'C. 买心仪已久的东西' }
        ]
    },
    {
        id: 8,
        text: '对于打折促销的态度是？',
        dimension: '责任意识',
        options: [
            { value: 1, label: 'A. 理性分析是否需要' },
            { value: 2, label: 'B. 看到便宜就囤货' },
            { value: 3, label: 'C. 很少关注促销信息' }
        ]
    },
    {
        id: 9,
        text: '在餐厅吃饭，发现菜品有问题，你会？',
        dimension: '责任意识',
        options: [
            { value: 1, label: 'A. 默默忍受，不惹麻烦' },
            { value: 2, label: 'B. 礼貌地向服务员反映' },
            { value: 3, label: 'C. 大声投诉，要求赔偿' }
        ]
    },
    {
        id: 10,
        text: '认识新朋友时，你更倾向于？',
        dimension: '社交模式',
        options: [
            { value: 1, label: 'A. 主动加微信，保持联系' },
            { value: 2, label: 'B. 随缘交往，不强求' },
            { value: 3, label: 'C. 保持距离，朋友贵精不贵多' }
        ]
    },
    {
        id: 11,
        text: '在社交场合，你通常是？',
        dimension: '社交模式',
        options: [
            { value: 1, label: 'A. 活跃气氛的焦点' },
            { value: 2, label: 'B. 安静的倾听者' },
            { value: 3, label: 'C. 适度的参与者' }
        ]
    },
    {
        id: 12,
        text: '对于微信朋友圈，你的态度是？',
        dimension: '社交模式',
        options: [
            { value: 1, label: 'A. 经常发动态分享生活' },
            { value: 2, label: 'B. 偶尔发重要事情' },
            { value: 3, label: 'C. 基本不看也不发' }
        ]
    },
    {
        id: 13,
        text: '面对新的工作挑战，你的第一反应是？',
        dimension: '责任意识',
        options: [
            { value: 1, label: 'A. 兴奋，机会来了' },
            { value: 2, label: 'B. 焦虑，怕做不好' },
            { value: 3, label: 'C. 淡定，按部就班' }
        ]
    },
    {
        id: 14,
        text: '对于加班的态度是？',
        dimension: '责任意识',
        options: [
            { value: 1, label: 'A. 年轻就该多奋斗' },
            { value: 2, label: 'B. 给够加班费就加' },
            { value: 3, label: 'C. 坚决维护休息时间' }
        ]
    },
    {
        id: 15,
        text: '学习新技能时，你更看重？',
        dimension: '人生智慧',
        options: [
            { value: 1, label: 'A. 兴趣和热爱' },
            { value: 2, label: 'B. 实用性和收益' },
            { value: 3, label: 'C. 难易程度' }
        ]
    },
    {
        id: 16,
        text: '理想的假期是？',
        dimension: '活力指数',
        options: [
            { value: 1, label: 'A. 宅家追剧打游戏' },
            { value: 2, label: 'B. 旅游探索新地方' },
            { value: 3, label: 'C. 朋友聚会逛街' }
        ]
    },
    {
        id: 17,
        text: '对于流行文化的了解程度？',
        dimension: '活力指数',
        options: [
            { value: 1, label: 'A. 紧跟潮流，什么都知道' },
            { value: 2, label: 'B. 只关注自己感兴趣的' },
            { value: 3, label: 'C. 完全不了解也不关心' }
        ]
    },
    {
        id: 18,
        text: '运动健身的频率是？',
        dimension: '活力指数',
        options: [
            { value: 1, label: 'A. 规律坚持，已成习惯' },
            { value: 2, label: 'B. 想起来才动一下' },
            { value: 3, label: 'C. 几乎不运动' }
        ]
    },
    {
        id: 19,
        text: '对于成功的定义是？',
        dimension: '情感成熟度',
        options: [
            { value: 1, label: 'A. 财富和地位' },
            { value: 2, label: 'B. 家庭幸福和睦' },
            { value: 3, label: 'C. 自我实现和自由' }
        ]
    },
    {
        id: 20,
        text: '面对别人的批评，你通常？',
        dimension: '情感成熟度',
        options: [
            { value: 1, label: 'A. 很受伤，久久不能释怀' },
            { value: 2, label: 'B. 理性分析，有则改之' },
            { value: 3, label: 'C. 不太在意别人的看法' }
        ]
    },
    {
        id: 21,
        text: '对于未来的规划，你？',
        dimension: '人生智慧',
        options: [
            { value: 1, label: 'A. 有详细的五年计划' },
            { value: 2, label: 'B. 有个大致方向' },
            { value: 3, label: 'C. 走一步看一步' }
        ]
    },
    {
        id: 22,
        text: '晚上睡觉前通常做什么？',
        dimension: '责任意识',
        options: [
            { value: 1, label: 'A. 刷手机到困' },
            { value: 2, label: 'B. 看书或听音乐' },
            { value: 3, label: 'C. 规划明天事项' }
        ]
    },
    {
        id: 23,
        text: '对于养生的态度是？',
        dimension: '人生智慧',
        options: [
            { value: 1, label: 'A. 枸杞泡茶，注重健康' },
            { value: 2, label: 'B. 偶尔注意，但不刻意' },
            { value: 3, label: 'C. 年轻就是资本，不在乎' }
        ]
    },
    {
        id: 24,
        text: '整理房间的频率是？',
        dimension: '责任意识',
        options: [
            { value: 1, label: 'A. 定期整理，保持整洁' },
            { value: 2, label: 'B. 看不下去时才整理' },
            { value: 3, label: 'C. 基本不整理，乱中有序' }
        ]
    },
    {
        id: 25,
        text: '面对压力时，你通常？',
        dimension: '情感成熟度',
        options: [
            { value: 1, label: 'A. 找人倾诉寻求帮助' },
            { value: 2, label: 'B. 自我调节消化' },
            { value: 3, label: 'C. 逃避或爆发情绪' }
        ]
    },
    {
        id: 26,
        text: '对于变化的适应能力？',
        dimension: '社交模式',
        options: [
            { value: 1, label: 'A. 很快适应并享受' },
            { value: 2, label: 'B. 需要时间慢慢调整' },
            { value: 3, label: 'C. 抗拒变化，喜欢稳定' }
        ]
    },
    {
        id: 27,
        text: '回忆往事时的感受是？',
        dimension: '社交模式',
        options: [
            { value: 1, label: 'A. 怀念过去的美好' },
            { value: 2, label: 'B. 聚焦当下的生活' },
            { value: 3, label: 'C. 憧憬未来的可能' }
        ]
    },
    {
        id: 28,
        text: '如果重来一次，你会？',
        dimension: '人生智慧',
        options: [
            { value: 1, label: 'A. 完全不同的活法' },
            { value: 2, label: 'B. 微调某些选择' },
            { value: 3, label: 'C. 基本保持原样' }
        ]
    },
    {
        id: 29,
        text: '对于年龄增长的感觉是？',
        dimension: '人生智慧',
        options: [
            { value: 1, label: 'A. 焦虑，害怕变老' },
            { value: 2, label: 'B. 坦然，每个阶段有每个阶段的美' },
            { value: 3, label: 'C. 期待，年龄带来智慧和从容' }
        ]
    },
    {
        id: 30,
        text: '你认为自己心理年龄大概是？',
        dimension: '人生智慧',
        options: [
            { value: 1, label: 'A. 比实际年龄小很多' },
            { value: 2, label: 'B. 和实际年龄相符' },
            { value: 3, label: 'C. 比实际年龄大一些' }
        ]
    }
];

// 维度配置
const dimensions = {
    '活力指数': {
        questions: [1, 2, 3, 16, 17, 18],
        color: '#FF6B6B',
        description: '反映你对新鲜事物、节奏感与自我驱动力的敏感度。'
    },
    '情感成熟度': {
        questions: [4, 5, 6, 19, 20, 25],
        color: '#FFA94D',
        description: '观察你在亲密关系、情绪调节与互相支持上的成熟度。'
    },
    '社交模式': {
        questions: [10, 11, 12, 26, 27],
        color: '#4ECDC4',
        description: '评估你在社交情境中的能量分配、边界感与互动方式。'
    },
    '责任意识': {
        questions: [7, 8, 9, 13, 14, 22, 24],
        color: '#5C7AEA',
        description: '衡量你在财务、工作与生活管理上的自律与优先顺序。'
    },
    '人生智慧': {
        questions: [15, 21, 23, 28, 29, 30],
        color: '#F06595',
        description: '呈现你对人生阶段转换、价值观与长期规划的整合度。'
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
            <div style="font-size:1.2em;color:#764ba2;letter-spacing:1px;">正在分析结果，请稍候...</div>
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
    let overallTotal = 0;
    let overallMax = 0;

    Object.keys(dimensions).forEach(dimensionName => {
        const questionIds = dimensions[dimensionName].questions;
        const maxScore = questionIds.length * 3;
        let totalScore = 0;

        questionIds.forEach(questionId => {
            const question = questions.find(q => q.id === questionId);
            let score = answers[questionId] || 0;
            if (question && question.reverse) score = 6 - score; // 反向题目（1-5量表）
            totalScore += score;
        });

        const percent = maxScore === 0 ? 0 : Math.round((totalScore / maxScore) * 100);
        dimensionScores[dimensionName] = { totalScore, maxScore, percent };
        overallTotal += totalScore;
        overallMax += maxScore;
    });

    const totalPercent = overallMax === 0 ? 0 : Math.round((overallTotal / overallMax) * 100);
    return { totalPercent, totalScore: overallTotal, totalMax: overallMax, dimensions: dimensionScores };
}

function interpretAgeBand(percent) {
    if (percent <= 35) {
        return {
            label: '心理年龄 20-30 岁 · 年轻心态',
            description: '你正处在高活力与高好奇的阶段，行动力十足，别忘了适度关注身体节奏与资源配置。',
            color: '#FF6B6B'
        };
    }
    if (percent <= 65) {
        return {
            label: '心理年龄 31-50 岁 · 成熟稳重',
            description: '你能兼顾理想与现实，面对任务稳健务实，可进一步规划个人品牌与长期目标。',
            color: '#FFA94D'
        };
    }
    if (percent <= 85) {
        return {
            label: '心理年龄 51-70 岁 · 智慧从容',
            description: '你拥有丰富的人生洞察，擅长统筹与判断，建议安排让身心保持活力的轻冒险体验。',
            color: '#4ECDC4'
        };
    }
    return {
        label: '心理年龄 70+ 岁 · 超然豁达',
        description: '你以全局视角与宽容心态面对世界，适时引入新鲜刺激与年轻伙伴可让生活更有生机。',
        color: '#5C7AEA'
    };
}

// 显示结果
function showResults(results) {
    const totalPercent = results.totalPercent;
    document.getElementById('total-score-number').textContent = `${totalPercent}%`;

    const band = interpretAgeBand(totalPercent);

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
            <p>正在生成心理年龄解读...</p>
        </div>
    `;
    try {
        const overallPercent = results.totalPercent;
        const band = interpretAgeBand(overallPercent);
        const dimensionLines = Object.entries(results.dimensions)
            .map(([name, stats]) => `- ${name}：${stats.percent}% (${stats.totalScore}/${stats.maxScore})`)
            .join('\n');

        const prompt = `你是一位发展心理学顾问。请根据以下心理年龄测试结果撰写一份洞察报告：

    心理年龄指数：${overallPercent}% (${results.totalScore}/${results.totalMax})
    心理年龄段：${band.label}
    各维度得分：
    ${dimensionLines}

    请从以下角度展开：
    1. 当前心理年龄段的心态特征与核心驱动力
    2. 五大维度的优势亮点与潜在盲区
    3. 在生活节奏、情感经营、人际社交与自我照顾上的可执行建议
    4. 可持续追踪的自我提问或微行动清单（至少2条）

    语气：专业、友好且具启发性
    长度：约600字
    避免出现“AI”或“测试题”等字样，以心理顾问口吻撰写。`;
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
                <p>⚠️ 心理年龄解读生成失败</p>
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
