import Component from '../../stories/localized/Variables.svelte'

it('renders correctly', () => {
  const result = Component.render({ unreadEmails: 42 })
  expect(result).toMatchSnapshot()
})
