import React from 'react'
import { Select } from 'antd'
const Option = Select.Option

export default {
    formateDate(time) {
        if (!time) return '';
        let date = new Date(time)
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    },
    pagination(data, callback) {
        return {
            onChange: (current) => {
                callback(current)
            },
            current: data.result.page,
            pageSize: data.result.pageSize,
            total: data.result.total,
            showTotal: () => {
                return `共${data.result.total}条`
            },
            showQuickJumper: true //是否支持快速跳转到某页
        }
    },
    // 隐藏手机号中间4位
    formatPhone(phone) {
        phone += '';
        return phone.replace(/(\d{3})\d*(\d{4})/g, '$1***$2')
    }

}