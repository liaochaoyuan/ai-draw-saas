'use client'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">账号登录</h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="输入邮箱"
            className="w-full p-3 bg-slate-700 rounded-lg outline-none"
          />
          <input
            type="password"
            placeholder="输入密码"
            className="w-full p-3 bg-slate-700 rounded-lg outline-none"
          />
          <button className="w-full py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700">
            登录
          </button>
        </div>
        <p className="mt-6 text-center text-slate-400">
          没有账号？
          <Link href="/(auth)/register" className="text-blue-400 ml-1">去注册</Link>
        </p>
      </div>
    </div>
  )
}