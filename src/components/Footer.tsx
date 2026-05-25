import { useState, FormEvent } from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    try {
      const response = await fetch('/api/mailing-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Network error. Please try again.');
      setStatus('error');
    }
  };

  const socialLinks = (
    <div className="flex space-x-6">
      <a href="https://www.instagram.com/lukequeenband" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-slate-500 transition-colors"><Instagram /></a>
      <a href="https://www.facebook.com/lukequeenband/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-slate-500 transition-colors"><Facebook /></a>
      <a href="https://www.youtube.com/@lukequeenband" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-slate-500 transition-colors"><Youtube /></a>
      <a href="http://www.linkedin.com/in/luke-queen-band" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-slate-500 transition-colors"><Linkedin /></a>
    </div>
  );

  const contactContent = (
    <div>
      <h4 className="text-xl mb-6 uppercase tracking-wider text-white md:text-primary">Contact</h4>
      <p className="text-white text-lg mb-1 font-medium">Luke Queen</p>
      <a href="tel:3145995918" className="text-white text-lg hover:text-[#34B49C] block mb-2 transition-colors">
        314-599-5918
      </a>
      <a href="mailto:info@LukeQueenBand.com" className="text-white text-lg block underline decoration-1 underline-offset-4 hover:text-[#34B49C] transition-colors">
        info@LukeQueenBand.com
      </a>
    </div>
  );

  const mailingListSection = (
    <div className="max-w-sm w-full">
      <h4 className="text-xl mb-6 uppercase tracking-wider text-white">
        Mailing List
      </h4>
      {status === 'success' ? (
        <div className="bg-white/5 border border-[#34B49C]/30 rounded-lg p-6 text-center text-white space-y-4">
          <p className="font-semibold text-[#34B49C] text-lg">Thank You!</p>
          <p className="text-slate-300 text-sm leading-relaxed">
            Thanks for joining the Luke Queen Band email list! We’ll keep you updated on upcoming shows, public events, and new content.
          </p>
          <button 
            type="button" 
            onClick={() => setStatus('idle')}
            className="text-primary hover:text-white text-xs font-semibold underline underline-offset-4 transition-all animate-pulse-subtle"
          >
            Sign up another email
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubscribe} className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={status === 'submitting'}
              className="w-full bg-white/5 border border-white/25 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#34B49C] focus:outline-none transition-all disabled:opacity-50"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Your Email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'submitting'}
              className="w-full bg-white/5 border border-white/25 rounded-lg px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#34B49C] focus:outline-none transition-all disabled:opacity-50"
            />
          </div>
          {status === 'error' && (
            <p className="text-red-400 text-xs font-medium">{errorMessage}</p>
          )}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-primary hover:bg-primary/90 text-white w-[141px] py-3 rounded-lg font-bold text-sm hover:text-white text-center block hover:scale-105 transition-transform disabled:opacity-50"
          >
            {status === 'submitting' ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      )}
    </div>
  );

  return (
    <footer id="contact" className="bg-slate-950 text-white pt-10 md:pt-[76.8px] lg:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-24">
          {/* Column 1 on Mobile/Tablet, Col 1 & 2 on Desktop */}
          <div className="col-span-1 lg:col-span-2">
            <h2 
              className="text-4xl mb-8 font-lovelo font-black tracking-tighter text-[#34B49C]"
              style={{
                WebkitTextStroke: '1.5px #34B49C',
                color: 'transparent'
              }}
            >
              LUKE QUEEN BAND
            </h2>
            <p className="text-white text-lg max-w-sm mb-10 leading-relaxed">
              Elevating events across the Midwest with memorable live performances and timeless songs.
            </p>

            {/* Mobile Only: Social under descriptive text, then Contact, then Mailing List */}
            <div className="md:hidden space-y-12">
              <div>
                {socialLinks}
              </div>
              {contactContent}
              {mailingListSection}
            </div>

            {/* Tablet Only: Contact Section + Social Media Links under bio (positioned on the left) */}
            <div className="hidden md:block lg:hidden mt-8 space-y-6">
              {contactContent}
              <div>
                {socialLinks}
              </div>
            </div>

            {/* Desktop Only: Mailing List under descriptive text */}
            <div className="hidden lg:block mt-8">
              {mailingListSection}
            </div>
          </div>

          {/* Tablet Only Column 2: Mailing list on the right side of tablet */}
          <div className="hidden md:block lg:hidden">
            {mailingListSection}
          </div>

          {/* Desktop Only Column 3: Contact Section + Social Media Links */}
          <div className="hidden lg:block">
            {contactContent}
            <div className="mt-6">
              {socialLinks}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-sm font-medium">
            © {new Date().getFullYear()} Luke Queen Band. All rights reserved.
          </p>
          <div className="flex space-x-8 text-slate-600 text-sm font-medium uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
