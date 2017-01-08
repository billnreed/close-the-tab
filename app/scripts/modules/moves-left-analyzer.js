/*
 *  This algorithm works by recursively going through all possible tile
 *  combinations until it finds one that exists.
 *
 *  Here's an example of how it works. Say we've rolled a 2 and a 3 on our dice,
 *  and we've got tiles 1, 2, 4, and 8 available.
 *
 *  The algorithm starts by eliminating all tiles that are greater than our
 *  total dice value (5). So we get rid of 8, leaving 1, 2, and 4.
 *
 *  Our recursive method takes 2 arguments: the total to check against, the
 *  possible values. So it's signature looks like
 * `testForAvailableMoves(total, values, depth)`.
 *
 *  After that, we call our recursive method for the first time. Our arguments
 *  are the total of the two dice (5), and our possible values (1, 2, 4).
 *
 *  Next, we check our base case. Is the total 0? In this case, no it's 5, so we
 *  continue on.
 *
 *  And here's the recursive part: we're going to go through each available
 *  tile, subtract it's value from the total we're looking for, remove it from
 *  the list of possible tiles to use. In this example that would result in
 *  three more calls to the our recursive method:
 *    `testForAvailableMoves(4, [2, 4])`
 *    `testForAvailableMoves(3, [1, 4])`
 *    `testForAvailableMoves(1, [1, 2])`
 *
 *  And we continue on this chain of method calls. Let's finish the example.
 *
 *  For the first call `testForAvailableMoves(4, [2, 4])`, our total isn't
 *  0 (its 4), so we recurse with two calls:
 *    `testForAvailableMoves(2, [4])`
 *    `testForAvailableMoves(0, [2])`
 *
 *  For the second call `testForAvailableMoves(3, [1, 4])` we'll see an
 *  optimization. We don't hit our base cases, so we continue to recurse:
 *    `testForAvailableMoves(2, [4])`
 *    `testForAvailableMoves(-1, [1])`
 *  We actually don't make the second recursive call here, as we know its
 *  impossible to have a negative total and don't want to waste time.
 *
 *  The third call `testForAvailableMoves(1, [1, 2])` results in one more
 *  recursive call instead of two because of our optimization:
 *    `testForAvailableMoves(0, [2])`
 *
 *  We'll hit our first base case on the `testForAvailableMoves(0, [2], 2)`
 *  call. Our total is 0, so we return true, which propagates up the chain
 *  since we're combining all these boolean results with an OR operator,
 *  and we finally decide that there are available moves.
 */

export default function areThereMovesLeft(total, availableTiles) {
  const possibleValues = availableTiles.map(tile => tile.getValue()).filter(value => value <= total);
  return testForAvailableMoves(total, possibleValues);
}

function testForAvailableMoves(total, values) {
    if (total == 0) {
      return true;
    } else {
        return values.reduce((availableMoves, value, i) => {
          const nextTotal = total - value;
          const nextValues = [].concat(values.slice(0, i), values.slice(i + 1, values.length));

          if (nextTotal < 0) {
            return availableMoves;
          } else {
            return availableMoves || testForAvailableMoves(nextTotal, nextValues);
          }
        }, false)
    }
}
