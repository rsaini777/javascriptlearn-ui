export default function SignInPage() {
  return (
    <div className="mx-auto max-w-md px-6 pt-28 pb-16">
      <div className="glass-card p-6">
        <h1 className="text-white text-2xl font-semibold">Sign in</h1>
        <div className="glass-divider my-4" />
        <form className="space-y-4">
          <div>
            <label className="block text-white/90 text-sm">Email</label>
            <input className="mt-1 w-full px-3 py-2 rounded-md bg-white/80 outline-none" style={{ color: '#00171f' }} type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-white/90 text-sm">Password</label>
            <input className="mt-1 w-full px-3 py-2 rounded-md bg-white/80 outline-none" style={{ color: '#00171f' }} type="password" placeholder="••••••••" />
          </div>
          <button className="glass-button px-4 py-2 font-semibold w-full" style={{ color: '#00171f', backgroundColor: '#ffffffcc' }} type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}
