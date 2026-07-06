import Navbar from '@/components/Navbar'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">用户服务条款</h1>
        <div className="space-y-6 text-slate-300">
          <p>1. 服务说明：AIDraw提供AI文字生成绘画的线上会员订阅服务，分为免费额度、月度会员、年度会员。</p>
          <p>2. 用户规范：禁止使用本平台生成色情、暴力、侵权、违法违规内容，违规账号将直接限制绘图权限。</p>
          <p>3. 会员权益：付费会员享有对应套餐内的绘图次数、高清出图、作品云存储权限，会员时长从支付成功起计算。</p>
          <p>4. 服务限制：因第三方AI接口维护、网络波动导致暂时无法生成图片，平台不做时长补偿。</p>
        </div>
      </div>
    </main>
  )
}