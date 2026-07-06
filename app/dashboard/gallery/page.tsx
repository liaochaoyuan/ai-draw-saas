import ImageCard from '@/components/ImageCard'

export default function GalleryPage() {
  // 示例作品数组，上线后替换成数据库读取
  const imageList = [
    { url: 'https://picsum.photos/id/10/800/800', prompt: '山间湖泊自然风光，写实摄影' },
    { url: 'https://picsum.photos/id/20/800/800', prompt: '赛博朋克都市夜景，霓虹灯光' },
    { url: 'https://picsum.photos/id/30/800/800', prompt: '二次元少女，樱花背景，清新画风' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white">
      <h2 className="text-3xl font-bold mb-10">我的作品图库</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {imageList.map((item, idx) => (
          <ImageCard key={idx} url={item.url} prompt={item.prompt} />
        ))}
      </div>
    </div>
  )
}