import Vue from 'vue'
import time from '@/utils/time'

const digitsRE = /(\d{3})(?=\d)/g

Vue.filter('currency', function(value, currency, decimals) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  currency = currency != null ? currency : '$'
  decimals = decimals != null ? decimals : 2
  var stringified = Math.abs(value).toFixed(decimals)
  var _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  var i = _int.length % 3
  var head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  var _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  var sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
})

Vue.filter('shortCurrency', (value, unit = '美元') => {
  if (!value) {
    return value
  }
  const stages = ['', '万', '亿']
  const stageStep = 10000
  let stageIndex = 0
  let number = value
  for(;;) {
    if(number > stageStep) {
      number = number / stageStep
      stageIndex++
    } else {
      break
    }
  }
  return `${number.toFixed(2)}${stages[stageIndex]}${unit}`
})

Vue.filter('relateTime', (value) => {
  return time(value).fromNow()
})