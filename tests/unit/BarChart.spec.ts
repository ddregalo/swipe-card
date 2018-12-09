import { shallowMount, mount } from '@vue/test-utils';
import BarChart from '@/components/BarChart.vue';

describe('BarChart.vue', () => {
  it('renders props.selections for chart data', () => {
    const selections = [
        {
            name: 'Selected',
            count: 5,
        },
        {
            name: 'Rejected',
            count: 2,
        },
        {
            name: 'Skipped',
            count: 1,
        },
    ];
    const wrapper = shallowMount(BarChart, {
      propsData: { selections },
    });
    expect(wrapper.props().selections).toBe(selections);
  });

  it('chartData data is equal to props.selections', () => {
    const selections = [
        {
            name: 'Selected',
            count: 5,
        },
        {
            name: 'Rejected',
            count: 2,
        },
        {
            name: 'Skipped',
            count: 1,
        },
    ];
    const wrapper = mount(BarChart, {
      propsData: { selections },
    });
    expect(wrapper.vm.$data.chartData).toBe(selections);
  });
});
