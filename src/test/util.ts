import axios from 'axios'

export function testFn(value: number, cb: (num: number) => void) {
  if (value > 1) {
    cb(value)
  }
}

export async function request() {
  const { data } = await axios.get('fake.url')
  return data
}