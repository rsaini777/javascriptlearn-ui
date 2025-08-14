import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto w-full">
      <div className="w-full ">
        <div className="glass-card p-6 md:p-10" style={{ borderRadius: 0, borderLeft: 'none', borderRight: 'none' }}>
          <div className="section grid grid-cols-1 md:grid-cols-6 gap-8">
			{/* Brand + socials */}
			<div className="md:col-span-2 text-center md:text-left">
				<div className="flex items-center justify-center md:justify-start gap-3">
					<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" aria-hidden>
						<defs>
							<linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
								<stop offset="0%" stopColor="#003459" />
								<stop offset="100%" stopColor="#00a8e8" />
							</linearGradient>
						</defs>
						<rect x="0" y="0" width="28" height="28" rx="6" fill="url(#brandGrad)" />
						<circle cx="9" cy="9" r="3" fill="#ffffff" opacity="0.9" />
						<circle cx="19" cy="19" r="5" fill="#ffffff" opacity="0.75" />
					</svg>
					<div className="text-xl font-bold" style={{ color: '#00171f' }}>JavascriptLearning</div>
				</div>
				<p className="mt-2 text-sm" style={{ color: '#6b7280' }}>
					Level up your front end interviews with curated questions, guides and hands-on UI challenges.
				</p>
				<div className="mt-4 flex items-center justify-center md:justify-start gap-2">
					<a aria-label="LinkedIn" target="_blank" rel="noreferrer" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border border-black/10 hover:bg-white transition-colors" style={{ color: '#00171f' }}>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.367-1.852 3.6 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.063 2.063 0 1 1 0-4.127 2.063 2.063 0 0 1 0 4.127zM6.993 20.452H3.677V9h3.316v11.452z"/>
						</svg>
					</a>
					<a aria-label="Discord" target="_blank" rel="noreferrer" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border border-black/10 hover:bg-white transition-colors" style={{ color: '#00171f' }}>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
							<path d="M20.317 4.369A19.791 19.791 0 0 0 16.558 3c-.2.356-.433.83-.593 1.205a18.27 18.27 0 0 0-4.93 0A7.72 7.72 0 0 0 10.44 3 19.736 19.736 0 0 0 6.68 4.369C3.943 8.265 3.2 12.04 3.47 15.764a19.97 19.97 0 0 0 6.075 3.108c.492-.68.93-1.4 1.31-2.153-.72-.27-1.408-.62-2.062-1.04.173-.127.343-.26.507-.395 3.968 1.86 8.27 1.86 12.207 0 .167.136.337.269.51.395-.654.42-1.342.77-2.062 1.04.38.753.818 1.473 1.31 2.153a19.97 19.97 0 0 0 6.075-3.108c.3-4.112-.517-7.86-3.102-11.395zM9.691 13.708c-1.183 0-2.146-1.09-2.146-2.43 0-1.338.955-2.429 2.146-2.429 1.199 0 2.154 1.1 2.146 2.43 0 1.34-.947 2.43-2.146 2.43zm6.627 0c-1.183 0-2.146-1.09-2.146-2.43 0-1.338.955-2.429 2.146-2.429 1.199 0 2.154 1.1 2.146 2.43 0 1.34-.947 2.43-2.146 2.43z"/>
						</svg>
					</a>
					<a aria-label="GitHub" target="_blank" rel="noreferrer" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border border-black/10 hover:bg-white transition-colors" style={{ color: '#00171f' }}>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
							<path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.112.82-.26.82-.58 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.787.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.932 0-1.31.469-2.381 1.236-3.222-.124-.303-.536-1.527.116-3.183 0 0 1.008-.322 3.301 1.23a11.44 11.44 0 0 1 3.005-.404c1.019.005 2.047.138 3.005.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.656.242 2.88.118 3.183.77.84 1.235 1.912 1.235 3.222 0 4.61-2.803 5.625-5.475 5.922.43.372.815 1.103.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.217.697.825.579C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
						</svg>
					</a>
					<a aria-label="X" target="_blank" rel="noreferrer" href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 border border-black/10 hover:bg-white transition-colors" style={{ color: '#00171f' }}>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
							<path d="M18.244 2H21l-6.52 7.45L22.5 22h-6.9l-4.51-5.83L5.8 22H3l6.98-7.97L1.5 2h7l4.06 5.39L18.244 2zm-2.42 18h1.85L8.19 4h-1.9l9.534 16z"/>
						</svg>
					</a>
				</div>
			</div>
            {/* Newsletter */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold" style={{ color: '#00171f' }}>Stay in the loop</h3>
              <p className="mt-2 text-sm" style={{ color: '#6b7280' }}>Interview tips, new questions and product updates. No spam.</p>
              <form className="mt-4 flex flex-col sm:flex-row gap-2">
                <input type="email" placeholder="Email address" className="flex-1 px-3 py-2 rounded-md bg-white/80" style={{ color: '#00171f' }} />
                <button className="glass-button px-4 py-2 font-semibold" style={{ color: '#00171f', backgroundColor: '#ffffffcc' }} type="submit">Subscribe</button>
              </form>
            </div>
            {/* Links */}
            <div>
              <h4 className="font-semibold" style={{ color: '#00171f' }}>Practice</h4>
              <ul className="mt-3 space-y-2 text-sm" style={{ color: '#6b7280' }}>
                <li><Link href="/practice">Get started</Link></li>
                <li><Link href="/challenges">UI coding</Link></li>
                <li><Link href="/interview-questions">Interview Questions</Link></li>
                <li><Link href="/backend">Backend</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold" style={{ color: '#00171f' }}>Resources</h4>
              <ul className="mt-3 space-y-2 text-sm" style={{ color: '#6b7280' }}>
                <li><Link href="/learn">Guides</Link></li>
                <li><Link href="/examples">Examples</Link></li>
                <li><Link href="/questions">Question bank</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright and Legal Links - Fixed positioning and styling */}
          <div className="section mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between text-xs" style={{ color: '#6b7280' }}>
              <div className="mb-2 sm:mb-0">© {new Date().getFullYear()} JavascriptLearning. All rights reserved.</div>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-[#00a8e8] transition-colors" style={{ color: '#6b7280' }}>Privacy Policy</a>
                <a href="#" className="hover:text-[#00a8e8] transition-colors" style={{ color: '#6b7280' }}>Terms of Service</a>
                <a href="#" className="hover:text-[#00a8e8] transition-colors" style={{ color: '#6b7280' }}>Cookie Policy</a>
                <span className="hidden sm:inline text-gray-400">·</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


