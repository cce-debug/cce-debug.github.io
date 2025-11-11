// 动物人格测试 数据配置

// 测试题目数据
const questions = [
    { id: 1, text: '你做事是一个值得信赖的人吗？', dimension: '猫头鹰型', reverse: false },
    { id: 2, text: '你个性温和吗？', dimension: '考拉型', reverse: false },
    { id: 3, text: '你有活力吗？', dimension: '孔雀型', reverse: false },
    { id: 4, text: '你善解人意吗？', dimension: '变色龙型', reverse: false },
    { id: 5, text: '你独立吗？', dimension: '老虎型', reverse: false },
    { id: 6, text: '你受人爱戴吗？', dimension: '孔雀型', reverse: false },
    { id: 7, text: '你做事认真且正直吗？', dimension: '猫头鹰型', reverse: false },
    { id: 8, text: '你富有同情心吗？', dimension: '考拉型', reverse: false },
    { id: 9, text: '你有说服力吗？', dimension: '变色龙型', reverse: false },
    { id: 10, text: '你大胆吗？', dimension: '老虎型', reverse: false },
    { id: 11, text: '你精确吗？', dimension: '猫头鹰型', reverse: false },
    { id: 12, text: '你适应能力强吗？', dimension: '变色龙型', reverse: false },
    { id: 13, text: '你组织能力好吗？', dimension: '孔雀型', reverse: false },
    { id: 14, text: '你是否积极主动？', dimension: '老虎型', reverse: false },
    { id: 15, text: '你害羞吗？', dimension: '考拉型', reverse: false },
    { id: 16, text: '你强势吗？', dimension: '猫头鹰型', reverse: false },
    { id: 17, text: '你镇定吗？', dimension: '考拉型', reverse: false },
    { id: 18, text: '你勇于学习吗？', dimension: '老虎型', reverse: false },
    { id: 19, text: '你反应快吗？', dimension: '变色龙型', reverse: false },
    { id: 20, text: '你外向吗？', dimension: '孔雀型', reverse: false },
    { id: 21, text: '你注意细节吗？', dimension: '猫头鹰型', reverse: false },
    { id: 22, text: '你爱说话吗？', dimension: '孔雀型', reverse: false },
    { id: 23, text: '你的协调能力好吗？', dimension: '变色龙型', reverse: false },
    { id: 24, text: '你勤劳吗？', dimension: '老虎型', reverse: false },
    { id: 25, text: '你慷慨吗？', dimension: '考拉型', reverse: false },
    { id: 26, text: '你小心翼翼吗？', dimension: '猫头鹰型', reverse: false },
    { id: 27, text: '你令人愉快吗？', dimension: '变色龙型', reverse: false },
    { id: 28, text: '你传统吗？', dimension: '考拉型', reverse: false },
    { id: 29, text: '你亲切吗？', dimension: '孔雀型', reverse: false },
    { id: 30, text: '你工作足够有效率吗？', dimension: '老虎型', reverse: false }
];

// 选项标签
const options = [
    { value: 5, label: '非常同意（5分）' },
    { value: 4, label: '比较同意（4分）' },
    { value: 3, label: '差不多（3分）' },
    { value: 2, label: '有一点同意（2分）' },
    { value: 1, label: '不同意（1分）' }
];

// 维度配置
const dimensions = {
    '老虎型': { questions: [5, 10, 14, 18, 24, 30], color: '#FF6B6B' },
    '孔雀型': { questions: [3, 6, 13, 20, 22, 29], color: '#FFA94D' },
    '考拉型': { questions: [2, 8, 15, 17, 25, 28], color: '#4ECDC4' },
    '猫头鹰型': { questions: [1, 7, 11, 16, 21, 26], color: '#5C7AEA' },
    '变色龙型': { questions: [4, 9, 12, 19, 23, 27], color: '#1FA2FF' }
};

const typeProfiles = {
    '老虎型': {
        core: '果断、掌控、结果导向',
        strengths: '决策力强，善于领导团队达成目标',
        challenges: '可能缺乏耐心，容易显得过于强势'
    },
    '孔雀型': {
        core: '热情、表达、人际导向',
        strengths: '善于沟通与激励，营造活跃氛围',
        challenges: '可能过于乐观而忽视细节或执行力'
    },
    '考拉型': {
        core: '耐心、稳定、关系维护',
        strengths: '提供安全感，乐于倾听并维护团队关系',
        challenges: '可能回避冲突，对改变与决策较为保守'
    },
    '猫头鹰型': {
        core: '精确、分析、流程导向',
        strengths: '思维严谨，擅长规划、把控风险',
        challenges: '可能过于完美主义，对他人要求偏高'
    },
    '变色龙型': {
        core: '适应、整合、灵活应对',
        strengths: '能快速调整策略，善于协调各方资源',
        challenges: '可能缺乏明确立场或长期方向'
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

    options.forEach(option => {
        const optionDiv = document.createElement('label');
        optionDiv.className = 'option';
        const isSelected = answers[question.id] === option.value;
        if (isSelected) optionDiv.classList.add('selected');
        optionDiv.innerHTML = `
            <input type="radio" name="current-question" value="${option.value}" ${isSelected ? 'checked' : ''}>
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
    answers[questionId] = parseInt(value);
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected', 'animate'));
    const selectedOption = document.querySelector(`input[value="${value}"]`).closest('.option');
    if (selectedOption) {
        selectedOption.classList.add('selected', 'animate');
        selectedOption.addEventListener('animationend', function handler() {
            selectedOption.classList.remove('animate');
            selectedOption.removeEventListener('animationend', handler);
        });
    }
    document.querySelector(`input[value="${value}"]`).checked = true;
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
            const option = options.find(opt => opt.value === answerValue);
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
        const maxScore = questionIds.length * 5;
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
    const rankedDimensions = Object.entries(dimensionScores)
        .map(([name, stats]) => ({ name, ...stats }))
        .sort((a, b) => b.totalScore - a.totalScore);

    return { totalPercent, totalScore: overallTotal, totalMax: overallMax, dimensions: dimensionScores, rankedDimensions };
}

// 显示结果
function showResults(results) {
    const dimensionEntries = results.rankedDimensions ? [...results.rankedDimensions] : Object.entries(results.dimensions).map(([name, stats]) => ({ name, ...stats })).sort((a, b) => b.totalScore - a.totalScore);

    const top = dimensionEntries[0];
    const second = dimensionEntries[1];
    const bottom = dimensionEntries[dimensionEntries.length - 1];
    const topColor = dimensions[top.name]?.color || '#667eea';
    const topProfile = typeProfiles[top.name];

    let badge = '综合型';
    const descriptionParts = [];
    const secondProfile = second ? typeProfiles[second.name] : null;

    if (top.totalScore >= 21) {
        badge = '典型型';
        descriptionParts.push(`你的主导动物类型为${top.name}（${top.totalScore}/30，${top.percent}%），展现出${topProfile ? topProfile.core : '鲜明的行为风格' }。`);
        if (topProfile) {
            descriptionParts.push(`优势：${topProfile.strengths}。`);
            descriptionParts.push(`留意：${topProfile.challenges}，适时邀请伙伴给出回馈。`);
        }
    } else if (second && top.totalScore >= 18 && second.totalScore >= 18) {
        badge = '双主导型';
        descriptionParts.push(`你同时呈现${top.name}（${top.totalScore}/30）与${second.name}（${second.totalScore}/30）的双主导风格，可依情境在两者间灵活切换。`);
        const strengthNotes = [
            topProfile ? `在${top.name}模式下${topProfile.strengths}` : '',
            secondProfile ? `在${second.name}模式下${secondProfile.strengths}` : ''
        ].filter(Boolean).join('，');
        if (strengthNotes) descriptionParts.push(`${strengthNotes}。`);
        descriptionParts.push('建议事先界定两种角色的使用情境，避免能量分散或讯息不一致。');
    } else if (top.totalScore - bottom.totalScore <= 8) {
        badge = '均衡型';
        descriptionParts.push(`五种动物类型得分差距仅 ${top.totalScore - bottom.totalScore} 分，显示你拥有多元且弹性的行为策略，可根据团队与任务快速调整位置。`);
        descriptionParts.push('建议继续保持自我觉察，依据目标挑选最合适的风格出场。');
    } else {
        badge = '多元发展型';
        descriptionParts.push(`目前最高分为${top.name}（${top.totalScore}/30），次主导为${second.name}（${second.totalScore}/30）。`);
        if (topProfile) descriptionParts.push(`发挥${top.name}时，${topProfile.strengths}；也请留意${topProfile.challenges}。`);
        if (secondProfile) descriptionParts.push(`第二主导类型提供的能量是：${secondProfile.core}，可作为不同情境的备援方案。`);
        descriptionParts.push('建议在重要任务前先盘点目标与利害关系人，决定以哪种动物风格领衔。');
    }

    const description = descriptionParts.join('');

    document.getElementById('total-score-number').textContent = `${top.percent}%`;
    document.getElementById('score-label').textContent = `${badge} · ${top.name}`;
    document.getElementById('score-description').textContent = description;
    document.querySelector('.total-score-display').style.background = `linear-gradient(135deg, ${topColor} 0%, ${topColor}dd 100%)`;

    const dimensionScoresContainer = document.getElementById('dimension-scores');
    dimensionScoresContainer.innerHTML = '';
    dimensionEntries.forEach(entry => {
        const { name, percent, totalScore, maxScore } = entry;
        const profile = typeProfiles[name];
        const color = dimensions[name]?.color || '#667eea';
        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'dimension-score';
        scoreDiv.innerHTML = `
            <div class="dimension-score-header">
                <span class="dimension-name">${name}</span>
                <span class="score-value" style="color: ${color};">${percent}% (${totalScore}/${maxScore})</span>
            </div>
            <div class="dimension-progress-bar">
                <div class="dimension-progress-fill" style="width: ${percent}%; background: ${color};">
                    ${percent >= 8 ? percent + '%' : ''}
                </div>
            </div>
            ${profile ? `
            <div class="dimension-profile">
                <p><strong>核心特质：</strong>${profile.core}</p>
                <p><strong>优势：</strong>${profile.strengths}</p>
                <p><strong>潜在挑战：</strong>${profile.challenges}</p>
            </div>
            ` : ''}
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
            <p>正在生成AI深度分析...</p>
        </div>
    `;
    try {
        const dimensionLines = (results.rankedDimensions || [])
            .map((item, index) => `${index + 1}. ${item.name}：${item.totalScore}/30（${item.percent}%）`)
            .join('\n');
        const top = results.rankedDimensions?.[0];
        const second = results.rankedDimensions?.[1];
        const minGap = results.rankedDimensions?.length ? results.rankedDimensions[0].totalScore - results.rankedDimensions[results.rankedDimensions.length - 1].totalScore : null;

        const prompt = `你是一位资深行为风格教练，请依据下列动物人格测试量表的结果撰写一份中文深度分析报告：

受测者总体得分：${results.totalScore}/${results.totalMax}
各类型排序：
${dimensionLines}
分数差距（最高-最低）：${minGap !== null ? minGap : 'N/A'}
主导类型：${top ? `${top.name}（${top.totalScore}/30）` : 'N/A'}
次主导类型：${second ? `${second.name}（${second.totalScore}/30）` : 'N/A'}

写作要点：
1. 描述整体行为风格与核心动机（结合主导与次主导类型）。
2. 点出两项最明显的优势，并说明在团队或职场中的加分场景。
3. 提醒两项潜在风险或盲点，包含情境示例与影响。
4. 给出三条可立即实践的调整建议，帮助受测者平衡不同动物风格。

语气保持专业、鼓励且具体，避免提及“AI”或“测试题”字样，以顾问报告口吻撰写，长度约600字。`;
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
                <p>⚠️ AI分析生成失败</p>
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
