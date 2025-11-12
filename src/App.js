import React, { useState, useEffect } from 'react';
import { Gamepad2, Download, Star, Users, Trophy, Menu, X, Play, ArrowRight, Mail, Github, Twitter } from 'lucide-react';

const GamingPortfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Intersection Observer for scroll animations
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8;
        if (isInView) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const games = [
    {
      id: 1,
      title: "Sort Garbage",
      tagline: "The Ultimate Recycling Adventure",
      description: "An exciting and colorful game that teaches kids and families the importance of recycling and proper waste management. Sort different types of trash into the correct colorful bins and become a recycling hero! Features awesome power-ups like Magnet Power, Speed Boost, Auto-Sort, and Score Multiplier.",
      downloads: "0+",
      rating: 0,
      reviews: 0,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop&q=80",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.boyinfuture.sortgarbage",
      category: "Puzzle",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "Cricket Destruction",
      tagline: "Smash Your Way to Victory",
      description: "Experience the ultimate cricket action game with powerful hits and explosive gameplay. Destroy obstacles, score massive runs, and dominate the cricket field with spectacular shots and special powers.",
      downloads: "100+",
      rating: 0,
      reviews: 0,
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&h=600&fit=crop&q=80",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.boyinfuture.cricketdestruction",
      category: "Sports",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 3,
      title: "Zombie Alien: Space Adventure",
      tagline: "Run Through the Galaxy",
      description: "An action-adventure game where you run in space through interesting levels. Avoid dangerous weapons and obstacles to get max score and coins. Features dynamic platforms, various planets, and three knockback lives. Love the game with no annoying ads!",
      downloads: "5,000+",
      rating: 4.6,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=800&h=600&fit=crop&q=80",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.boyinfuture.ZombieAlienSpaceAdventure",
      category: "Action",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "Auto Express: Highway Heist",
      tagline: "Survive the Dangerous Highway",
      description: "A fast-paced action-adventure game through dangerous highways packed with deadly traps and powerful enemies. Play as a skilled auto driver navigating extraordinary roads filled with challenges. Features unique Indian-themed environments and relentless obstacles.",
      downloads: "50+",
      rating: 0,
      reviews: 0,
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop&q=80",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.boyinfuture.autoexpress",
      category: "Racing",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const stats = [
    { icon: Download, value: "31.1K+", label: "Total Downloads", gradient: "from-blue-400 to-blue-600" },
    { icon: Star, value: "4.6", label: "Average Rating", gradient: "from-yellow-400 to-yellow-600" },
    { icon: Users, value: "3K+", label: "Active Players", gradient: "from-green-400 to-green-600" },
    { icon: Trophy, value: "4", label: "Published Games", gradient: "from-purple-400 to-purple-600" }
  ];

  const categories = ['All', 'Puzzle', 'Sports', 'Action', 'Racing'];
  const filteredGames = activeFilter === 'All' ? games : games.filter(g => g.category === activeFilter);

  const styles = {
    main: {
      minHeight: '100vh',
      background: '#020617',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    },
    cursor: {
      position: 'fixed',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6), transparent)',
      pointerEvents: 'none',
      zIndex: 9999,
      transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`,
      transition: 'transform 0.1s ease-out',
      filter: 'blur(8px)'
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      ...(scrolled && {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)'
      })
    },
    navContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '80px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      animation: 'slideInLeft 0.8s ease-out'
    },
    logoIcon: {
      background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
      padding: '8px',
      borderRadius: '12px',
      animation: 'pulse 2s ease-in-out infinite',
      boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
    },
    logoText: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'white'
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem'
    },
    navLink: {
      color: '#d1d5db',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative'
    },
    btnPrimary: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '10px 24px',
      borderRadius: '9999px',
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
      position: 'relative',
      overflow: 'hidden'
    },
    hero: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(at 20% 30%, rgba(102, 126, 234, 0.3) 0px, transparent 50%), radial-gradient(at 80% 70%, rgba(118, 75, 162, 0.3) 0px, transparent 50%)',
      overflow: 'hidden'
    },
    heroOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, transparent, rgba(2, 6, 23, 0.5), #020617)'
    },
    heroContent: {
      position: 'relative',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '8rem 1.5rem',
      textAlign: 'center'
    },
    badge: {
      display: 'inline-block',
      marginBottom: '1.5rem',
      padding: '8px 24px',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '9999px',
      animation: 'fadeInDown 1s ease-out'
    },
    badgeText: {
      color: '#a78bfa',
      fontWeight: 600
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 8vw, 5rem)',
      fontWeight: 900,
      color: 'white',
      marginBottom: '1.5rem',
      lineHeight: 1.1,
      animation: 'fadeInUp 1s ease-out 0.2s both'
    },
    gradientText: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'shimmer 3s ease-in-out infinite',
      backgroundSize: '200% 200%'
    },
    heroSubtitle: {
      fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
      color: '#9ca3af',
      marginBottom: '2.5rem',
      maxWidth: '48rem',
      margin: '0 auto 2.5rem',
      lineHeight: 1.6,
      animation: 'fadeInUp 1s ease-out 0.4s both'
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '6rem',
      animation: 'fadeInUp 1s ease-out 0.6s both'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '1.5rem',
      maxWidth: '80rem',
      margin: '0 auto'
    },
    statCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '1rem',
      padding: '1.5rem',
      textAlign: 'center',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      animation: 'fadeInUp 1s ease-out both'
    },
    statIcon: {
      display: 'inline-flex',
      padding: '12px',
      borderRadius: '12px',
      marginBottom: '12px',
      transition: 'transform 0.3s ease'
    },
    statValue: {
      fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
      fontWeight: 900,
      color: 'white',
      marginBottom: '4px'
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#9ca3af',
      fontWeight: 500
    },
    section: {
      padding: '6rem 1.5rem',
      position: 'relative'
    },
    sectionTitle: {
      fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
      fontWeight: 800,
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #fff 0%, #a78bfa 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textAlign: 'center'
    },
    sectionSubtitle: {
      fontSize: '1.25rem',
      color: '#9ca3af',
      maxWidth: '42rem',
      margin: '0 auto 4rem',
      textAlign: 'center'
    },
    filterContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '12px',
      marginBottom: '3rem'
    },
    filterBtn: {
      padding: '10px 24px',
      borderRadius: '9999px',
      fontWeight: 600,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: 'none',
      cursor: 'pointer',
      transform: 'scale(1)'
    },
    gamesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '2rem',
      maxWidth: '1280px',
      margin: '0 auto'
    },
    gameCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative'
    },
    gameImage: {
      width: '100%',
      height: '14rem',
      objectFit: 'cover',
      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    gameContent: {
      padding: '1.5rem'
    },
    gameTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '4px'
    },
    gameTagline: {
      color: '#a78bfa',
      fontSize: '0.875rem',
      fontWeight: 600,
      marginBottom: '12px'
    },
    gameDescription: {
      color: '#9ca3af',
      marginBottom: '1rem',
      lineHeight: 1.6,
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    },
    gameStats: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.25rem',
      paddingBottom: '1.25rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    downloadBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: '100%',
      padding: '14px',
      borderRadius: '12px',
      fontWeight: 'bold',
      color: 'white',
      textDecoration: 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: 'none',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    glass: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    footer: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      padding: '3rem 1.5rem'
    },
    footerContent: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem'
    },
    footerText: {
      color: '#9ca3af',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.main}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.8);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.8);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .sparkle {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>

      {/* Custom Cursor */}
      <div style={styles.cursor}></div>

      {/* Floating particles */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: `rgba(168, 85, 247, ${Math.random() * 0.5})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <Gamepad2 style={{ width: '28px', height: '28px', color: 'white' }} />
            </div>
            <span style={styles.logoText}>yngStudio</span>
          </div>
          
          <div style={{...styles.navLinks, display: window.innerWidth < 768 ? 'none' : 'flex'}}>
            <a href="#home" style={styles.navLink} onMouseEnter={e => {
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }} onMouseLeave={e => {
              e.target.style.color = '#d1d5db';
              e.target.style.transform = 'translateY(0)';
            }}>Home</a>
            <a href="#games" style={styles.navLink} onMouseEnter={e => {
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }} onMouseLeave={e => {
              e.target.style.color = '#d1d5db';
              e.target.style.transform = 'translateY(0)';
            }}>Games</a>
            <a href="#about" style={styles.navLink} onMouseEnter={e => {
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-2px)';
            }} onMouseLeave={e => {
              e.target.style.color = '#d1d5db';
              e.target.style.transform = 'translateY(0)';
            }}>About</a>
            <a href="#contact" style={styles.btnPrimary} onMouseEnter={e => {
              e.target.style.transform = 'translateY(-2px) scale(1.05)';
              e.target.style.boxShadow = '0 20px 50px rgba(102, 126, 234, 0.6)';
            }} onMouseLeave={e => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
            }}>
              <span>Contact</span>
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: window.innerWidth >= 768 ? 'none' : 'block',
              background: 'none',
              border: 'none',
              color: 'white',
              padding: '8px',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X style={{ width: '24px', height: '24px' }} /> : <Menu style={{ width: '24px', height: '24px' }} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div style={{...styles.glass, borderTop: '1px solid rgba(255, 255, 255, 0.1)', animation: 'fadeInDown 0.3s ease-out'}}>
            <div style={{ padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="#home" style={{...styles.navLink, display: 'block', padding: '8px 0'}}>Home</a>
              <a href="#games" style={{...styles.navLink, display: 'block', padding: '8px 0'}}>Games</a>
              <a href="#about" style={{...styles.navLink, display: 'block', padding: '8px 0'}}>About</a>
              <a href="#contact" style={{...styles.navLink, display: 'block', padding: '8px 0'}}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        
        <div style={styles.heroContent}>
          <div style={styles.badge} className="sparkle">
            <span style={styles.badgeText}>🎮 Welcome to the Future of Mobile Gaming</span>
          </div>
          
          <h1 style={styles.heroTitle}>
            Epic Games.<br />
            <span style={styles.gradientText}>Endless Fun.</span>
          </h1>
          
          <p style={styles.heroSubtitle}>
            Immersive experiences crafted with passion. Join millions of players worldwide in our universe of addictive mobile games.
          </p>
          
          <div style={styles.buttonGroup}>
            <a 
              href="#games"
              style={styles.btnPrimary}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-4px) scale(1.05)';
                e.target.style.boxShadow = '0 20px 50px rgba(102, 126, 234, 0.6)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
              }}
            >
              <Play style={{ width: '20px', height: '20px' }} />
              <span>Explore Games</span>
              <ArrowRight style={{ width: '20px', height: '20px' }} />
            </a>
          </div>

          {/* Stats */}
          <div style={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                style={{...styles.statCard, animationDelay: `${0.8 + idx * 0.1}s`}}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05) rotate(2deg)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.3)';
                  const icon = e.currentTarget.querySelector('.stat-icon');
                  if (icon) icon.style.transform = 'scale(1.2) rotate(360deg)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                  e.currentTarget.style.boxShadow = 'none';
                  const icon = e.currentTarget.querySelector('.stat-icon');
                  if (icon) icon.style.transform = 'scale(1) rotate(0deg)';
                }}
              >
                <div 
                  className="stat-icon"
                  style={{
                    ...styles.statIcon,
                    background: `linear-gradient(135deg, ${stat.gradient.replace('from-', '').replace('to-', '').split(' ').join(', ')})`,
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <stat.icon style={{ width: '24px', height: '24px', color: 'white' }} />
                </div>
                <div style={styles.statValue}>{stat.value}</div>
                <div style={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" style={styles.section}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="animate-on-scroll">
            <h2 style={styles.sectionTitle}>Our Games</h2>
            <p style={styles.sectionSubtitle}>
              Download now and experience next-level gaming on your mobile device
            </p>
          </div>

          {/* Category Filter */}
          <div style={styles.filterContainer} className="animate-on-scroll">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  ...styles.filterBtn,
                  ...(activeFilter === cat 
                    ? {
                        background: 'linear-gradient(to right, #a855f7, #ec4899)',
                        color: 'white',
                        boxShadow: '0 10px 25px -3px rgba(168, 85, 247, 0.6)',
                        transform: 'scale(1.05)'
                      }
                    : {
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#9ca3af',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      })
                }}
                onMouseEnter={e => {
                  if (activeFilter !== cat) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'scale(1.05) translateY(-2px)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeFilter !== cat) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.color = '#9ca3af';
                    e.target.style.transform = 'scale(1) translateY(0)';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div style={styles.gamesGrid}>
            {filteredGames.map((game, idx) => (
              <div 
                key={game.id}
                className="animate-on-scroll"
                style={{...styles.gameCard, transitionDelay: `${idx * 0.1}s`}}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(168, 85, 247, 0.4)';
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.15) rotate(2deg)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1) rotate(0deg)';
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={game.image} 
                    alt={game.title}
                    style={styles.gameImage}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${game.color.replace('from-', '').replace('to-', '').split(' ').join(', ')})`,
                    opacity: 0,
                    transition: 'opacity 0.5s ease'
                  }}
                  onMouseEnter={e => e.target.style.opacity = '0.3'}
                  onMouseLeave={e => e.target.style.opacity = '0'}
                  ></div>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    ...styles.glass,
                    padding: '6px 16px',
                    borderRadius: '9999px',
                    animation: 'fadeInDown 0.5s ease-out'
                  }}>
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.875rem' }}>{game.category}</span>
                  </div>
                </div>
                
                <div style={styles.gameContent}>
                  <h3 style={styles.gameTitle}>{game.title}</h3>
                  <p style={styles.gameTagline}>{game.tagline}</p>
                  <p style={styles.gameDescription}>{game.description}</p>
                  
                  <div style={styles.gameStats}>
                    <div style={styles.rating}>
                      <Star style={{ width: '20px', height: '20px', color: '#fbbf24', fill: '#fbbf24' }} />
                      <span style={{ color: 'white', fontWeight: 'bold' }}>{game.rating || 'New'}</span>
                      {game.reviews > 0 && <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>({game.reviews})</span>}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af' }}>
                      <Download style={{ width: '20px', height: '20px' }} />
                      <span style={{ fontWeight: 600 }}>{game.downloads}</span>
                    </div>
                  </div>
                  
                  <a
                    href={game.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...styles.downloadBtn,
                      background: `linear-gradient(to right, ${game.color.replace('from-', '').replace('to-', '').split(' ').join(', ')})`
                    }}
                    onMouseEnter={e => {
                      e.target.style.transform = 'translateY(-3px) scale(1.02)';
                      e.target.style.boxShadow = '0 20px 35px -5px rgba(0, 0, 0, 0.4)';
                    }}
                    onMouseLeave={e => {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                    onClick={e => {
                      // Ripple effect
                      const ripple = document.createElement('span');
                      ripple.style.position = 'absolute';
                      ripple.style.borderRadius = '50%';
                      ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                      ripple.style.width = '100px';
                      ripple.style.height = '100px';
                      ripple.style.left = e.nativeEvent.offsetX - 50 + 'px';
                      ripple.style.top = e.nativeEvent.offsetY - 50 + 'px';
                      ripple.style.animation = 'ripple 0.6s ease-out';
                      ripple.style.pointerEvents = 'none';
                      e.target.appendChild(ripple);
                      setTimeout(() => ripple.remove(), 600);
                    }}
                  >
                    <Play style={{ width: '20px', height: '20px' }} />
                    <span>Download Now</span>
                    <ArrowRight style={{ width: '20px', height: '20px' }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{...styles.section, ...styles.glass}}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }} className="animate-on-scroll">
          <h2 style={styles.sectionTitle}>About yngStudio</h2>
          <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            We're not just developers—we're gamers at heart. Our mission is to create 
            immersive, engaging experiences that bring joy to millions of players worldwide.
          </p>
          <p style={{ fontSize: '1.125rem', color: '#9ca3af', lineHeight: 1.6 }}>
            With cutting-edge technology, stunning visuals, and addictive gameplay, 
            we're pushing the boundaries of mobile gaming. Every download, every 5-star 
            review, every player milestone drives us to create even better games.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
            {[
              { value: '100K+', label: 'Happy Players' },
              { value: '4', label: 'Games Published' },
              { value: '4.6★', label: 'Average Rating' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                style={{ textAlign: 'center' }}
                className="animate-on-scroll"
                onMouseEnter={e => {
                  const value = e.currentTarget.querySelector('.about-value');
                  if (value) {
                    value.style.transform = 'scale(1.2) rotate(5deg)';
                  }
                }}
                onMouseLeave={e => {
                  const value = e.currentTarget.querySelector('.about-value');
                  if (value) {
                    value.style.transform = 'scale(1) rotate(0deg)';
                  }
                }}
              >
                <div 
                  className="about-value"
                  style={{ 
                    fontSize: '3rem', 
                    fontWeight: 900, 
                    ...styles.gradientText, 
                    marginBottom: '12px',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {item.value}
                </div>
                <div style={{ color: '#9ca3af', fontWeight: 600 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }} className="animate-on-scroll">
          <h2 style={styles.sectionTitle}>Let's Connect</h2>
          <p style={{ fontSize: '1.25rem', color: '#9ca3af', marginBottom: '3rem' }}>
            Got feedback? Questions? Business inquiries? We'd love to hear from you!
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <a 
              href="mailto:contact@yngstudio.com"
              style={{
                ...styles.glass,
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={e => {
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                e.target.style.transform = 'translateY(-5px) scale(1.05)';
                e.target.style.boxShadow = '0 15px 30px rgba(168, 85, 247, 0.3)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <Mail style={{ width: '20px', height: '20px' }} />
              <span>Email Us</span>
            </a>
            <a 
              href="https://twitter.com/yngstudio"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.btnPrimary,
                padding: '1rem 2rem'
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-5px) scale(1.05)';
                e.target.style.boxShadow = '0 20px 50px rgba(102, 126, 234, 0.6)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
              }}
            >
              <Twitter style={{ width: '20px', height: '20px' }} />
              <span>Follow on Twitter</span>
            </a>
            <a 
              href="https://github.com/yngstudio"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.glass,
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                fontWeight: 'bold',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={e => {
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                e.target.style.transform = 'translateY(-5px) scale(1.05)';
                e.target.style.boxShadow = '0 15px 30px rgba(168, 85, 247, 0.3)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <Github style={{ width: '20px', height: '20px' }} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.logo}>
            <div style={styles.logoIcon}>
              <Gamepad2 style={{ width: '24px', height: '24px', color: 'white' }} />
            </div>
            <span style={styles.logoText}>yngStudio</span>
          </div>
          <div style={styles.footerText}>
            <p style={{ marginBottom: '4px' }}>&copy; 2025 yngStudio. All rights reserved.</p>
            <p style={{ fontSize: '0.875rem' }}>Crafted with ❤️ for gamers worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GamingPortfolio;