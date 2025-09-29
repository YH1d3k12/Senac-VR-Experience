import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { environments } from '../utils/environments';
import { Environment } from '../types';

interface SideNavigationProps {
    currentEnvironment: Environment;
}

const SideNavigation: React.FC<SideNavigationProps> = ({
    currentEnvironment,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const handleEnvironmentChange = (environmentId: string) => {
        navigate(`/viewer/${environmentId}`);
        setIsOpen(false);
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/70 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/90 transition-all duration-300 ${
                    isOpen ? 'translate-x-64' : 'translate-x-0'
                }`}
            >
                <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>

            {/* Side Panel */}
            <div
                className={`fixed left-0 top-0 h-full w-64 bg-black/80 backdrop-blur-md z-20 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="p-6 pt-20">
                    <h3 className="text-white font-bold text-lg mb-6">
                        Ambientes
                    </h3>

                    <div className="space-y-3">
                        {environments.map(env => (
                            <button
                                key={env.id}
                                onClick={() => handleEnvironmentChange(env.id)}
                                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                                    env.id === id
                                        ? 'bg-cyan-400/20 border border-cyan-400/50 text-cyan-400'
                                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <div
                                        className={`w-3 h-3 rounded-full ${
                                            env.id === id
                                                ? 'bg-cyan-400'
                                                : 'bg-gray-500'
                                        }`}
                                    />
                                    <div>
                                        <div className="font-medium text-sm">
                                            {env.name}
                                        </div>
                                        <div className="text-xs opacity-70 line-clamp-2">
                                            {env.description}
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                        <div className="text-center">
                            <div className="text-xs text-gray-400 mb-2">
                                Navegação Rápida
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-xs text-green-400">
                                    VR Ready
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-10"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default SideNavigation;
