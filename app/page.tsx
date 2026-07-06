import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">AI 在线绘图 SaaS 平台</h1>
        <p className="text-xl text-slate-300 mb-10">输入文字，一键生成高清创意绘画，会员解锁无限出图</p>
        <div className="flex justify-center gap-4">
          <Link href="/(auth)/register" className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700">
            立即注册
          </Link>
          <Link href="/dashboard/draw" className="px-6 py-3 border border-slate-600 rounded-lg hover:bg-slate-800">
            体验绘图
          </Link>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">文生图生成</h3>
            <p className="text-slate-400">支持写实、二次元、3D、插画多种风格</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">个人作品图库</h3>
            <p className="text-slate-400">保存所有生成图片，随时查看下载</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">会员套餐</h3>
            <p className="text-slate-400">付费解锁无限次生成、高清大图</p>
          </div>
        </div>
      </div>
    </main>
  )
}