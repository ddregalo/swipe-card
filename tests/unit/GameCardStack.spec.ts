import { shallowMount, mount } from '@vue/test-utils';
import GameCardStack from '@/components/GameCardStack.vue';

describe('GameCardStack.vue', () => {
  it('renders cards prop', () => {
    const cards = ['test1', 'test2', 'test3'];
    const wrapper = shallowMount(GameCardStack, {
      propsData: { cards },
    });
    expect(wrapper.props().cards[0]).toBe('test1');
  });
});