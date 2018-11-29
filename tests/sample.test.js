import chai from 'chai';
import sampleMockData from '../mockdata/sampleMockData';

chai.should();
describe('testing sample unit test', () => {
  it('2+3 should be equal 5', (done) => {
    sampleMockData(2, 3).should.eql(5);
    done();
  });
});
