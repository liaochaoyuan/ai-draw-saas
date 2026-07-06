'use client'
interface Props {
  prompt: string
  setPrompt: (v: string) => void
  onSubmit: () => void
  loading: boolean
}

export default function DrawPanel({ prompt, setPrompt, onSubmit, loading }: Props) {
  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <label className="block mb-2 font-medium">绘画提示词</label>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full h-40 bg-slate-700 rounded-lg p-3 outline-none focus:ring-2 ring-blue-500 resize-none"
        placeholder="例：赛博朋克少女，雨夜城市，光影细腻，8k高清"
      />
      <button
        onClick={onSubmit}
        disabled={loading}
        className="w-full mt-4 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? '生成中...' : '一键生成图片'}
      </button>
    </div>
  )
}