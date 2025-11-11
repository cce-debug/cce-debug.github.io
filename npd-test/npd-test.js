// NPD人格倾向测试 主脚本 (从 HTML 中分离)

// 测试题目数据
const questions = [
    { id: 1, text: '我潜意识里觉得自己比大多数人都优秀', dimension: '夸大自我', reverse: false },
    { id: 2, text: '我理所当然地认为自己应该享有特权', dimension: '特权意识', reverse: false },
    { id: 3, text: '我时常沉迷于成功、权力或才华的无尽幻想中', dimension: '傲慢嫉妒', reverse: false },
    { id: 4, text: '我需要别人持续地关注和赞美我', dimension: '渴望钦佩', reverse: false },
    { id: 5, text: '如果没有得到预期的钦佩或优待，我会感到不快', dimension: '渴望钦佩', reverse: false },
    { id: 6, text: '我很难识别和理解他人的感受与需求', dimension: '缺乏共情', reverse: false },
    { id: 7, text: '我对他人的情感状态往往不感兴趣，也难以为其感动', dimension: '缺乏共情', reverse: false },
    { id: 8, text: '为了达到自己的目的，我有时会利用他人', dimension: '剥削倾向', reverse: false },
    { id: 9, text: '我倾向于与那些"特别"或地位高的人交往', dimension: '剥削倾向', reverse: false },
    { id: 10, text: '我时常在内心觉得别人嫉妒我，或者我嫉妒别人', dimension: '傲慢嫉妒', reverse: false },
    { id: 11, text: '我经常表现出傲慢、目中无人的态度或行为', dimension: '傲慢嫉妒', reverse: false },
    { id: 12, text: '我认为自己是个天生的领导者', dimension: '夸大自我', reverse: false },
    { id: 13, text: '别人应该认识到我的特殊性和重要性', dimension: '特权意识', reverse: false },
    { id: 14, text: '我值得拥有最好的东西，不需要付出太多努力', dimension: '特权意识', reverse: false },
    { id: 15, text: '当别人不按照我的意愿行事时，我会感到愤怒', dimension: '剥削倾向', reverse: false },
    { id: 16, text: '我经常夸大自己的成就和才能', dimension: '夸大自我', reverse: false },
    { id: 17, text: '我对批评反应强烈，即使是建设性的', dimension: '傲慢嫉妒', reverse: false },
    { id: 18, text: '我很难为错误承担责任，常常责怪他人', dimension: '缺乏共情', reverse: false },
    { id: 19, text: '我期望别人适应我的日程和需求', dimension: '特权意识', reverse: false },
    { id: 20, text: '我认为普通规则不适用于像我这样特殊的人', dimension: '特权意识', reverse: false },
    { id: 21, text: '我在关系中常常忽冷忽热，取决于对方是否满足我的需求', dimension: '缺乏共情', reverse: false },
    { id: 22, text: '我很少真正关心别人的问题和感受', dimension: '缺乏共情', reverse: false },
    { id: 23, text: '我喜欢成为关注的焦点', dimension: '渴望钦佩', reverse: false },
    { id: 24, text: '我经常在谈话中打断别人，表达自己的观点', dimension: '剥削倾向', reverse: false },
    { id: 25, text: '我认为自己比同龄人更聪明、更有能力', dimension: '夸大自我', reverse: false },
    { id: 26, text: '我经常幻想获得巨大的成功和权力', dimension: '渴望钦佩', reverse: false },
    { id: 27, text: '外表和形象对我非常重要', dimension: '傲慢嫉妒', reverse: false },
    { id: 28, text: '我倾向于夸大自己的重要性', dimension: '夸大自我', reverse: false },
    { id: 29, text: '当别人获得成功时，我感到不舒服', dimension: '剥削倾向', reverse: false },
    { id: 30, text: '我相信自己注定要做伟大的事情', dimension: '渴望钦佩', reverse: false }
];

// 选项标签
const options = [
    { value: 1, label: '非常不符合' },
    { value: 2, label: '不太符合' },
    { value: 3, label: '不确定' },
    { value: 4, label: '比较符合' },
    { value: 5, label: '非常符合' }
];

// 维度配置
const dimensions = {
    '夸大自我': { questions: [1, 12, 16, 25, 28], color: '#FF6B6B' },
    '特权意识': { questions: [2, 13, 14, 19, 20], color: '#FFA94D' },
    '渴望钦佩': { questions: [4, 5, 23, 26, 30], color: '#4ECDC4' },
    '缺乏共情': { questions: [6, 7, 18, 21, 22], color: '#5C7AEA' },
    '剥削倾向': { questions: [8, 9, 15, 24, 29], color: '#F06595' },
    '傲慢嫉妒': { questions: [3, 10, 11, 17, 27], color: '#1FA2FF' }
};

// 全局变量
let answers = {};
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let isTransitioning = false; // 防止跳转期间重复点击

// 开始测试
function startTest() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
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
    return { totalPercent, totalScore: overallTotal, totalMax: overallMax, dimensions: dimensionScores };
}

// 显示结果
function showResults(results) {
    const totalPercent = results.totalPercent;
    document.getElementById('total-score-number').textContent = `${totalPercent}%`;

    let level, description, color;
    if (totalPercent >= 70) {
        level = '高';
        description = '呈现显著的NPD相关特质，可能对人际、职业协作与情绪调节造成明显影响，建议及时寻求专业评估与支持。';
        color = '#dc3545';
    } else if (totalPercent >= 40) {
        level = '中等';
        description = '展现中度的NPD相关特质，在特定情境下可能影响合作与人际互惠，建议辨识触发因素并练习共情调节。';
        color = '#ffc107';
    } else {
        level = '较低';
        description = 'NPD相关特质整体处于较低水平，通常能够维持健康的人际互动与现实感。';
        color = '#28a745';
    }

    document.getElementById('score-label').textContent = `${level}NPD倾向`;
    document.getElementById('score-description').textContent = description;
    document.querySelector('.total-score-display').style.background = `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`;

    const dimensionScoresContainer = document.getElementById('dimension-scores');
    dimensionScoresContainer.innerHTML = '';
    Object.keys(results.dimensions).forEach(dimension => {
        const { percent, totalScore, maxScore } = results.dimensions[dimension];
        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'dimension-score';
        scoreDiv.innerHTML = `
            <div class="dimension-score-header">
                <span class="dimension-name">${dimension}</span>
                <span class="score-value">${percent}% (${totalScore}/${maxScore})</span>
            </div>
            <div class="dimension-progress-bar">
                <div class="dimension-progress-fill" style="width: ${percent}%">
                    ${percent >= 10 ? percent + '%' : ''}
                </div>
            </div>
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
        const overallPercent = results.totalPercent;
        const dimensionLines = Object.entries(results.dimensions)
            .map(([name, stats]) => `- ${name}：${stats.percent}% (${stats.totalScore}/${stats.maxScore})`)
            .join('\n');

    const prompt = `你是一位人格与心理评估咨询师。请根据以下NPD人格倾向测评结果撰写一份心理咨询报告：

总体得分：${overallPercent}% (${results.totalScore}/${results.totalMax})
各维度得分：
${dimensionLines}

请从以下角度展开：
1. 总体人格特征与核心动机
2. 关键优势
3. 潜在风险与人际影响
4. 调整建议（如何平衡自我关注与他人需求）

语气：专业、鼓励且具洞察力
长度：约700字
避免提及“AI”或“测试题”，以心理咨询报告的口吻撰写。`;
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
