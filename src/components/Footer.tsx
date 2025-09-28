import React from 'react';
import { FooterProps } from '../types';

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
    return (
        <footer
            id="contato"
            className={`bg-gray-900 text-white py-12 ${className}`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-black font-bold">S</span>
                            </div>
                            <span className="text-xl font-bold">SENAC</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Transformando vidas através da educação profissional
                            de qualidade.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-cyan-400">
                            Institucional
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Sobre o SENAC
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Missão e Valores
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Transparência
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Trabalhe Conosco
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-cyan-400">
                            Cursos
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Técnicos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Graduação
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Pós-graduação
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Livres
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-cyan-400">
                            Contato
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>📞 (11) 3471-4000</li>
                            <li>📧 contato@senac.br</li>
                            <li>📍 São Paulo, SP</li>
                            <li className="flex space-x-3 pt-2">
                                <a
                                    href="#"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-cyan-400 transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>
                        &copy; 2024 SENAC. Todos os direitos reservados. |
                        Experiência Virtual desenvolvida com tecnologia Meta
                        Quest 3
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
