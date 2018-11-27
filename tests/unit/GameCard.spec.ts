import { shallowMount } from '@vue/test-utils';
import GameCard from '@/components/GameCard.vue';

describe('GameCard.vue', () => {
  it('renders props.card for card title', () => {
    const card = 'test';
    const isCurrent = true;
    const wrapper = shallowMount(GameCard, {
      propsData: { card, isCurrent },
    });
    expect(wrapper.text()).toMatch(card);
  });

  it('renders props.isCurrent value for card', () => {
    const card = 'test';
    const isCurrent = true;
    const wrapper = shallowMount(GameCard, {
      propsData: { card, isCurrent },
    });
    expect(wrapper.props().isCurrent).toBe(true);
  });
});
