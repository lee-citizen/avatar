import http from '@/nxTemp/config/requestConfig'
import config from "@/nxTemp/config/index.config.js";

// 用户登录
export function classify(data) {
	return http.get(`${config.baseUrl}/classify`, data)
}

export function avatar(data) {
	return http.get(`${config.baseUrl}/avatar`, data)
}

