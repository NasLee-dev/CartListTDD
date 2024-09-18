import { convertKW } from "./kw"

describe('kw 원화 바꾸기', () => {
  it('1000원을 1,000원으로 바꾼다', () => {
    expect(convertKW(1000)).toBe('1,000')
    expect(convertKW(10000)).toBe('10,000')
    expect(convertKW(100000)).toBe('100,000')
    expect(convertKW(1000000)).toBe('1,000,000')
  })
  it('음수를 입력하면 아무것도 반환하지 않는다', () => {
    expect(convertKW(-1000)).toBe('')
  })
})

