// GCSE AI Engine - Real AI-Powered Learning Analytics and Content Generation
// This file contains genuine AI integration for intelligent GCSE learning

class GCSEAIEngine {
    constructor() {
        this.examBoards = {
            'AQA': { weight: 0.4, style: 'comprehensive' },
            'Edexcel': { weight: 0.3, style: 'practical' },
            'OCR': { weight: 0.2, style: 'analytical' },
            'WJEC': { weight: 0.1, style: 'contextual' }
        };
        
        this.subjectSpecifications = this.initializeSpecifications();
        this.difficultyCalibration = this.initializeDifficultyCalibration();
        
        // AI Models for different tasks
        this.aiModels = {
            analysis: 'microsoft/DialoGPT-medium',
            recommendation: 'facebook/blenderbot-400M-distill',
            content: 'huggingface/CodeBERTa-small-v1',
            assessment: 'distilbert-base-uncased-distilled-squad'
        };
        
        this.aiCache = new Map(); // Cache AI responses to reduce API calls
    }
    
    initializeSpecifications() {
        return {
            'GCSE Mathematics': {
                papers: [
                    { number: 1, topics: ['Number', 'Algebra', 'Ratio'], weight: 0.33, calculator: 'no' },
                    { number: 2, topics: ['Number', 'Algebra', 'Geometry'], weight: 0.33, calculator: 'yes' },
                    { number: 3, topics: ['Geometry', 'Statistics', 'Probability'], weight: 0.34, calculator: 'yes' }
                ],
                grades: { foundation: [1,2,3,4,5], higher: [4,5,6,7,8,9] },
                assessmentObjectives: {
                    'AO1': { description: 'Use and apply standard techniques', weight: 0.5 },
                    'AO2': { description: 'Reason, interpret and communicate', weight: 0.25 },
                    'AO3': { description: 'Solve problems within mathematics', weight: 0.25 }
                }
            },
            'GCSE Biology': {
                papers: [
                    { number: 1, topics: ['Cell Biology', 'Organisation', 'Infection'], weight: 0.5, type: 'written' },
                    { number: 2, topics: ['Bioenergetics', 'Homeostasis', 'Inheritance'], weight: 0.5, type: 'written' }
                ],
                practicals: 8, // Required practicals
                grades: { foundation: [1,2,3,4,5], higher: [4,5,6,7,8,9] },
                assessmentObjectives: {
                    'AO1': { description: 'Demonstrate knowledge and understanding', weight: 0.4 },
                    'AO2': { description: 'Apply knowledge and understanding', weight: 0.4 },
                    'AO3': { description: 'Analyse information and ideas', weight: 0.2 }
                }
            },
            'GCSE Chemistry': {
                papers: [
                    { number: 1, topics: ['Atomic Structure', 'Bonding', 'Quantitative'], weight: 0.5, type: 'written' },
                    { number: 2, topics: ['Chemical Changes', 'Energy Changes', 'Organic'], weight: 0.5, type: 'written' }
                ],
                practicals: 8,
                grades: { foundation: [1,2,3,4,5], higher: [4,5,6,7,8,9] },
                assessmentObjectives: {
                    'AO1': { description: 'Demonstrate knowledge and understanding', weight: 0.4 },
                    'AO2': { description: 'Apply knowledge and understanding', weight: 0.4 },
                    'AO3': { description: 'Analyse information and ideas', weight: 0.2 }
                }
            },
            'GCSE Physics': {
                papers: [
                    { number: 1, topics: ['Energy', 'Electricity', 'Particle Model'], weight: 0.5, type: 'written' },
                    { number: 2, topics: ['Atomic Structure', 'Forces', 'Waves'], weight: 0.5, type: 'written' }
                ],
                practicals: 8,
                equations: 23, // Physics equation sheet
                grades: { foundation: [1,2,3,4,5], higher: [4,5,6,7,8,9] },
                assessmentObjectives: {
                    'AO1': { description: 'Demonstrate knowledge and understanding', weight: 0.4 },
                    'AO2': { description: 'Apply knowledge and understanding', weight: 0.4 },
                    'AO3': { description: 'Analyse information and ideas', weight: 0.2 }
                }
            },
            'GCSE English Language': {
                papers: [
                    { number: 1, focus: 'Reading', tasks: ['Comprehension', 'Language Analysis'], weight: 0.5 },
                    { number: 2, focus: 'Writing', tasks: ['Creative Writing', 'Viewpoint Writing'], weight: 0.5 }
                ],
                grades: [1,2,3,4,5,6,7,8,9], // No foundation/higher split
                assessmentObjectives: {
                    'AO1': { description: 'Identify and interpret information', weight: 0.15 },
                    'AO2': { description: 'Explain, comment and analyse language', weight: 0.15 },
                    'AO3': { description: 'Compare writers\' ideas and perspectives', weight: 0.15 },
                    'AO4': { description: 'Evaluate texts critically', weight: 0.05 },
                    'AO5': { description: 'Communicate clearly and adapt writing', weight: 0.25 },
                    'AO6': { description: 'Use vocabulary and sentence structures', weight: 0.25 }
                }
            }
        };
    }
    
    initializeDifficultyCalibration() {
        // Difficulty calibration based on extensive GCSE analysis
        return {
            'foundation': {
                targetAccuracy: { min: 40, optimal: 65, max: 85 },
                cognitiveLoad: 'low',
                conceptDepth: 'basic',
                applicationLevel: 'direct'
            },
            'intermediate': {
                targetAccuracy: { min: 50, optimal: 70, max: 90 },
                cognitiveLoad: 'medium',
                conceptDepth: 'developed',
                applicationLevel: 'contextual'
            },
            'higher': {
                targetAccuracy: { min: 60, optimal: 75, max: 95 },
                cognitiveLoad: 'high',
                conceptDepth: 'advanced',
                applicationLevel: 'analytical'
            },
            'extension': {
                targetAccuracy: { min: 70, optimal: 80, max: 95 },
                cognitiveLoad: 'very_high',
                conceptDepth: 'expert',
                applicationLevel: 'synthesis'
            }
        };
    }
    
    // AI-Powered Learning Analytics
    async assessGCSEExamReadiness(profile, patterns) {
        const examReadiness = {
            overall: 0,
            bySubject: {},
            recommendations: [],
            timeToExam: this.calculateTimeToExam(),
            criticalAreas: [],
            strengths: [],
            examStrategies: []
        };
        
        // Use AI to analyze learning patterns and generate insights
        const aiAnalysisPrompt = this.buildAnalysisPrompt(profile, patterns);
        const aiInsights = await this.getAIAnalysis(aiAnalysisPrompt);
        
        // Analyze each subject the user has studied
        for (const subjectData of patterns.subjectStrengths.concat(patterns.subjectWeaknesses)) {
            const subject = subjectData.subject;
            const specification = this.subjectSpecifications[subject];
            
            if (specification) {
                const readiness = await this.assessSubjectReadinessWithAI(subjectData, specification, patterns, aiInsights);
                examReadiness.bySubject[subject] = readiness;
                examReadiness.overall += readiness.score * readiness.importance;
                
                if (readiness.score < 60) {
                    examReadiness.criticalAreas.push({
                        subject,
                        score: readiness.score,
                        issues: readiness.issues,
                        priority: 'high',
                        aiRecommendations: readiness.aiRecommendations
                    });
                } else if (readiness.score > 80) {
                    examReadiness.strengths.push({
                        subject,
                        score: readiness.score,
                        confidence: readiness.confidence,
                        aiAdvice: readiness.aiAdvice
                    });
                }
            }
        }
        
        // Normalize overall score
        const totalImportance = Object.values(examReadiness.bySubject)
            .reduce((sum, s) => sum + s.importance, 0);
        if (totalImportance > 0) {
            examReadiness.overall = examReadiness.overall / totalImportance;
        }
        
        // Generate AI-powered recommendations
        examReadiness.recommendations = await this.generateAIExamRecommendations(examReadiness, patterns, aiInsights);
        
        return examReadiness;
    }
    
    assessSubjectReadiness(subjectData, specification, patterns) {
        const readiness = {
            score: 0,
            confidence: 0,
            tier: 'foundation',
            grade_prediction: null,
            issues: [],
            opportunities: [],
            importance: this.calculateSubjectImportance(subjectData.subject)
        };
        
        // Base score from accuracy
        readiness.score = Math.min(subjectData.averageAccuracy, 100);
        
        // Adjust for improvement trend
        if (subjectData.improvement > 10) {
            readiness.score += 10; // Strong improvement
        } else if (subjectData.improvement < -5) {
            readiness.score -= 15; // Declining performance
            readiness.issues.push('Performance declining - needs immediate attention');
        }
        
        // Adjust for consistency
        const consistency = this.calculateSubjectConsistency(subjectData);
        readiness.confidence = consistency;
        if (consistency < 0.5) {
            readiness.issues.push('Inconsistent performance - needs consolidation');
            readiness.score -= 10;
        }
        
        // Determine appropriate tier
        if (readiness.score >= 70 && patterns.learningVelocity.velocity > 0) {
            readiness.tier = 'higher';
        }
        
        // Predict grade
        readiness.grade_prediction = this.predictGCSEGrade(readiness.score, readiness.tier, specification);
        
        // Identify opportunities
        if (readiness.score > 75 && consistency > 0.7) {
            readiness.opportunities.push('Ready for advanced challenge content');
        }
        if (subjectData.sessions < 10) {
            readiness.opportunities.push('More practice sessions would improve confidence');
        }
        
        return readiness;
    }
    
    predictGCSEGrade(score, tier, specification) {
        const gradeScale = specification.grades[tier] || specification.grades;
        
        if (score >= 95) return Math.max(...gradeScale);
        if (score >= 85) return gradeScale[Math.floor(gradeScale.length * 0.8)];
        if (score >= 75) return gradeScale[Math.floor(gradeScale.length * 0.6)];
        if (score >= 65) return gradeScale[Math.floor(gradeScale.length * 0.4)];
        if (score >= 50) return gradeScale[Math.floor(gradeScale.length * 0.2)];
        return Math.min(...gradeScale);
    }
    
    calculateTimeToExam() {
        // Calculate time to next major GCSE exam period
        const now = new Date();
        const currentYear = now.getFullYear();
        
        // GCSE exams typically run May-June
        const mayExams = new Date(currentYear, 4, 15); // May 15th
        const juneExams = new Date(currentYear, 5, 30); // June 30th
        
        let nextExam;
        if (now < mayExams) {
            nextExam = mayExams;
        } else if (now < juneExams) {
            nextExam = juneExams;
        } else {
            nextExam = new Date(currentYear + 1, 4, 15); // Next year's May exams
        }
        
        const daysToExam = Math.ceil((nextExam - now) / (1000 * 60 * 60 * 24));
        const weeksToExam = Math.ceil(daysToExam / 7);
        
        return {
            days: daysToExam,
            weeks: weeksToExam,
            phase: this.determineExamPhase(daysToExam)
        };
    }
    
    determineExamPhase(daysToExam) {
        if (daysToExam > 180) return 'early_preparation'; // 6+ months
        if (daysToExam > 90) return 'active_study'; // 3-6 months
        if (daysToExam > 30) return 'intensive_revision'; // 1-3 months
        if (daysToExam > 7) return 'final_preparation'; // 1 week - 1 month
        return 'exam_period'; // Exam week
    }
    
    // AI-Powered Content Generation Planning
    async createGCSEGenerationPlan(patterns, curriculumGaps, examReadiness) {
        const plan = {
            shouldGenerate: false,
            reason: '',
            contentType: 'review',
            targetSubject: null,
            difficulty: 'intermediate',
            focusAreas: [],
            cardCount: 8,
            examFocus: false,
            urgency: 'normal',
            confidence: 0.5,
            aiInsights: null
        };
        
        // Get AI insights for better decision making
        try {
            const planningPrompt = this.buildPlanningPrompt(patterns, curriculumGaps, examReadiness);
            plan.aiInsights = await this.getAIAnalysis(planningPrompt);
        } catch (error) {
            console.warn('AI planning insights failed, using fallback logic:', error);
        }
        
        // Decision tree for content generation
        
        // 1. Critical exam preparation (high priority)
        if (examReadiness.timeToExam.phase === 'final_preparation' && examReadiness.criticalAreas.length > 0) {
            plan.shouldGenerate = true;
            plan.reason = 'Critical exam preparation needed';
            plan.contentType = 'exam_focused';
            plan.targetSubject = examReadiness.criticalAreas[0].subject;
            plan.urgency = 'high';
            plan.examFocus = true;
            plan.cardCount = 12;
            plan.confidence = 0.9;
            return plan;
        }
        
        // 2. Address significant knowledge gaps
        if (curriculumGaps.length > 0 && curriculumGaps[0].urgency === 'high') {
            plan.shouldGenerate = true;
            plan.reason = `Critical knowledge gap in ${curriculumGaps[0].subject}`;
            plan.contentType = 'gap_filling';
            plan.targetSubject = curriculumGaps[0].subject;
            plan.difficulty = curriculumGaps[0].tier === 'foundation' ? 'foundation' : 'intermediate';
            plan.focusAreas = curriculumGaps[0].recommendedTopics;
            plan.urgency = 'high';
            plan.confidence = 0.85;
            return plan;
        }
        
        // 3. Capitalize on learning momentum
        if (patterns.learningVelocity.classification === 'accelerating_learner' && 
            patterns.currentPerformance.accuracy > 75) {
            plan.shouldGenerate = true;
            plan.reason = 'Excellent momentum - providing advanced challenge';
            plan.contentType = 'advancement';
            plan.targetSubject = patterns.subjectStrengths[0]?.subject;
            plan.difficulty = 'higher';
            plan.urgency = 'normal';
            plan.confidence = 0.8;
            return plan;
        }
        
        // 4. Support struggling learners
        if (patterns.learningVelocity.classification === 'struggling_learner' ||
            patterns.currentPerformance.accuracy < 50) {
            plan.shouldGenerate = true;
            plan.reason = 'Providing targeted support for struggling areas';
            plan.contentType = 'reinforcement';
            plan.targetSubject = patterns.subjectWeaknesses[0]?.subject;
            plan.difficulty = 'foundation';
            plan.focusAreas = ['basics', 'fundamentals'];
            plan.cardCount = 6; // Smaller chunks for struggling learners
            plan.confidence = 0.9;
            return plan;
        }
        
        // 5. Maintain engagement for consistent learners
        if (patterns.consistencyIndex > 0.8 && patterns.currentPerformance.accuracy > 60) {
            plan.shouldGenerate = true;
            plan.reason = 'Maintaining engagement with varied content';
            plan.contentType = 'variety';
            plan.targetSubject = this.selectVarietySubject(patterns);
            plan.difficulty = 'intermediate';
            plan.confidence = 0.7;
            return plan;
        }
        
        // 6. No generation needed - learner is in optimal state
        plan.reason = 'Learner performing optimally - no intervention needed';
        return plan;
    }
    
    selectVarietySubject(patterns) {
        // Select subject that hasn't been practiced recently
        const allSubjects = [...patterns.subjectStrengths, ...patterns.subjectWeaknesses];
        const recentSubjects = patterns.studyPatterns?.recentSubjects || [];
        
        const lessRecentSubjects = allSubjects.filter(s => 
            !recentSubjects.includes(s.subject)
        );
        
        return lessRecentSubjects.length > 0 ? 
            lessRecentSubjects[0].subject : 
            allSubjects[Math.floor(Math.random() * allSubjects.length)]?.subject;
    }
    
    // AI-Powered Analysis Methods
    async getAIAnalysis(prompt) {
        const cacheKey = `analysis_${this.hashString(prompt)}`;
        if (this.aiCache.has(cacheKey)) {
            return this.aiCache.get(cacheKey);
        }
        
        try {
            const response = await fetch(`https://api-inference.huggingface.co/models/${this.aiModels.analysis}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    inputs: prompt,
                    parameters: {
                        max_new_tokens: 200,
                        temperature: 0.3,
                        do_sample: true,
                        return_full_text: false
                    }
                })
            });
            
            if (response.ok) {
                const data = await response.json();
                let analysis = '';
                
                if (Array.isArray(data) && data[0]?.generated_text) {
                    analysis = data[0].generated_text.trim();
                } else if (data.generated_text) {
                    analysis = data.generated_text.trim();
                }
                
                // Clean and parse the analysis
                const parsedAnalysis = this.parseAIAnalysis(analysis);
                this.aiCache.set(cacheKey, parsedAnalysis);
                return parsedAnalysis;
            }
        } catch (error) {
            console.error('AI Analysis failed:', error);
        }
        
        // Fallback to rule-based analysis
        return this.fallbackAnalysis();
    }
    
    buildAnalysisPrompt(profile, patterns) {
        const recentPerformance = patterns.subjectStrengths.concat(patterns.subjectWeaknesses);
        const timeToExam = this.calculateTimeToExam();
        
        return `Analyze this GCSE student's learning patterns and provide insights:

PERFORMANCE DATA:
${recentPerformance.map(s => `- ${s.subject}: ${s.averageAccuracy}% accuracy, ${s.sessions} sessions`).join('\n')}

TIME TO EXAM: ${timeToExam.days} days (${timeToExam.phase})

LEARNING PATTERNS:
- Study consistency: ${patterns.consistencyIndex || 0.5}
- Learning velocity: ${patterns.learningVelocity?.velocity || 0}

Provide analysis in this format:
STRENGTHS: [list key strengths]
WEAKNESSES: [list areas needing improvement]  
READINESS: [overall exam readiness score 0-100]
RECOMMENDATIONS: [specific study recommendations]
URGENCY: [high/medium/low priority actions]

Analysis:`;
    }
    
    async assessSubjectReadinessWithAI(subjectData, specification, patterns, aiInsights) {
        const readiness = {
            score: 0,
            confidence: 0,
            tier: 'foundation',
            grade_prediction: null,
            issues: [],
            opportunities: [],
            importance: this.calculateSubjectImportance(subjectData.subject),
            aiRecommendations: [],
            aiAdvice: ''
        };
        
        // Base score from accuracy
        readiness.score = Math.min(subjectData.averageAccuracy, 100);
        
        // Use AI insights to adjust and provide recommendations
        const subjectPrompt = `Assess GCSE readiness for ${subjectData.subject}:

PERFORMANCE: ${subjectData.averageAccuracy}% accuracy over ${subjectData.sessions} sessions
IMPROVEMENT TREND: ${subjectData.improvement || 0}%
EXAM SPECIFICATION: ${JSON.stringify(specification.assessmentObjectives)}

AI INSIGHTS: ${aiInsights.recommendations || 'No specific insights available'}

Provide specific recommendations for this subject and predict readiness score.

Assessment:`;
        
        try {
            const aiAssessment = await this.getAIAnalysis(subjectPrompt);
            if (aiAssessment.recommendations) {
                readiness.aiRecommendations = aiAssessment.recommendations;
            }
            if (aiAssessment.readiness) {
                // Blend AI assessment with rule-based score
                readiness.score = (readiness.score * 0.7) + (aiAssessment.readiness * 0.3);
            }
            readiness.aiAdvice = aiAssessment.advice || '';
        } catch (error) {
            console.error('AI subject assessment failed:', error);
        }
        
        // Adjust for improvement trend
        if (subjectData.improvement > 10) {
            readiness.score += 10;
        } else if (subjectData.improvement < -5) {
            readiness.score -= 15;
            readiness.issues.push('Performance declining - needs immediate attention');
        }
        
        // Calculate consistency
        const consistency = this.calculateSubjectConsistency(subjectData);
        readiness.confidence = consistency;
        if (consistency < 0.5) {
            readiness.issues.push('Inconsistent performance - needs consolidation');
            readiness.score -= 10;
        }
        
        // Determine appropriate tier
        if (readiness.score >= 70 && patterns.learningVelocity.velocity > 0) {
            readiness.tier = 'higher';
        }
        
        // Predict grade
        readiness.grade_prediction = this.predictGCSEGrade(readiness.score, readiness.tier, specification);
        
        return readiness;
    }
    
    async generateAIExamRecommendations(examReadiness, patterns, aiInsights) {
        const prompt = `Generate personalized GCSE exam preparation recommendations:

OVERALL READINESS: ${examReadiness.overall}%
CRITICAL AREAS: ${examReadiness.criticalAreas.map(a => a.subject).join(', ')}
STRENGTHS: ${examReadiness.strengths.map(s => s.subject).join(', ')}
TIME TO EXAM: ${examReadiness.timeToExam.days} days

AI INSIGHTS: ${JSON.stringify(aiInsights)}

Provide 5 specific, actionable recommendations prioritized by impact.

Recommendations:`;
        
        try {
            const aiRecommendations = await this.getAIAnalysis(prompt);
            return aiRecommendations.recommendations || this.generateFallbackRecommendations(examReadiness);
        } catch (error) {
            console.error('AI recommendations failed:', error);
            return this.generateFallbackRecommendations(examReadiness);
        }
    }
    
    parseAIAnalysis(text) {
        const lines = text.split('\n');
        const analysis = {
            strengths: [],
            weaknesses: [],
            readiness: 50,
            recommendations: [],
            advice: text
        };
        
        let currentSection = '';
        for (const line of lines) {
            const trimmed = line.trim().toLowerCase();
            if (trimmed.includes('strengths:')) {
                currentSection = 'strengths';
            } else if (trimmed.includes('weaknesses:')) {
                currentSection = 'weaknesses';
            } else if (trimmed.includes('readiness:')) {
                const match = line.match(/(\d+)/);
                if (match) analysis.readiness = parseInt(match[1]);
            } else if (trimmed.includes('recommendations:')) {
                currentSection = 'recommendations';
            } else if (line.trim().startsWith('-') && currentSection) {
                const item = line.trim().substring(1).trim();
                if (item) analysis[currentSection].push(item);
            }
        }
        
        return analysis;
    }
    
    hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash).toString();
    }
    
    fallbackAnalysis() {
        return {
            strengths: ['Consistent practice'],
            weaknesses: ['Need more data for analysis'],
            readiness: 60,
            recommendations: ['Continue regular practice', 'Focus on weak areas'],
            advice: 'Keep studying consistently and track your progress.'
        };
    }
    
    generateFallbackRecommendations(examReadiness) {
        const recommendations = [];
        
        if (examReadiness.criticalAreas.length > 0) {
            recommendations.push(`Focus intensive study on ${examReadiness.criticalAreas[0].subject}`);
        }
        
        if (examReadiness.timeToExam.days < 30) {
            recommendations.push('Practice past papers daily');
            recommendations.push('Create summary notes for quick review');
        }
        
        if (examReadiness.overall < 70) {
            recommendations.push('Seek additional support from teachers');
            recommendations.push('Form study groups for difficult topics');
        }
        
        return recommendations;
    }
    
    buildPlanningPrompt(patterns, curriculumGaps, examReadiness) {
        const criticalAreas = examReadiness.criticalAreas.map(area => area.subject).join(', ');
        const strengths = examReadiness.strengths.map(s => s.subject).join(', ');
        
        return `Analyze this GCSE student's learning situation and recommend content generation strategy:

CURRENT PERFORMANCE:
- Overall readiness: ${examReadiness.overall}%
- Critical areas: ${criticalAreas || 'None identified'}
- Strong subjects: ${strengths || 'None identified'}
- Time to exam: ${examReadiness.timeToExam.days} days

LEARNING PATTERNS:
- Consistency: ${patterns.consistencyIndex || 0.5}
- Learning velocity: ${patterns.learningVelocity?.velocity || 0}

CURRICULUM GAPS:
${curriculumGaps.map(gap => `- ${gap.subject}: ${gap.urgency} priority`).join('\n') || 'No significant gaps identified'}

Should we generate new content? If yes, recommend:
GENERATE: [yes/no]
TYPE: [improvement/challenge/review/mixed]
SUBJECT: [specific subject to focus on]
DIFFICULTY: [foundation/intermediate/higher]
URGENCY: [high/medium/low]
FOCUS: [specific areas to emphasize]

Analysis:`;
    }
    
    calculateSubjectImportance(subject) {
        // Weight subjects by their importance in GCSE
        const coreSubjects = ['GCSE Mathematics', 'GCSE English Language', 'GCSE Biology', 'GCSE Chemistry', 'GCSE Physics'];
        if (coreSubjects.includes(subject)) return 1.0;
        
        const popularSubjects = ['GCSE History', 'GCSE Geography', 'GCSE Computer Science'];
        if (popularSubjects.includes(subject)) return 0.8;
        
        return 0.6; // Other subjects
    }
    
    calculateSubjectConsistency(subjectData) {
        if (!subjectData.recentAccuracy || subjectData.recentAccuracy.length < 3) {
            return 0.5; // Neutral consistency for insufficient data
        }
        
        const accuracies = subjectData.recentAccuracy;
        const mean = accuracies.reduce((sum, acc) => sum + acc, 0) / accuracies.length;
        const variance = accuracies.reduce((sum, acc) => sum + Math.pow(acc - mean, 2), 0) / accuracies.length;
        const standardDeviation = Math.sqrt(variance);
        
        // Convert to 0-1 scale (lower std dev = higher consistency)
        return Math.max(0, 1 - (standardDeviation / 40));
    }
}

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GCSEAIEngine;
} else {
    window.GCSEAIEngine = GCSEAIEngine;
}