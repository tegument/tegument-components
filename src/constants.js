
export const MONDAY = 'Monday'
export const TUESDAY = 'Tuesday'
export const WEDNESDAY = 'Wednesday'
export const THURSDAY = 'Thursday'
export const FRIDAY = 'Friday'
export const SATURDAY = 'Saturday'
export const SUNDAY = 'Sunday'

export const days = [
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
]

export const colors = {
  allLevels: '#00c0fc',
  liveTraining: '#521095',
  gb1: '#00c0fc',
  gb2: '#521095',
  barraFit: '#ec270d',
  lc1: '#fffe6e',
  lc2: '#ffd570',
  juniors: '#009000',
  advancedKids: '#009000',
  header: '#b01608',
  kidsCompetetion: '#7f7f7f'
}

export const events = [
  {
    name: 'All Levels Class',
    days: [MONDAY, WEDNESDAY],
    start: '6:30',
    end: '7:30',
    length: 60,
    background: colors.allLevels
  },
  {
    name: 'All Levels Class',
    days: [TUESDAY, THURSDAY],
    start: '12:00',
    end: '13:00',
    length: 60,
    background: colors.allLevels
  },
  {
    name: 'All Levels Class',
    days: [SATURDAY],
    start: '10:00',
    end: '11:00',
    length: 60,
    background: colors.allLevels
  },
  {
    name: 'GB2 - NoGi',
    days: [FRIDAY],
    start: '6:30',
    end: '7:30',
    length: 60,
    background: colors.gb2
  },
  {
    name: 'Live Training',
    days: [MONDAY, WEDNESDAY, FRIDAY],
    start: '7:30',
    end: '8:00',
    length: 30,
    background: colors.liveTraining
  },
  {
    name: 'Live Training',
    days: [TUESDAY, THURSDAY],
    start: '13:00',
    end: '13:30',
    length: 30,
    background: colors.liveTraining
  },
  {
    name: 'Live Training',
    days: [SATURDAY],
    start: '11:00',
    end: '11:30',
    length: 30,
    background: colors.liveTraining
  },
  {
    name: 'Barra Fit',
    days: [MONDAY, WEDNESDAY, FRIDAY],
    start: '9:00',
    end: '10:00',
    length: 60,
    background: colors.barraFit
  },
  {
    name: 'Barra Fit',
    days: [TUESDAY, THURSDAY],
    start: '11:00',
    end: '12:00',
    length: 60,
    background: colors.barraFit
  },
  {
    name: 'Barra Fit',
    days: [TUESDAY, THURSDAY],
    start: '6:30',
    end: '7:30',
    length: 60,
    background: colors.barraFit
  },
  {
    name: 'Barra Fit',
    days: [SATURDAY],
    start: '8:00',
    end: '9:00',
    length: 60,
    background: colors.barraFit
  },
  {
    name: 'GB2 Competetion Class',
    days: [TUESDAY],
    start: '9:00',
    end: '10:30',
    length: 90,
    background: colors.gb2
  },
  {
    name: 'LC1',
    days: [MONDAY, TUESDAY, WEDNESDAY, THURSDAY],
    start: '16:00',
    end: '17:00',
    length: 60,
    background: colors.lc1,
    color: '#000'
  },
  {
    name: 'Parents and Kids',
    days: [SATURDAY],
    start: '9:00',
    end: '10:00',
    length: 60,
    background: colors.lc1,
    color: '#000'
  },
  {
    name: 'LC2',
    days: [MONDAY, TUESDAY, WEDNESDAY, THURSDAY],
    start: '17:00',
    end: '18:00',
    length: 60,
    background: colors.lc2,
    color: '#000'
  },
  {
    name: 'Juniors',
    days: [MONDAY, TUESDAY, WEDNESDAY, THURSDAY],
    start: '18:00',
    end: '19:00',
    length: 60,
    background: colors.juniors
  },
  {
    name: 'Advanced Kids',
    days: [MONDAY, WEDNESDAY],
    start: '18:00',
    end: '19:00',
    length: 60,
    background: colors.juniors
  },
  {
    name: 'KIDS Competetion Class',
    days: [FRIDAY],
    start: '17:00',
    end: '18:00',
    length: 60,
    background: colors.kidsCompetetion
  },
  {
    name: 'GB1',
    days: [MONDAY, TUESDAY, WEDNESDAY, THURSDAY],
    start: '19:00',
    end: '20:00',
    length: 60,
    background: colors.allLevels
  },
  {
    name: 'GB2',
    days: [TUESDAY, THURSDAY],
    start: '19:00',
    end: '20:00',
    length: 60,
    background: colors.gb2
  },
  {
    name: 'Live Training',
    days: [MONDAY, TUESDAY, WEDNESDAY, THURSDAY],
    start: '20:00',
    end: '20:30',
    length: 30,
    background: colors.liveTraining
  },
]
