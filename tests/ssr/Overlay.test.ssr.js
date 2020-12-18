import Component from '../../stories/overlay/Variables.svelte'

it('renders correctly', () => {
  const result = Component.render({ productName: 'example product' })
  expect(result).toMatchSnapshot()
})
