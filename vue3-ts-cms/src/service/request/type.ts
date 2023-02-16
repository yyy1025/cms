//对AxiosRequestConfig类型进行接口继承扩展
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios'
interface YYInterceptors {
  requestSuccessFn: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requestFailFn: (err: any) => any
  responseSuccessFn: (config: AxiosResponse) => AxiosResponse
  responseFailFn: (err: any) => any
}

export interface YYRequestConfig extends InternalAxiosRequestConfig {
  //增加可选属性interceptors
  interceptors?: YYInterceptors
}
//暴露新扩展的接口类型
// export default YYRequestConfig
// export default YYInterceptors
// export default {YYInterceptors,YYRequestConfig}//这两个仅仅是类型，不能当做值导出
