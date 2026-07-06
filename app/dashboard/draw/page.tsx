'use client'
import { useState } from 'react'
import DrawPanel from '@/components/DrawPanel'

export default function DrawPage() {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [imgUrl, setImgUrl] = useState('')

  const handleGenerate = async () => {
    if (!prompt) return alert('请输入绘画提示词')
    setLoading(true)
    try {
      const res = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      })
      const data = await res.json()
      setImgUrl(data.imageUrl)
    } catch (err) {
      alert('生成失败，请稍后重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white">
      <h2 className="text-3xl font-bold mb-8">AI 文生图</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <DrawPanel
          prompt={prompt}
          setPrompt={setPrompt}
          onSubmit={handleGenerate}
          loading={loading}
        />
        <div className="bg-slate-800 rounded-xl p-4 min-h-[400px] flex items-center justify-center">
          {imgUrl ? (
            <img src={imgUrl} alt="生成画作" className="max-w-full rounded-lg" />
          ) : (
            <p className="text-slate-400">生成的图片会展示在这里</p>
          )}
        </div>
      </div>
    </div>
  )
}