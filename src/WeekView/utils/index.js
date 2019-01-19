import moment from 'moment'
import { filter } from 'lodash'
import { days } from '../constants'

export function dateToYMD (dateString) {
  var date = new Date(dateString)
  var d = date.getDate()
  var m = date.getMonth() + 1 // Month from 0 to 11
  var y = date.getFullYear()
  return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d)
}

export function initialDateNow () {
  var date = new Date()
  var d = date.getDate()
  var m = date.getMonth() + 1 // Month from 0 to 11
  var y = date.getFullYear()
  return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d)
}

export function initialTimeNow () {
  var date = new Date()
  var h = date.getHours()
  var m = date.getMinutes()
  m = (m < 10) ? '0' + m : m
  return '' + h + ':' + m
}

export function dateAsObject (dateString) {
  var d = moment(dateString)
  return {
    day: d.format('DD'),
    month: d.format('MM'),
    year: d.format('YYYY')
  }
}

export const prettyTime = time => {
  let t = time.split(':')
  if (t.length < 2) return time
  let h = parseInt(t[0])
  let m = parseInt(t[1])
  h = (h < 10) ? '0' + h : h
  m = (m < 10) ? '0' + m : m
  let ampm = h > 11 ? 'pm' : 'am'
  return `${(h > 12) ? h - 12 : h}:${m}${ampm}`
}
export const dateDDMMYYY = date => moment(date).format('MM-DD-YYYY')
export const selectByDate = (items, d, dateProp = 'date') => filter(items, i => i[dateProp] === dateToYMD(d))
export const getPrevDay = (d, inc) => new Date(d.setDate(d.getDate() - inc))
export const getNextDay = (d, inc) => new Date(d.setDate(d.getDate() + inc))
export const getDayOfWeek = date => date && days[date.getDay()]
