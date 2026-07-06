import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(req: Request) {
  const { prompt } = await req.json()
  const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY

  try {
    const res = await axios.post(
      'https://api.deepseek.com/v1/images/generations',
      {
        model: 'deepseek-image',
        prompt,
        size: '1024x1024'
      },
      { headers: { Authorization: `Bearer ${DEEPSEEK_API_KEY}` } }
    )
    return NextResponse.json({ imageUrl: res.data.data[0].url })
  } catch (err) {
    return NextResponse.json({ error: '余额不足或API调用失败' }, { status: 400 })
  }
}