import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ModelViewer from '../components/ModelViewer';
import { environments } from '../utils/environments';
import { Environment, InfoPoint } from '../types';

const Viewer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [environment, setEnvironment] = useState<Environment | null>(null);
  const [infoPoints, setInfoPoints] = useState<InfoPoint[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const env = environments.find(e => e.id === id);
    if (env) {
      setEnvironment(env);
      setInfoPoints(env.infoPoints || []);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const handleInfoPointToggle = (pointId: string) => {
    setInfoPoints(prev => 
      prev.map(point => 
        point.id === pointId 
          ? { ...point, visible: !point.visible }
          : { ...point, visible: false }
      )
    );
  };

  const toggleAllInfoPoints = () => {
    const allVisible = infoPoints.every(point => point.visible);
    setInfoPoints(prev => 
      prev.map(point => ({ ...point, visible: !allVisible }))
    );
  };

  const playAudio = () => {
    setIsPlaying(!isPlaying);
    // Aqui seria implementada a funcionalidade de áudio
    console.log('Toggle audio for:', environment?.name);
  };

  if (!environment) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p>Carregando ambiente...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-black/70 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Voltar</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">{environment.name}</h1>
            <p className="text-cyan-400 text-sm">Experiência Virtual</p>
          </div>
          
          <button
            onClick={() => setShowControls(!showControls)}
            className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-black/70 transition-all"
          >
            {showControls ? 'Ocultar' : 'Mostrar'} Controles
          </button>
        </div>
      </div>

      {/* 3D Viewer */}
      <div className="absolute inset-0 pt-20">
        <ModelViewer
          modelPath={environment.modelPath}
          infoPoints={infoPoints}
          onInfoPointToggle={handleInfoPointToggle}
        />
      </div>

      {/* Controls Panel */}
      {showControls && (
        <div className="absolute bottom-6 left-6 right-6 z-20">
          <div className="bg-black/50 backdrop-blur-md rounded-xl p-6 max-w-md mx-auto">
            <h3 className="text-white font-semibold mb-4">Controles</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <button
                onClick={playAudio}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all ${
                  isPlaying 
                    ? 'bg-cyan-400 text-black' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isPlaying ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15" />
                  )}
                </svg>
                <span className="text-sm">{isPlaying ? 'Pausar' : 'Áudio'}</span>
              </button>
              
              <button
                onClick={toggleAllInfoPoints}
                className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Info</span>
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-gray-300 text-sm mb-2">{environment.description}</p>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400">Meta Quest 3 Ready</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute top-24 right-6 z-20">
        <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 max-w-xs">
          <h4 className="text-white font-semibold mb-2">Como navegar:</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>🖱️ Clique e arraste para rotacionar</li>
            <li>🔍 Scroll para zoom</li>
            <li>ℹ️ Clique nos pontos azuis para informações</li>
            <li>🥽 Use Meta Quest 3 para experiência completa</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Viewer;

