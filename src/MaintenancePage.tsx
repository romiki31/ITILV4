import React from 'react';

const MaintenancePage: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '60px 40px',
        borderRadius: '20px',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '600px',
        width: '100%'
      }}>
        <div style={{
          fontSize: '80px',
          marginBottom: '30px',
          animation: 'bounce 2s infinite'
        }}>🚀</div>
        <h1 style={{
          color: '#333',
          fontSize: '2.5rem',
          marginBottom: '20px',
          fontWeight: 700
        }}>Site en maintenance</h1>
        <p style={{
          color: '#666',
          fontSize: '1.3rem',
          marginBottom: '30px',
          fontWeight: 500
        }}>Je suis en train de vous concocter un site 100 fois mieux !</p>
        
        <div style={{
          background: '#f0f0f0',
          borderRadius: '20px',
          padding: '8px',
          marginBottom: '30px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '12px',
            background: 'linear-gradient(90deg, #667eea, #764ba2)',
            borderRadius: '12px',
            width: '75%',
            animation: 'pulse 2s ease-in-out infinite'
          }}></div>
        </div>
        
        <p style={{
          color: '#555',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          marginBottom: '40px'
        }}>
          Le site ITIL v4 Foundation fait peau neuve ! Je travaille d'arrache-pied pour vous offrir une expérience d'apprentissage encore plus performante et intuitive.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{
            background: '#f8f9ff',
            padding: '25px 20px',
            borderRadius: '15px',
            border: '2px solid #e3e8ff'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📚</div>
            <h3 style={{ color: '#333', fontSize: '1.2rem', marginBottom: '10px' }}>Contenu enrichi</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Plus de concepts, d'exemples pratiques et de conseils d'examen</p>
          </div>
          <div style={{
            background: '#f8f9ff',
            padding: '25px 20px',
            borderRadius: '15px',
            border: '2px solid #e3e8ff'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🎯</div>
            <h3 style={{ color: '#333', fontSize: '1.2rem', marginBottom: '10px' }}>Quiz améliorés</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Questions d'entraînement plus ciblées avec explications détaillées</p>
          </div>
          <div style={{
            background: '#f8f9ff',
            padding: '25px 20px',
            borderRadius: '15px',
            border: '2px solid #e3e8ff'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>⚡</div>
            <h3 style={{ color: '#333', fontSize: '1.2rem', marginBottom: '10px' }}>Performance optimisée</h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>Chargement ultra-rapide et expérience utilisateur fluide</p>
          </div>
        </div>
        
        <div style={{
          background: '#f0f7ff',
          padding: '25px',
          borderRadius: '15px',
          border: '2px solid #d1e7ff'
        }}>
          <h3 style={{ color: '#333', marginBottom: '10px' }}>🔔 Restez informé</h3>
          <p style={{ color: '#666', marginBottom: '15px' }}>Le nouveau site sera bientôt en ligne. Merci pour votre patience !</p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default MaintenancePage;