// eslint-disable-next-line import/named
import { MergedStoreType, BlankStore } from 'typed-vuex/lib/types/store'

export const mockRoot: Partial<MergedStoreType<
  typeof import('~/store') & BlankStore,
  string
>> = {
  user: {
    name: 'jefrydco',
    age: 22
  },
  GET_USER: jest.fn(),
  RESET_USER: jest.fn()
}
