import request from '@/utils/request'

// 获取图像验证码
export const getPicCode = () => {
  return request.get('/captcha/image')
}
