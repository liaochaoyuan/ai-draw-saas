interface Plan {
  name: string
  price: number
  desc: string
}
export default function PricingCard({ data }: { data: Plan }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 text-center">
      <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
      <div className="text-4xl font-bold text-blue-400 my-4">¥{data.price}</div>
      <p className="text-slate-400 mb-6">{data.desc}</p>
      <button className="w-full py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white">
        立即开通
      </button>
    </div>
  )
}