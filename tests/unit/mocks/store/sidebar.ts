// eslint-disable-next-line import/named
import { MergedStoreType, BlankStore } from 'typed-vuex/lib/types/store'

export const mockSidebar: Partial<MergedStoreType<
  typeof import('~/store/sidebar') & BlankStore,
  string
>> = {
  isDisplay: true,
  show: jest.fn(),
  hide: jest.fn()
}
