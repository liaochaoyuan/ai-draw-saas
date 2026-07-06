import Image from 'next/image'

interface Props {
  url: string
  prompt: string
}
export default function ImageCard({ url, prompt }: Props) {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden">
      <div className="relative w-full h-64">
        <Image src={url} alt={prompt} fill className="object-cover" />
      </div>
      <p className="p-3 text-sm text-slate-300 line-clamp-2">{prompt}</p>
    </div>
  )
}