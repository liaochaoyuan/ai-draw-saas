'use client'
import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-800 p-8 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">注册账号</h2>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="邮箱地址"
            className="w-full p-3 bg-slate-700 rounded-lg outline-none"
          />
          <input
            type="password"
            placeholder="设置密码"
            className="w-full p-3 bg-slate-700 rounded-lg outline-none"
          />
          <input
            type="password"
            placeholder="确认密码"
            className="w-full p-3 bg-slate-700 rounded-lg outline-none"
          />
          <button className="w-full py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700">
            立即注册
          </button>
        </div>
        <p className="mt-6 text-center text-slate-400">
          已有账号？
          <Link href="/(auth)/login" className="text-blue-400 ml-1">登录</Link>
        </p>
      </div>
    </div>
  )
}