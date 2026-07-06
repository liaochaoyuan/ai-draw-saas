import PricingCard from '@/components/PricingCard'

export default function PricingPage() {
  const plans = [
    { name: '免费版', price: 0, desc: '每日5次绘图，512px图' },
    { name: '月度会员', price: 29, desc: '无限生成，1024px高清，图库无限存储' },
    { name: '年度会员', price: 199, desc: '月度全部权益+专属风格模型' }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">会员套餐</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((item) => (
          <PricingCard key={item.name} data={item} />
        ))}
      </div>
    </div>
  )
}