import { test, describe, vi, expect } from 'vitest'
import type { Mocked } from 'vitest'
import { testFn, request } from './util'
import axios from 'axios'

vi.mock('axios')

const mockedAxios = axios as Mocked<typeof axios>
// callback test
// mock 
describe('functions', () => {
  test('create a mock function', () => {
    const callback = vi.fn() // 创建一个函数
    testFn(12, callback)
    expect(callback).toHaveBeenCalled()
    expect(callback).toHaveBeenCalledWith(12)
  })
  test('spy on method', () => {
    const obj = {
      getName: () => 1
    }
    const spy = vi.spyOn(obj, 'getName') // 调用对象上的方法
    obj.getName()
    expect(spy).toHaveBeenCalled() // 已被调用
    obj.getName()
    expect(spy).toHaveBeenCalledTimes(2)  // 已被调用次数
  })
  test('mock third party module', async () => {
    // mockedAxios.get.mockImplementation(() => Promise.resolve({ data: 123 }))
    mockedAxios.get.mockResolvedValue({ data: 'Smile' }) // mock promise resolve value
    const result = await request()
    expect(result).toBe('Smile')
  })
})

