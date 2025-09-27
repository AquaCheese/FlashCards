// GCSE AI Engine - Advanced Learning Analytics and Content Generation
// This file contains the sophisticated AI algorithms for GCSE-focused learning

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
    
    // Advanced Learning Analytics
    assessGCSEExamReadiness(profile, patterns) {
        const examReadiness = {
            overall: 0,
            bySubject: {},
            recommendations: [],
            timeToExam: this.calculateTimeToExam(),
            criticalAreas: [],
            strengths: [],
            examStrategies: []
        };
        
        // Analyze each subject the user has studied
        patterns.subjectStrengths.concat(patterns.subjectWeaknesses).forEach(subjectData => {
            const subject = subjectData.subject;
            const specification = this.subjectSpecifications[subject];
            
            if (specification) {
                const readiness = this.assessSubjectReadiness(subjectData, specification, patterns);
                examReadiness.bySubject[subject] = readiness;
                examReadiness.overall += readiness.score * readiness.importance;
                
                if (readiness.score < 60) {
                    examReadiness.criticalAreas.push({
                        subject,
                        score: readiness.score,
                        issues: readiness.issues,
                        priority: 'high'
                    });
                } else if (readiness.score > 80) {
                    examReadiness.strengths.push({
                        subject,
                        score: readiness.score,
                        confidence: readiness.confidence
                    });
                }
            }
        });
        
        // Normalize overall score
        const totalImportance = Object.values(examReadiness.bySubject)
            .reduce((sum, s) => sum + s.importance, 0);
        if (totalImportance > 0) {
            examReadiness.overall = examReadiness.overall / totalImportance;
        }
        
        // Generate recommendations
        examReadiness.recommendations = this.generateExamRecommendations(examReadiness, patterns);
        
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
    
    // Intelligent Content Generation
    createGCSEGenerationPlan(patterns, curriculumGaps, examReadiness) {
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
            confidence: 0.5
        };
        
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