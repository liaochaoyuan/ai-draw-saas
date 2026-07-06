import Navbar from '@/components/Navbar'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">隐私政策</h1>
        <div className="space-y-6 text-slate-300">
          <p>1. 信息收集：本平台仅收集用户注册邮箱，用于账号登录与会员服务通知，不会私自收集手机、身份证等无关信息。</p>
          <p>2. 图片数据：用户通过AI生成的绘画作品所有权归用户，平台仅临时缓存用于页面展示，不会私自商用、转发用户绘图内容。</p>
          <p>3. 信息保护：我们采用加密存储用户账号信息，不会向第三方出售、共享你的个人数据。</p>
          <p>4. Cookie：网站仅使用基础Cookie维持登录状态，无追踪类广告采集。</p>
        </div>
      </div>
    </main>
  )
}