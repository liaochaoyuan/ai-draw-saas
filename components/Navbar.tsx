'use client'
import Link from 'next/link'
import { User } from 'lucide-react'

export default function Navbar() {
  return (
    <>
      <nav className="bg-slate-900 border-b border-slate-800 px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-400">AIDraw</Link>
          <div className="flex gap-6 items-center">
            <Link href="/dashboard/draw" className="hover:text-blue-400">绘图</Link>
            <Link href="/dashboard/gallery" className="hover:text-blue-400">图库</Link>
            <Link href="/dashboard/pricing" className="hover:text-blue-400">会员</Link>
            <Link href="/(auth)/login" className="flex items-center gap-1 px-3 py-2 bg-slate-800 rounded-lg hover:bg-slate-700">
              <User size={16} /> 登录
            </Link>
          </div>
        </div>
      </nav>
      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
        <Link href="/privacy" className="mx-2 hover:text-blue-400">隐私政策</Link>
        <Link href="/terms" className="mx-2 hover:text-blue-400">用户条款</Link>
        <Link href="/refund" className="mx-2 hover:text-blue-400">退款政策</Link>
      </div>
    </>
  )
}