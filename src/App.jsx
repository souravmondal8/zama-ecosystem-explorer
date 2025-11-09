import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Filter, Globe, Lock, Cpu, Coins, Brain, Database, Gamepad2, Vote, Shield, Layers } from 'lucide-react';

const ZamaEcosystemExplorer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const ecosystemProjects = [
    {
      name: 'Fhenix',
      category: 'Infrastructure',
      description: 'FHE Layer 2 rollup enabling confidential transactions in the Ethereum ecosystem',
      website: 'https://www.fhenix.io/',
      logo: '🔒',
      tags: ['L2', 'Ethereum', 'FHE']
    },
    {
      name: 'Inco Network',
      category: 'Infrastructure',
      description: 'EVM-based Layer-1 blockchain secured by Ethereum through EigenLayer, offering Confidentiality-as-a-Service',
      website: 'https://www.inco.org/',
      logo: '🛡️',
      tags: ['L1', 'EigenLayer', 'Modular']
    },
    {
      name: 'Mind Network',
      category: 'Infrastructure',
      description: 'FHE-based general-purpose Restaking Rollup bringing secure computation to EigenLayer and Ethereum',
      website: 'https://mindnetwork.xyz/',
      logo: '🧠',
      tags: ['Restaking', 'FHE', 'AI']
    },
    {
      name: 'Shiba Inu',
      category: 'DeFi',
      description: 'Building privacy-focused network on Shibarium using FHE for confidential transactions',
      website: 'https://shibatoken.com/',
      logo: '🐕',
      tags: ['Privacy', 'L3', 'TREAT']
    },
    {
      name: 'Coffhee',
      category: 'DeFi',
      description: 'Encrypted decentralized exchange (DEX) for trading confidential ERC-20 tokens',
      website: 'https://coffhee.io/',
      logo: '☕',
      tags: ['DEX', 'Trading', 'Privacy']
    },
    {
      name: 'Galactica Network',
      category: 'Identity',
      description: 'Identity Virtual Machine (IVM) positioning actionable identity as core primitive for Web3 dApps',
      website: 'https://galactica.com/',
      logo: '🆔',
      tags: ['Identity', 'IVM', 'DApps']
    },
    {
      name: 'OpenZeppelin',
      category: 'Infrastructure',
      description: 'Working with Zama on standardization of Confidential ERC-20 token standard',
      website: 'https://www.openzeppelin.com/',
      logo: '🔐',
      tags: ['Standards', 'Security', 'ERC-20']
    },
    {
      name: 'Optalysys',
      category: 'Infrastructure',
      description: 'Hardware acceleration partner for FHE, developing quantum-resilient cryptography solutions',
      website: 'https://optalysys.com/',
      logo: '⚡',
      tags: ['Hardware', 'Acceleration', 'Quantum']
    },
    {
      name: 'Zama Portal',
      category: 'Tooling',
      description: 'Gateway to Zama Protocol unlocking confidential apps, communities, and earning opportunities',
      website: 'https://portal.zama.ai/',
      logo: '🌐',
      tags: ['Gateway', 'dApps', 'Portal']
    },
    {
      name: 'TEN Protocol',
      category: 'Infrastructure',
      description: 'TEE-native execution layer making Ethereum private and scalable',
      website: 'https://ten.xyz/',
      logo: '🔏',
      tags: ['TEE', 'Privacy', 'L2']
    },
    {
      name: 'Octra',
      category: 'Infrastructure',
      description: 'Modular homomorphic-first privacy protocol',
      website: 'https://octra.network/',
      logo: '🎯',
      tags: ['Modular', 'Privacy', 'Protocol']
    },
    {
      name: 'Concrete ML',
      category: 'AI',
      description: 'Privacy-preserving ML framework using FHE, built on Concrete with ML framework bindings',
      website: 'https://github.com/zama-ai/concrete-ml',
      logo: '🤖',
      tags: ['ML', 'AI', 'Privacy']
    },
    {
      name: 'TFHE-rs',
      category: 'Tooling',
      description: 'Pure Rust implementation of TFHE scheme for Boolean and integer arithmetics over encrypted data',
      website: 'https://github.com/zama-ai/tfhe-rs',
      logo: '🦀',
      tags: ['Rust', 'Library', 'Core']
    },
    {
      name: 'fhEVM',
      category: 'Tooling',
      description: 'Full-stack framework integrating Fully Homomorphic Encryption with blockchain applications',
      website: 'https://github.com/zama-ai/fhevm',
      logo: '⚙️',
      tags: ['EVM', 'Framework', 'Smart Contracts']
    },
    {
      name: 'Tokenised GBP',
      category: 'DeFi',
      description: 'Stablecoin pegged 1:1 to British Pound with confidential transfers',
      website: 'https://tgbp.io/',
      logo: '💷',
      tags: ['Stablecoin', 'GBP', 'Payments']
    }
  ];

  const categories = ['All', 'Infrastructure', 'DeFi', 'AI', 'Identity', 'Tooling'];

  const categoryIcons = {
    'All': Globe,
    'Infrastructure': Layers,
    'DeFi': Coins,
    'AI': Brain,
    'Identity': Shield,
    'Tooling': Cpu
  };

  const filteredProjects = useMemo(() => {
    return ecosystemProjects.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const zamaLinks = [
    { name: 'Website', url: 'https://www.zama.ai', icon: Globe },
    { name: 'Documentation', url: 'https://docs.zama.ai', icon: ExternalLink },
    { name: 'GitHub', url: 'https://github.com/zama-ai', icon: ExternalLink },
    { name: 'Discord', url: 'https://discord.gg/zama', icon: ExternalLink },
    { name: 'Twitter', url: 'https://twitter.com/zama_fhe', icon: ExternalLink }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-black bg-opacity-30 backdrop-blur-sm border-b border-purple-500 border-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 485 485" className="w-12 h-12" fill="black">
                  <path d="M119 112h244v42H119z"/>
                  <path d="M119 322h244v42H119z"/>
                  <path d="M326 154L119 322l28 28 207-168z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Zama Ecosystem Explorer
                </h1>
                <p className="text-purple-300 text-sm mt-1">Powered by Fully Homomorphic Encryption</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" size={20} />
            <input
              type="text"
              placeholder="Search projects, tags, or descriptions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-black bg-opacity-30 border border-purple-500 border-opacity-30 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-500/50'
                      : 'bg-black bg-opacity-30 border border-purple-500 border-opacity-30 hover:border-opacity-60'
                  }`}
                >
                  <Icon size={18} />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-black bg-opacity-30 backdrop-blur-sm border border-purple-500 border-opacity-30 rounded-xl p-6">
            <div className="text-4xl font-bold text-purple-400">{ecosystemProjects.length}</div>
            <div className="text-purple-300 mt-2">Total Projects</div>
          </div>
          <div className="bg-black bg-opacity-30 backdrop-blur-sm border border-purple-500 border-opacity-30 rounded-xl p-6">
            <div className="text-4xl font-bold text-blue-400">{filteredProjects.length}</div>
            <div className="text-purple-300 mt-2">Filtered Results</div>
          </div>
          <div className="bg-black bg-opacity-30 backdrop-blur-sm border border-purple-500 border-opacity-30 rounded-xl p-6">
            <div className="text-4xl font-bold text-indigo-400">{categories.length - 1}</div>
            <div className="text-purple-300 mt-2">Categories</div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-30 backdrop-blur-sm border border-purple-500 border-opacity-30 rounded-xl p-6 hover:border-opacity-60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{project.logo}</div>
                <span className="px-3 py-1 bg-purple-600 bg-opacity-40 rounded-full text-xs font-medium">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                {project.name}
              </h3>
              
              <p className="text-purple-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-indigo-600 bg-opacity-30 rounded text-xs text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 duration-200"
              >
                <span className="text-sm font-medium">Visit Project</span>
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Zama Official Links */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 bg-opacity-50 backdrop-blur-sm border border-purple-500 border-opacity-30 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Zama Official Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {zamaLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2 p-4 bg-black bg-opacity-30 rounded-lg hover:bg-opacity-50 transition-all duration-200 hover:scale-105"
                >
                  <Icon size={24} className="text-purple-400" />
                  <span className="text-sm text-center">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* About Zama */}
        <div className="bg-black bg-opacity-30 backdrop-blur-sm border border-purple-500 border-opacity-30 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">About Zama</h2>
          <p className="text-purple-300 leading-relaxed mb-4">
            Zama is an open source cryptography company building state-of-the-art Fully Homomorphic Encryption (FHE) 
            solutions for blockchain and AI. The Zama Confidential Blockchain Protocol enables confidential smart contracts 
            on top of any L1 or L2 using FHE, keeping onchain data encrypted at all times, even during processing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-purple-900 bg-opacity-20 rounded-lg p-4">
              <div className="font-bold text-purple-400 mb-2">💰 Funding</div>
              <div className="text-purple-300">$73M Series A led by Multicoin Capital and Protocol Labs</div>
            </div>
            <div className="bg-purple-900 bg-opacity-20 rounded-lg p-4">
              <div className="font-bold text-purple-400 mb-2">🎯 Mission</div>
              <div className="text-purple-300">Make the internet encrypted end-to-end by default</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-purple-500 border-opacity-30">
          <p className="text-purple-300 text-sm">
            Made with ❤️ by{' '}
            <a
              href="https://twitter.com/0x_EtherSoul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors underline"
            >
              @0x_EtherSoul
            </a>
          </p>
          <p className="text-purple-400 text-xs mt-2">
            Explore the future of privacy with Fully Homomorphic Encryption
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZamaEcosystemExplorer;
