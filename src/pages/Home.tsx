import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EnvironmentCard from '../components/EnvironmentCard';
import { environments } from '../utils/environments';
import { Environment } from '../types';

const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleEnvironmentClick = (environment: Environment) => {
        navigate(`/viewer/${environment.id}`);
    };

    const scrollToAmbientes = () => {
        const element = document.getElementById('ambientes');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen gradient-bg">
            <Navbar onLogoClick={() => navigate('/')} />

            {/* Hero Section */}
            <section id="home" className="pt-24 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Explore o{' '}
                            <span className="text-glow text-cyan-400">
                                SENAC
                            </span>
                            <br />
                            em{' '}
                            <span className="text-glow text-cyan-400">
                                Realidade Virtual
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Descubra nossos ambientes educacionais através de
                            uma experiência imersiva desenvolvida especialmente
                            para o Meta Quest 3
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <button
                            onClick={scrollToAmbientes}
                            className="btn-futuristic px-8 py-4 rounded-full text-lg font-semibold"
                        >
                            Explorar Ambientes
                        </button>
                        <button className="px-8 py-4 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300">
                            Saiba Mais
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🥽</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Experiência Imersiva
                            </h3>
                            <p className="text-gray-400">
                                Navegue pelos ambientes como se estivesse
                                fisicamente presente
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">🏢</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Ambientes Reais
                            </h3>
                            <p className="text-gray-400">
                                Modelos 3D precisos dos espaços físicos do SENAC
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Multi-plataforma
                            </h3>
                            <p className="text-gray-400">
                                Compatível com Meta Quest 3, desktop e mobile
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-6 bg-black/20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Inovação em{' '}
                                <span className="text-cyan-400">Educação</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-6">
                                O SENAC está na vanguarda da educação
                                profissional, utilizando tecnologias de
                                realidade virtual para proporcionar experiências
                                educacionais únicas e envolventes.
                            </p>
                            <p className="text-gray-300 text-lg mb-8">
                                Nossa plataforma permite que estudantes e
                                visitantes explorem nossos ambientes
                                educacionais de forma interativa, conhecendo
                                cada espaço em detalhes através do Meta Quest 3.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center">
                                    <span className="text-green-400 text-xl">
                                        ✓
                                    </span>
                                </div>
                                <span className="text-white">
                                    Certificado para Meta Quest 3
                                </span>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-full h-80 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center glow-effect">
                                <span className="text-8xl opacity-50">🎓</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Environments Section */}
            <section id="ambientes" className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Ambientes{' '}
                            <span className="text-cyan-400">Interativos</span>
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Explore cada ambiente do SENAC em detalhes. Clique
                            em um card para iniciar sua jornada virtual.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {environments.map(environment => (
                            <EnvironmentCard
                                key={environment.id}
                                environment={environment}
                                onClick={handleEnvironmentClick}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
