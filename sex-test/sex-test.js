// 性心理健康评估测试 主脚本 (从 HTML 中分离)

// 测试题目数据
const questions = [
    { id: 1, text: "我常常觉得有性欲望或性幻想是一件令人羞耻的事情。", dimension: "观念羞耻感", reverse: false },
    { id: 2, text: "我能够自然地欣赏和接纳自己身体的私密部位。", dimension: "身体接纳度", reverse: false },
    { id: 3, text: "我很难向伴侣清楚表达我在性行为中喜欢什么、不喜欢什么。", dimension: "沟通自主性", reverse: true },
    { id: 4, text: "当我产生性欲时，我通常会主动寻求满足（如自慰或与伴侣亲密），而不是刻意压抑或忽略它。", dimension: "欲望自主性", reverse: false },
    { id: 5, text: "我会主动通过各种渠道（如书籍、课程、可靠网站）去学习性知识。", dimension: "知识开放性", reverse: false },
    { id: 6, text: "我认为'好女孩'或'好男孩'不应该有太强的性欲。", dimension: "观念羞耻感", reverse: true },
    { id: 7, text: "在发生性行为时，我会因为担心身材不好而感到焦虑和分心。", dimension: "身体接纳度", reverse: true },
    { id: 8, text: "即使感到不舒服或不想继续，我也很难在性行为过程中对伴侣说'不'。", dimension: "沟通自主性", reverse: true },
    { id: 9, text: "我会因为自慰而感到内疚或自责。", dimension: "欲望自主性", reverse: true },
    { id: 10, text: "我认为公开谈论性话题是尴尬和不体面的。", dimension: "知识开放性", reverse: true },
    { id: 11, text: "我担心自己在性方面的表现达不到伴侣或社会的期望。", dimension: "观念羞耻感", reverse: false },
    { id: 12, text: "在亲密接触中，我能全身心投入并享受当下的快感，而不是胡思乱想。", dimension: "身体接纳度", reverse: false },
    { id: 13, text: "当伴侣提出新的性爱方式或尝试时，我的第一反应通常是开放和好奇，而非排斥和拒绝。", dimension: "沟通自主性", reverse: false },
    { id: 14, text: "我认为追求性的愉悦是个人生活中重要且正当的一部分。", dimension: "欲望自主性", reverse: false },
    { id: 15, text: "当我看到媒体中开放的性表达内容时，会感到反感和不适。", dimension: "观念羞耻感", reverse: false },
    { id: 16, text: "我对自己身体的性敏感地带（如哪些部位被触摸会带来快感）有清晰的了解。", dimension: "身体接纳度", reverse: false },
    { id: 17, text: "我害怕在性行为中'出丑'或'做错事'。", dimension: "知识开放性", reverse: true },
    { id: 18, text: "我可以自主决定是否发生性行为，而很少受到伴侣压力或社会观念的影响。", dimension: "沟通自主性", reverse: false },
    { id: 19, text: "我认为性主要是为了满足伴侣或维系关系，而不是为了自己的快乐。", dimension: "欲望自主性", reverse: true },
    { id: 20, text: "我会因为自己某种特殊的性偏好或性幻想而感到困扰。", dimension: "观念羞耻感", reverse: false },
    { id: 21, text: "在购买情趣用品或避孕产品时，我会感到非常自在。", dimension: "沟通自主性", reverse: false },
    { id: 22, text: "我常常在性行为后感到后悔、空虚或沮丧。", dimension: "身体接纳度", reverse: true },
    { id: 23, text: "我认为性爱与情感是可以分离的，这对我来说不是问题。", dimension: "欲望自主性", reverse: false },
    { id: 24, text: "当我与朋友讨论到与性相关的话题时，会感到非常自然。", dimension: "知识开放性", reverse: false },
    { id: 25, text: "我清楚地知道如何让自己获得性高潮。", dimension: "知识开放性", reverse: false }
];

// 选项标签
const options = [
    { value: 1, label: "非常不符合" },
    { value: 2, label: "不太符合" },
    { value: 3, label: "一般/不确定" },
    { value: 4, label: "比较符合" },
    { value: 5, label: "非常符合" }
];

// 维度配置
const dimensions = {
    "观念羞耻感": { questions: [1, 6, 11, 15, 20], color: "#FF6B6B" },
    "身体接纳度": { questions: [2, 7, 12, 16, 22], color: "#4ECDC4" },
    "沟通自主性": { questions: [3, 8, 13, 18, 21], color: "#45B7D1" },
    "欲望自主性": { questions: [4, 9, 14, 19, 23], color: "#96CEB4" },
    "知识开放性": { questions: [5, 10, 17, 24, 25], color: "#FFEAA7" }
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
    Object.keys(dimensions).forEach(dimensionName => {
        const questionIds = dimensions[dimensionName].questions;
        let totalScore = 0;
        questionIds.forEach(questionId => {
            const question = questions.find(q => q.id === questionId);
            let score = answers[questionId];
            if (question.reverse) score = 6 - score; // 反向题目
            totalScore += score;
        });
        dimensionScores[dimensionName] = totalScore / questionIds.length;
    });
    const totalScore = Object.values(dimensionScores).reduce((sum, score) => sum + score, 0) / Object.keys(dimensionScores).length;
    return { total: totalScore, dimensions: dimensionScores };
}

// 显示结果
function showResults(results) {
    const normalizedScore = Math.round(((results.total - 1) / 4) * 100);
    document.getElementById('total-score-number').textContent = normalizedScore;
    let level, description, color;
    if (normalizedScore <= 33) {
        level = '较高';
        description = '您可能在多个方面感到显著的冲突和抑制，建议寻求专业心理咨询或性教育资源的帮助。';
        color = '#dc3545';
    } else if (normalizedScore <= 66) {
        level = '中等';
        description = '您在某些情境或维度下感到困扰，这是大多数人的常态。可以通过自我觉察、与伴侣沟通和学习来改善。';
        color = '#ffc107';
    } else {
        level = '轻微';
        description = '您通常对性持有健康、开放和积极的态度，能较好地协调内在欲望与外部环境的关系。';
        color = '#28a745';
    }
    document.getElementById('score-label').textContent = `${level} 性压抑程度`;
    document.getElementById('score-description').textContent = description;
    document.querySelector('.total-score-display').style.background = `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`;

    const dimensionScoresContainer = document.getElementById('dimension-scores');
    dimensionScoresContainer.innerHTML = '';
    Object.keys(results.dimensions).forEach(dimension => {
        const score = results.dimensions[dimension];
        const normalizedDimensionScore = Math.round(((score - 1) / 4) * 100);
        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'dimension-score';
        scoreDiv.innerHTML = `
            <div class="dimension-score-header">
                <span class="dimension-name">${dimension}：</span>
                <span class="score-value">${normalizedDimensionScore}</span>
            </div>
            <div class="dimension-progress-bar">
                <div class="dimension-progress-fill" style="width: ${normalizedDimensionScore}%">
                    ${normalizedDimensionScore >= 10 ? normalizedDimensionScore : ''}
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
        const normalizedLabel = Math.round(((i - 1) / 4) * 100);
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', centerX + 5);
        text.setAttribute('y', centerY - (radius * i) / 5 + 3);
        text.setAttribute('fill', '#999');
        text.setAttribute('font-size', '10');
        text.setAttribute('font-family', 'Arial, sans-serif');
        text.textContent = normalizedLabel.toString();
        svg.appendChild(text);
    }
    let polygonPoints = '';
    const dataPoints = [];
    dimensionNames.forEach((dimension, index) => {
        const score = dimensionScores[dimension];
        const angle = index * angleStep - Math.PI / 2;
        const distance = (score / 5) * radius;
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
        const normalizedScore = Math.round(((results.total - 1) / 4) * 100);
        const normalizedDimensions = {};
        Object.keys(results.dimensions).forEach(dimension => {
            const score = results.dimensions[dimension];
            normalizedDimensions[dimension] = Math.round(((score - 1) / 4) * 100);
        });
        // 构建Prompt
                const prompt = `你是一位专业的性心理健康咨询师。请根据以下测试结果，撰写一份心理分析报告：

测试结果：
总分：${normalizedScore}/100
各维度得分：
- 观念羞耻感：${normalizedDimensions['观念羞耻感']}/100  
- 身体接纳度：${normalizedDimensions['身体接纳度']}/100
- 沟通自主性：${normalizedDimensions['沟通自主性']}/100
- 欲望自主性：${normalizedDimensions['欲望自主性']}/100
- 知识开放性：${normalizedDimensions['知识开放性']}/100

得分越高代码其维度的程度越高，请提供以下内容：

请从以下角度撰写报告：
1. 总体心理特征与人格画像  
2. 优点  
3. 可能的风险  
4. 心理成长建议（如何克服和改善性压抑）  

语气：温和、客观、具启发性  
长度：约800字  
不要提及“AI”或“测试题”，以“心理咨询报告”的语气撰写。`;
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
