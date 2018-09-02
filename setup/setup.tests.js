// Enzyme configuration
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({
  adapter: new Adapter(),
})

Date.now = () => new Date('2018-07-01')
