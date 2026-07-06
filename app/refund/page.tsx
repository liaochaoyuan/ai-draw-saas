import Navbar from '@/components/Navbar'

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">退款政策</h1>
        <div className="space-y-6 text-slate-300">
          <p>1. 退款时效：会员购买后24小时内，未使用任何绘图次数，可提交全额退款申请。</p>
          <p>2. 不予退款场景：已使用会员绘图额度、超过24小时申请、账号违规封禁，不支持退款。</p>
          <p>3. 退款渠道：仅支持原支付渠道原路退回（PayPal），处理周期3-7个工作日。</p>
          <p>4. 额度说明：免费版无任何付费充值，不存在退款服务。</p>
        </div>
      </div>
    </main>
  )
}