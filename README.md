
Bugs:
 I had sguiggly bracket in wrong place so if statements placed outside the playGame function, fixed this.
 The score would only get to 2 before the DOM would alert the winner before updating the results-  make sure that the score is updated first, and then check for a winner after that.>> fix by setting delay time.