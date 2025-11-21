import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const SocialGate = ({ onUnlock, initiallyUnlocked = false }) => {
  const [tasksClicked, setTasksClicked] = useState({
    telegram: false,
    twitter: false,
    retweet: false
  });
  const [hasUnlocked, setHasUnlocked] = useState(initiallyUnlocked);
  const [showGate, setShowGate] = useState(true);

  const allTasksClicked = Object.values(tasksClicked).every(Boolean);

  // Check localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('brokeGateUnlocked');
    if (stored === 'true') {
      setHasUnlocked(true);
      setShowGate(false);
      onUnlock();
    }
  }, [onUnlock]);

  // Auto-unlock when all tasks are clicked (no countdown delay)
  useEffect(() => {
    // Auto-unlock when all tasks completed
    if (allTasksClicked && !hasUnlocked) {
      // Unlocking claim access
      setHasUnlocked(true);
      localStorage.setItem('brokeGateUnlocked', 'true');
      setTimeout(() => {
        onUnlock();
        setShowGate(false);
      }, 1000); // Just 1 second delay for smooth transition
    }
  }, [allTasksClicked, hasUnlocked, onUnlock]);

  const handleTaskClick = (task, url) => {
    // Track task completion
    // Mark task as clicked
    setTasksClicked(prev => {
      const newState = { ...prev, [task]: true };
      // Update task state
      return newState;
    });
    // Open link
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Debug log for allTasksClicked
  useEffect(() => {
    // Task state monitoring removed for production
  }, [tasksClicked, allTasksClicked]);

  if (!showGate) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-1 lg:space-y-2"
      style={{
        fontFamily: 'IBM Plex Mono',
        fontWeight: 500,
        color: '#0B8A04',
        fontSize: '0.75rem' // Smaller on mobile
      }}
    >
      {/* Desktop version - full text */}
      <div className="hidden lg:block" style={{ fontSize: '0.9rem' }}>
        <p>> SECURITY PROTOCOL ACTIVATED</p>
        <p>> VERIFYING BROKE CREDENTIALS...</p>
        <p></p>
        <p>> COMPLETE ALL TASKS TO UNLOCK CLAIM:</p>
      </div>
      
      {/* Mobile version - condensed text */}
      <div className="block lg:hidden">
        <p>> COMPLETE ALL TASKS TO UNLOCK CLAIM:</p>
      </div>
      
      <p></p>
      
      {/* Task 1: Telegram */}
      <div className="pl-4 flex items-center justify-between">
        <span className="text-sm lg:text-base">[1] JOIN TELEGRAM COMMUNITY</span>
        <button
          onClick={() => handleTaskClick('telegram', 'https://t.me/brokecoinbillionares')}
          disabled={tasksClicked.telegram}
          className={`inline-flex items-center space-x-1 text-xs border px-2 py-1 transition-colors ${
            tasksClicked.telegram 
              ? 'border-green-500 bg-green-500 bg-opacity-20 cursor-not-allowed' 
              : 'border-green-500 hover:bg-green-500 hover:bg-opacity-20 cursor-pointer'
          }`}
          style={{ color: '#0B8A04' }}
        >
          <span>{tasksClicked.telegram ? 'OPENED' : 'OPEN'}</span>
          {!tasksClicked.telegram && <ExternalLink className="w-3 h-3" />}
        </button>
      </div>

      {/* Task 2: Follow X */}
      <div className="pl-4 flex items-center justify-between">
        <span className="text-sm lg:text-base">[2] FOLLOW @BROKECOINBASE</span>
        <button
          onClick={() => handleTaskClick('twitter', 'https://x.com/brokecoinbase')}
          disabled={tasksClicked.twitter}
          className={`inline-flex items-center space-x-1 text-xs border px-2 py-1 transition-colors ${
            tasksClicked.twitter 
              ? 'border-green-500 bg-green-500 bg-opacity-20 cursor-not-allowed' 
              : 'border-green-500 hover:bg-green-500 hover:bg-opacity-20 cursor-pointer'
          }`}
          style={{ color: '#0B8A04' }}
        >
          <span>{tasksClicked.twitter ? 'OPENED' : 'FOLLOW'}</span>
          {!tasksClicked.twitter && <ExternalLink className="w-3 h-3" />}
        </button>
      </div>

      {/* Task 3: Retweet */}
      <div className="pl-4 flex items-center justify-between">
        <span className="text-sm lg:text-base">[3] RETWEET LAUNCH POST</span>
        <button
          onClick={() => handleTaskClick('retweet', 'https://x.com/brokecoinbase/status/1991626443613413734?s=20')}
          disabled={tasksClicked.retweet}
          className={`inline-flex items-center space-x-1 text-xs border px-2 py-1 transition-colors ${
            tasksClicked.retweet 
              ? 'border-green-500 bg-green-500 bg-opacity-20 cursor-not-allowed' 
              : 'border-green-500 hover:bg-green-500 hover:bg-opacity-20 cursor-pointer'
          }`}
          style={{ color: '#0B8A04' }}
        >
          <span>{tasksClicked.retweet ? 'OPENED' : 'RETWEET'}</span>
          {!tasksClicked.retweet && <ExternalLink className="w-3 h-3" />}
        </button>
      </div>

      <p></p>

      {/* Status */}
      <div className="pt-1 lg:pt-2 border-t border-green-500 border-opacity-30">
        {allTasksClicked ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-0 lg:space-y-1"
          >
            <p>> ALL TASKS COMPLETED</p>
            <p>> VERIFYING COMPLIANCE...</p>
            <p style={{ color: '#0BFF04' }}>> ACCESS GRANTED</p>
          </motion.div>
        ) : (
          <div className="space-y-0 lg:space-y-1">
            {/* Desktop status - full text */}
            <div className="hidden lg:block">
              <p>> PROGRESS: {Object.values(tasksClicked).filter(Boolean).length}/3 TASKS</p>
              <p style={{ color: '#ff4444' }}>> CLICK ALL BUTTONS TO PROCEED</p>
              <p className="text-xs opacity-75">> MANUAL VERIFICATION IN PROGRESS</p>
              <p className="text-xs opacity-75">> FAKE CLAIMS WILL BE REVOKED</p>
            </div>
            
            {/* Mobile status - minimal text */}
            <div className="block lg:hidden">
              <p>> PROGRESS: {Object.values(tasksClicked).filter(Boolean).length}/3</p>
              <p style={{ color: '#ff4444' }}>> CLICK ALL BUTTONS</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SocialGate;
