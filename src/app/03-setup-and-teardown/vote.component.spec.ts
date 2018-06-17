import { VoteComponent } from './vote.component';

// beforeEach => Set up
// afterEach => Tear down
describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(() => {
    // Arrange
    component = new VoteComponent();
  });
  it('Should increment totalVotes when upvoted', () => {
    // Act
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('Should decrement totalVotes when downvoted', () => {
    // Act
    component.downVote();
    // Assert
    expect(component.totalVotes).toBe(-1);
  });
});
