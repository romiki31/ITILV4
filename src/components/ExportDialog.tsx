import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Image, X } from 'lucide-react';
import { UserProgress } from '../types';

interface ExportDialogProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  overallProgress: number;
  averageScore: number;
}

export function ExportDialog({ isOpen, onClose, progress, overallProgress, averageScore }: ExportDialogProps) {
  const [exportType, setExportType] = useState<'pdf' | 'json' | 'csv'>('pdf');

  if (!isOpen) return null;

  const generateReport = () => {
    const reportData = {
      timestamp: new Date().toISOString(),
      overallProgress,
      averageScore,
      conceptsStudied: progress.conceptsStudied.size,
      totalTimeStudied: progress.totalTimeStudied,
      streak: progress.streak,
      quizScores: progress.quizScores,
      strengths: progress.strengths,
      weakAreas: progress.weakAreas
    };

    switch (exportType) {
      case 'json':
        downloadJSON(reportData);
        break;
      case 'csv':
        downloadCSV(reportData);
        break;
      case 'pdf':
        generatePDF(reportData);
        break;
    }
    
    onClose();
  };

  const downloadJSON = (data: any) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `itil-v4-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadCSV = (data: any) => {
    const csvContent = [
      ['Métrique', 'Valeur'],
      ['Progression globale', `${data.overallProgress}%`],
      ['Score moyen', `${data.averageScore}%`],
      ['Concepts étudiés', data.conceptsStudied],
      ['Temps d\'étude (minutes)', data.totalTimeStudied],
      ['Série de jours', data.streak],
      ...Object.entries(data.quizScores).map(([category, scores]) => [
        `Quiz ${category}`, 
        (scores as number[]).join(';')
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `itil-v4-progress-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generatePDF = (data: any) => {
    // Simple HTML report for now - could be enhanced with a PDF library
    const htmlContent = `
      <html>
        <head>
          <title>Rapport de Progression ITIL v4</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            .header { text-align: center; border-bottom: 2px solid #333; pb: 20px; mb: 30px; }
            .metric { margin: 15px 0; padding: 10px; background: #f5f5f5; border-radius: 5px; }
            .section { margin: 30px 0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🎯 Rapport de Progression ITIL v4 Foundation</h1>
            <p>Généré le ${new Date().toLocaleDateString('fr-FR')}</p>
          </div>
          
          <div class="section">
            <h2>📊 Métriques Principales</h2>
            <div class="metric">Progression globale: <strong>${data.overallProgress}%</strong></div>
            <div class="metric">Score moyen aux quiz: <strong>${data.averageScore}%</strong></div>
            <div class="metric">Concepts étudiés: <strong>${data.conceptsStudied}</strong></div>
            <div class="metric">Temps d'étude: <strong>${Math.floor(data.totalTimeStudied / 60)}h ${data.totalTimeStudied % 60}m</strong></div>
            <div class="metric">Série de jours consécutifs: <strong>${data.streak}</strong></div>
          </div>
          
          <div class="section">
            <h2>🎯 Performances par Quiz</h2>
            ${Object.entries(data.quizScores).map(([category, scores]) => `
              <div class="metric">
                <strong>${category.charAt(0).toUpperCase() + category.slice(1)}:</strong> 
                ${(scores as number[]).join('%, ')}%
                (Moyenne: ${Math.round((scores as number[]).reduce((a, b) => a + b, 0) / (scores as number[]).length)}%)
              </div>
            `).join('')}
          </div>
          
          <div class="section">
            <h2>💡 Recommandations</h2>
            ${data.averageScore < 70 ? '<p>📚 Concentrez-vous sur la révision des concepts fondamentaux.</p>' : ''}
            ${data.averageScore >= 85 ? '<p>🏆 Excellent ! Vous êtes prêt pour l\'examen.</p>' : ''}
            ${data.conceptsStudied < 25 ? '<p>🎯 Continuez à explorer toutes les sections du cours.</p>' : ''}
          </div>
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `itil-v4-rapport-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl p-6 max-w-md w-full mx-4"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Exporter les Données</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Format d'export
            </label>
            <div className="space-y-2">
              <button
                onClick={() => setExportType('pdf')}
                className={`w-full p-3 text-left border rounded-lg transition-colors ${
                  exportType === 'pdf' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="font-medium">Rapport HTML</div>
                    <div className="text-sm text-gray-600">Rapport détaillé lisible</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setExportType('json')}
                className={`w-full p-3 text-left border rounded-lg transition-colors ${
                  exportType === 'json' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">Données JSON</div>
                    <div className="text-sm text-gray-600">Format technique complet</div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setExportType('csv')}
                className={`w-full p-3 text-left border rounded-lg transition-colors ${
                  exportType === 'csv' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-medium">Tableur CSV</div>
                    <div className="text-sm text-gray-600">Pour Excel ou Google Sheets</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={generateReport}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Exporter</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}