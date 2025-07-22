import React, { useState } from 'react';
import { allComprehensiveConcepts } from './data/comprehensive-concepts';
import { allServiceValueConcepts } from './data/service-value-system';
import { allCriticalPractices } from './data/critical-practices';
import { comprehensiveQuiz } from './data/comprehensive-quiz';
import { comprehensiveFlashcards } from './data/comprehensive-flashcards';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const sectionStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: "'Inter', sans-serif"
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '30px 20px',
    textAlign: 'center' as const,
    marginBottom: '30px'
  };

  const navStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '10px',
    justifyContent: 'center',
    marginBottom: '30px',
    padding: '0 20px'
  };

  const navButtonStyle = (isActive: boolean) => ({
    padding: '12px 20px',
    border: 'none',
    borderRadius: '8px',
    background: isActive ? '#007bff' : '#f8f9fa',
    color: isActive ? 'white' : '#333',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.3s ease'
  });

  const cardStyle = {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    border: '1px solid #e9ecef'
  };

  const conceptCardStyle = {
    ...cardStyle,
    background: 'linear-gradient(90deg, #eff6ff, #eef2ff)',
    borderLeft: '4px solid #3b82f6',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  // Utilisation du contenu complet
  const allConcepts = [...allComprehensiveConcepts, ...allServiceValueConcepts, ...allCriticalPractices];
  const currentConcepts = allConcepts.filter(concept => {
    switch(activeSection) {
      case 'concepts': return concept.category === 'fundamentals';
      case 'principles': return concept.category === 'principles';
      case 'dimensions': return concept.category === 'dimensions';
      case 'chain': return concept.category === 'chain';
      case 'practices': return concept.category === 'practices';
      default: return false;
    }
  });

  // Utilisation des données complètes
  const currentQuiz = comprehensiveQuiz.slice(0, 10); // 10 questions pour le quiz rapide
  const currentFlashcards = comprehensiveFlashcards;

  const [expandedConcepts, setExpandedConcepts] = useState<number[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [showFlashcardBack, setShowFlashcardBack] = useState(false);

  const toggleConcept = (index: number) => {
    setExpandedConcepts(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[currentQuizIndex] = answerIndex;
    setQuizAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuizIndex < currentQuiz.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuizIndex(0);
    setQuizAnswers([]);
    setShowResults(false);
  };

  const getScore = () => {
    return quizAnswers.reduce((score, answer, index) => {
      return answer === currentQuiz[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const renderDashboard = () => {
    const totalConcepts = allConcepts.length;
    const progressPercent = expandedConcepts.length > 0 ? Math.round((expandedConcepts.length / totalConcepts) * 100) : 0;
    
    return (
      <div>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#1f2937' }}>
            📊 Tableau de Bord Expert ITIL 4
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '900px', margin: '0 auto', lineHeight: '1.6' }}>
            Votre progression vers la certification ITIL 4 Foundation. Contenu basé sur le syllabus officiel 2024.
          </p>
        </div>

        {/* Stats principales */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px', marginBottom: '40px' }}>
          <div style={{
            ...cardStyle,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', opacity: 0.9 }}>Progression Globale</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>{progressPercent}%</div>
            <div style={{ fontSize: '14px', opacity: 0.8 }}>
              {expandedConcepts.length} sur {totalConcepts} concepts étudiés
            </div>
          </div>
          
          <div style={{
            ...cardStyle,
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', opacity: 0.9 }}>Quiz Complétés</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>{showResults ? 1 : 0}</div>
            <div style={{ fontSize: '14px', opacity: 0.8 }}>
              Score moyen: {showResults ? `${Math.round((getScore() / currentQuiz.length) * 100)}%` : '--'}
            </div>
          </div>
          
          <div style={{
            ...cardStyle,
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            color: 'white',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', opacity: 0.9 }}>Contenu Expert</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>{comprehensiveQuiz.length}</div>
            <div style={{ fontSize: '14px', opacity: 0.8 }}>
              Questions d'entraînement disponibles
            </div>
          </div>
          
          <div style={{
            ...cardStyle,
            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            color: 'white',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem', opacity: 0.9 }}>Flashcards</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>{comprehensiveFlashcards.length}</div>
            <div style={{ fontSize: '14px', opacity: 0.8 }}>
              Cartes de révision optimisées
            </div>
          </div>
        </div>

        {/* Recommandation d'étude */}
        <div style={{
          ...cardStyle,
          background: progressPercent < 30 ? 'linear-gradient(45deg, #fef3c7, #fde68a)' : 
                      progressPercent < 70 ? 'linear-gradient(45deg, #dbeafe, #bfdbfe)' :
                      'linear-gradient(45deg, #d1fae5, #a7f3d0)',
          border: progressPercent < 30 ? '2px solid #f59e0b' : 
                  progressPercent < 70 ? '2px solid #3b82f6' : 
                  '2px solid #10b981',
          marginBottom: '40px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ 
              fontSize: '2.5rem',
              color: progressPercent < 30 ? '#92400e' : progressPercent < 70 ? '#1e40af' : '#065f46'
            }}>
              {progressPercent < 30 ? '🎯' : progressPercent < 70 ? '📚' : '🏆'}
            </div>
            <div>
              <h3 style={{ 
                margin: '0 0 8px 0', 
                fontSize: '1.4rem',
                color: progressPercent < 30 ? '#92400e' : progressPercent < 70 ? '#1e40af' : '#065f46'
              }}>
                {progressPercent < 30 ? 'Commencez par les fondamentaux' : 
                 progressPercent < 70 ? 'Approfondissez vos connaissances' : 
                 'Prêt pour l\'examen !'}
              </h3>
              <p style={{ 
                margin: 0, 
                fontSize: '1.1rem', 
                lineHeight: '1.5',
                color: progressPercent < 30 ? '#92400e' : progressPercent < 70 ? '#1e40af' : '#065f46'
              }}>
                {progressPercent < 30 ? 'Explorez les concepts de base et les principes directeurs d\'ITIL 4.' : 
                 progressPercent < 70 ? 'Étudiez les 4 dimensions, chaîne de valeur et pratiques critiques.' : 
                 'Entraînez-vous avec les quiz et simulations d\'examen pour valider vos acquis.'}
              </p>
            </div>
          </div>
        </div>

        {/* Métriques d'examen */}
        <div style={cardStyle}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center', color: '#1f2937' }}>
            🎯 Métriques Examen ITIL 4 Foundation
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
            {[
              { label: 'Questions', value: '40', color: '#3b82f6' },
              { label: 'Durée', value: '60 min', color: '#10b981' },
              { label: 'Score requis', value: '65%', color: '#f59e0b' },
              { label: 'Bonnes réponses', value: '26/40', color: '#8b5cf6' }
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center', padding: '15px' }}>
                <div style={{ 
                  fontSize: '2.2rem', 
                  fontWeight: 'bold', 
                  color: stat.color,
                  marginBottom: '8px'
                }}>
                  {stat.value}
                </div>
                <div style={{ color: '#666', fontSize: '14px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const getSectionTitle = () => {
    switch(activeSection) {
      case 'concepts': return '📚 Concepts Fondamentaux';
      case 'principles': return '🎯 Les 7 Principes Directeurs';
      case 'dimensions': return '🔄 Les 4 Dimensions';
      case 'chain': return '⚡ Chaîne de Valeur des Services';
      case 'practices': return '🛠 Pratiques ITIL 4 Critiques';
      default: return 'Contenu ITIL 4';
    }
  };

  const getSectionDescription = () => {
    switch(activeSection) {
      case 'concepts': return 'Maîtrisez les concepts de base d\'ITIL 4. Ces définitions sont testées dans 40% des questions d\'examen.';
      case 'principles': return 'Les 7 principes directeurs qui guident TOUTES les activités ITIL. Questions fréquentes sur les pièges !';
      case 'dimensions': return 'Les 4 dimensions à considérer SIMULTANÉMENT pour une gestion holistique des services.';
      case 'chain': return 'Les 6 activités qui transforment demande et opportunité en valeur. Cœur du framework ITIL 4.';
      case 'practices': return 'Les 15 pratiques testées à l\'examen sur 34 total. Focus sur les plus critiques pour la certification.';
      default: return 'Contenu expert pour réussir votre examen ITIL 4 Foundation.';
    }
  };

  const renderConcepts = () => (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#1f2937' }}>
          {getSectionTitle()}
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          {getSectionDescription()}
        </p>
      </div>

      {currentConcepts.map((concept, index) => (
        <div 
          key={concept.id}
          style={{
            ...conceptCardStyle,
            marginBottom: '25px',
            borderLeft: expandedConcepts.includes(index) ? '5px solid #10b981' : '4px solid #3b82f6'
          }}
          onClick={() => toggleConcept(index)}
        >
          <h3 style={{ 
            margin: '0 0 15px 0', 
            fontSize: '1.25rem',
            color: '#1f2937',
            fontWeight: 'bold'
          }}>
            {concept.title}
          </h3>
          
          {expandedConcepts.includes(index) && (
            <div style={{ marginTop: '20px' }}>
              <div style={{ 
                background: 'rgba(255,255,255,0.9)', 
                padding: '20px', 
                borderRadius: '12px', 
                marginBottom: '15px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <strong style={{ color: '#1f2937', fontSize: '1.05rem' }}>📖 Définition :</strong>
                <p style={{ marginTop: '8px', lineHeight: '1.6', color: '#374151' }}>{concept.definition}</p>
              </div>

              <div style={{ 
                background: 'rgba(255,255,255,0.9)', 
                padding: '20px', 
                borderRadius: '12px', 
                marginBottom: '15px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <strong style={{ color: '#1f2937', fontSize: '1.05rem' }}>🔑 Points Clés :</strong>
                <ul style={{ marginTop: '12px', paddingLeft: '20px', lineHeight: '1.7' }}>
                  {concept.keyPoints.map((point, i) => (
                    <li key={i} style={{ marginBottom: '8px', color: '#374151' }}>{point}</li>
                  ))}
                </ul>
              </div>

              {concept.examTip && (
                <div style={{ 
                  background: 'linear-gradient(45deg, #fef3c7, #fde68a)', 
                  padding: '20px', 
                  borderRadius: '12px', 
                  border: '2px solid #f59e0b',
                  boxShadow: '0 4px 6px rgba(245, 158, 11, 0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💡</span>
                    <div>
                      <strong style={{ color: '#92400e', fontSize: '1.05rem' }}>Astuce Examen :</strong>
                      <p style={{ marginTop: '8px', lineHeight: '1.6', color: '#92400e', fontWeight: '500' }}>
                        {concept.examTip}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {currentConcepts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          <p>Aucun contenu disponible pour cette section.</p>
        </div>
      )}
    </div>
  );

  // Fonction générique pour render toutes les sections de contenu
  const renderContentSection = () => renderConcepts();

  const renderQuiz = () => (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#1f2937' }}>
          ❓ Quiz d'Entraînement Expert
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          Questions basées sur l'examen officiel 2024. Difficultés variées pour une préparation complète.
        </p>
      </div>

      {!showResults ? (
        <div style={{
          ...cardStyle,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>
              Question {currentQuizIndex + 1} sur {currentQuiz.length}
            </div>
            <div style={{ 
              background: 'rgba(255,255,255,0.2)', 
              padding: '4px 12px', 
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {currentQuiz[currentQuizIndex]?.difficulty?.toUpperCase() || 'MEDIUM'}
            </div>
          </div>
          
          <div style={{ 
            width: '100%', 
            height: '4px', 
            background: 'rgba(255,255,255,0.3)', 
            borderRadius: '2px',
            marginBottom: '25px'
          }}>
            <div style={{
              width: `${((currentQuizIndex + 1) / currentQuiz.length) * 100}%`,
              height: '100%',
              background: 'rgba(255,255,255,0.8)',
              borderRadius: '2px',
              transition: 'width 0.3s ease'
            }} />
          </div>

          <h3 style={{ marginBottom: '25px', fontSize: '1.3rem', lineHeight: '1.5' }}>
            {currentQuiz[currentQuizIndex]?.question}
          </h3>
          
          <div style={{ marginBottom: '30px' }}>
            {currentQuiz[currentQuizIndex]?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleQuizAnswer(index)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '18px',
                  marginBottom: '12px',
                  border: quizAnswers[currentQuizIndex] === index ? '3px solid #fbbf24' : '2px solid rgba(255,255,255,0.3)',
                  borderRadius: '12px',
                  background: quizAnswers[currentQuizIndex] === index ? 'rgba(251, 191, 36, 0.2)' : 'rgba(255,255,255,0.1)',
                  textAlign: 'left' as const,
                  cursor: 'pointer',
                  fontSize: '16px',
                  color: 'white',
                  transition: 'all 0.2s ease',
                  fontWeight: quizAnswers[currentQuizIndex] === index ? 'bold' : 'normal'
                }}
                onMouseOver={(e) => {
                  if (quizAnswers[currentQuizIndex] !== index) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  }
                }}
                onMouseOut={(e) => {
                  if (quizAnswers[currentQuizIndex] !== index) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  }
                }}
              >
                <strong>{String.fromCharCode(65 + index)})</strong> {option}
              </button>
            ))}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              disabled={currentQuizIndex === 0}
              style={{
                ...navButtonStyle(false),
                opacity: currentQuizIndex === 0 ? 0.5 : 1,
                cursor: currentQuizIndex === 0 ? 'not-allowed' : 'pointer',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
            >
              ← Précédent
            </button>
            <button
              onClick={nextQuestion}
              disabled={quizAnswers[currentQuizIndex] === undefined}
              style={{
                ...navButtonStyle(true),
                opacity: quizAnswers[currentQuizIndex] === undefined ? 0.5 : 1,
                cursor: quizAnswers[currentQuizIndex] === undefined ? 'not-allowed' : 'pointer',
                background: '#fbbf24',
                color: '#1f2937',
                border: 'none',
                fontWeight: 'bold'
              }}
            >
              {currentQuizIndex === currentQuiz.length - 1 ? '🏁 Terminer' : 'Suivant →'}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div style={{...cardStyle, textAlign: 'center', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white'}}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>🎯 Résultats du Quiz</h3>
            <div style={{ fontSize: '4rem', fontWeight: 'bold', margin: '25px 0' }}>
              {getScore()}/{currentQuiz.length}
            </div>
            <div style={{ fontSize: '2rem', marginBottom: '25px' }}>
              {Math.round((getScore() / currentQuiz.length) * 100)}%
            </div>
            
            <div style={{ marginBottom: '25px', fontSize: '1.2rem' }}>
              {Math.round((getScore() / currentQuiz.length) * 100) >= 85 && '🏆 Excellent ! Prêt pour l\'examen !'}
              {Math.round((getScore() / currentQuiz.length) * 100) >= 70 && Math.round((getScore() / currentQuiz.length) * 100) < 85 && '👍 Bon niveau ! Quelques révisions encore.'}
              {Math.round((getScore() / currentQuiz.length) * 100) >= 50 && Math.round((getScore() / currentQuiz.length) * 100) < 70 && '📚 Continuez vos efforts !'}
              {Math.round((getScore() / currentQuiz.length) * 100) < 50 && '⚠️ Révision approfondie nécessaire.'}
            </div>
            
            <button 
              onClick={resetQuiz} 
              style={{
                ...navButtonStyle(true), 
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.5)',
                fontSize: '1.1rem',
                padding: '15px 30px'
              }}
            >
              🔄 Recommencer
            </button>
          </div>
          
          <div style={{ marginTop: '30px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', textAlign: 'center' }}>📋 Analyse Détaillée</h3>
            {currentQuiz.map((question, index) => (
              <div key={question.id} style={{
                ...cardStyle,
                borderLeft: quizAnswers[index] === question.correctAnswer ? '5px solid #10b981' : '5px solid #ef4444',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={{ 
                    color: quizAnswers[index] === question.correctAnswer ? '#10b981' : '#ef4444',
                    fontSize: '28px',
                    lineHeight: 1,
                    fontWeight: 'bold'
                  }}>
                    {quizAnswers[index] === question.correctAnswer ? '✓' : '✗'}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '15px', fontSize: '1.1rem', lineHeight: '1.4' }}>
                      Q{index + 1}: {question.question}
                    </p>
                    
                    <div style={{ marginBottom: '15px' }}>
                      <p style={{ fontSize: '15px', color: '#666', marginBottom: '8px' }}>
                        <strong>Votre réponse :</strong> {question.options[quizAnswers[index]] || 'Non répondu'}
                      </p>
                      {quizAnswers[index] !== question.correctAnswer && (
                        <p style={{ fontSize: '15px', color: '#10b981', marginBottom: '8px', fontWeight: '600' }}>
                          <strong>Bonne réponse :</strong> {question.options[question.correctAnswer]}
                        </p>
                      )}
                    </div>
                    
                    <div style={{ 
                      background: '#f8f9fa', 
                      padding: '15px', 
                      borderRadius: '8px',
                      borderLeft: '3px solid #6b7280'
                    }}>
                      <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
                        <strong>💡 Explication :</strong> {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderExam = () => (
    <div>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center' }}>
        🏆 Préparation à l'Examen
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{...cardStyle, textAlign: 'center'}}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6' }}>40</div>
          <div>Questions</div>
        </div>
        <div style={{...cardStyle, textAlign: 'center'}}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#10b981' }}>60</div>
          <div>Minutes</div>
        </div>
        <div style={{...cardStyle, textAlign: 'center'}}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#8b5cf6' }}>65%</div>
          <div>Score requis</div>
        </div>
        <div style={{...cardStyle, textAlign: 'center'}}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f59e0b' }}>26</div>
          <div>Bonnes réponses</div>
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
        <div style={cardStyle}>
          <h3 style={{ color: '#3b82f6', marginBottom: '15px' }}>🎯 Stratégie de Réponse</h3>
          <ol style={{ paddingLeft: '20px' }}>
            <li><strong>Lire 2 fois :</strong> Le piège est souvent dans les nuances</li>
            <li><strong>Éliminer 2 fausses :</strong> Il reste 2 plausibles</li>
            <li><strong>Appliquer un principe :</strong> Lequel guide la réponse ?</li>
            <li><strong>Si incertain :</strong> Choisir la plus simple et pratique</li>
          </ol>
        </div>
        
        <div style={cardStyle}>
          <h3 style={{ color: '#f59e0b', marginBottom: '15px' }}>⚠️ Pièges Fréquents</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>Mots absolus :</strong> "Toujours/Jamais" → Méfiance</li>
            <li><strong>Incident vs Problème :</strong> Restaurer vs Cause racine</li>
            <li><strong>Ordre des principes :</strong> Optimiser AVANT automatiser</li>
            <li><strong>Co-création :</strong> Valeur JAMAIS créée unilatéralement</li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard': return renderDashboard();
      case 'concepts':
      case 'principles':
      case 'dimensions':
      case 'chain':  
      case 'practices': return renderContentSection();
      case 'quiz': return renderQuiz();
      case 'exam': return renderExam();
      default: return renderDashboard();
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <div style={headerStyle}>
        <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5rem' }}>
          🎯 ITIL v4 Foundation
        </h1>
        <p style={{ margin: 0, opacity: 0.9 }}>Guide de Révision Interactif</p>
      </div>

      <nav style={navStyle}>
        {[
          { id: 'dashboard', label: '📊 Dashboard' },
          { id: 'concepts', label: '📚 Concepts' },
          { id: 'principles', label: '🎯 Principes' },
          { id: 'dimensions', label: '🔄 4 Dimensions' },
          { id: 'chain', label: '⚡ Chaîne Valeur' },
          { id: 'practices', label: '🛠 Pratiques' },
          { id: 'quiz', label: '❓ Quiz' },
          { id: 'exam', label: '🏆 Examen' }
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            style={navButtonStyle(activeSection === item.id)}
            onMouseOver={(e) => {
              if (activeSection !== item.id) {
                e.currentTarget.style.background = '#e9ecef';
              }
            }}
            onMouseOut={(e) => {
              if (activeSection !== item.id) {
                e.currentTarget.style.background = '#f8f9fa';
              }
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div style={sectionStyle}>
        {renderContent()}
      </div>

      <footer style={{ background: '#1f2937', color: 'white', padding: '30px', textAlign: 'center', marginTop: '50px' }}>
        <p style={{ margin: 0 }}>
          Site de révision ITIL v4 Foundation - Bonne chance pour votre examen ! 🍀
        </p>
      </footer>
    </div>
  );
}

export default App;