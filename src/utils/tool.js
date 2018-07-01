import moment from 'moment'

export const dateFormat = (time) => {
  return moment(time)
    .startOf('mimute')
    .fromNow()
}
