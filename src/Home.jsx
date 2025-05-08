import { useState, useEffect, useRef } from 'react';
import 'prismjs/themes/prism-tomorrow.css';
import Editor from 'react-simple-code-editor';
import * as prism from 'prismjs';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { Copy, Check, Sparkles } from 'lucide-react';

function Home() {
  const [code, setCode] = useState(() => [
    '// Unleash the AI...',
    'function analyzeMe(data) {',
    '  // Waiting for insights',
    '  return data;',
    '}',
  ].join('\n'));
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const outputRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    prism.highlightAll();
  }, [review]);

  const reviewCode = async () => {
    if (!code.trim() || isLoading) return;
    setIsLoading(true);
    setReview('');
    try {
      const { data } = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(data);
    } catch {
      setReview('## Error\nAI couldn\'t process this. Try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(review);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      console.error('Failed to copy');
    }
  };
  return (
    <div className="min-h-screen bg-black text-white flex flex-col w-full mt-5">
      <div className="flex-1 flex flex-col md:flex-row h-full mt-4 gap-4 px-2 md:px-4">
        {/* Editor */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col h-auto md:h-[85vh] bg-black rounded-lg overflow-hidden">
            <div className="text-lg font-semibold text-neutral-300 py-3 px-4 bg-black">
              Code Input
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6">
              <Editor
                value={code}
                onValueChange={setCode}
                highlight={(code) => prism.highlight(code, prism.languages.javascript, 'javascript')}
                padding={16}
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 15,
                  backgroundColor: 'transparent',
                  color: '#e0f7fa',
                  minHeight: '100%',
                  outline: 'none',
                }}
              />
            </div>
            <motion.button
              onClick={reviewCode}
              disabled={isLoading}
              className={`mx-4 my-4 py-3 rounded-md font-bold text-white flex items-center justify-center gap-3 ${
                isLoading
                  ? 'bg-neutral-800 cursor-not-allowed'
                  : 'bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? (
                <motion.div className="flex items-center gap-2">
                  <motion.div className="w-5 h-5 rounded-full bg-teal-300 animate-spin" />
                  Thinking...
                </motion.div>
              ) : (
                <>
                  <Sparkles className="w-6 h-6" />
                  <span>Review Code</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Review */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col h-auto md:h-[85vh] bg-black rounded-lg overflow-hidden">
            <div className="text-lg font-semibold text-neutral-300 py-3 px-4 bg-black flex justify-between items-center">
              <span>AI Insights</span>
              {review && (
                <motion.button
                  onClick={copyToClipboard}
                  className="p-2 rounded-md bg-neutral-800 hover:bg-neutral-700"
                  title={isCopied ? 'Copied!' : 'Copy Review'}
                >
                  {isCopied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-neutral-400" />}
                </motion.button>
              )}
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    className="h-full flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div className="flex items-center gap-3">
                      <motion.div
                        className="w-4 h-4 bg-blue-400 rounded-full shadow-lg"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-4 h-4 bg-violet-400 rounded-full shadow-lg"
                        animate={{ scale: [1, 1.5, 1], delay: 0.3 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-4 h-4 bg-indigo-400 rounded-full shadow-lg"
                        animate={{ scale: [1, 1.5, 1], delay: 0.6 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span className="text-white font-medium ml-3 animate-pulse">Processing magic...</span>
                    </motion.div>
                  </motion.div>
                ) : review ? (
                  <motion.div
                    key="review"
                    className="prose prose-invert max-w-none text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-neutral-500">
                    <Sparkles className="w-16 h-16 mb-4 text-blue-400 animate-pulse" />
                    <p className="text-center max-w-md px-4 text-sm">
                      Submit your code for AI-powered review and magical suggestions.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
 
}

export default Home;