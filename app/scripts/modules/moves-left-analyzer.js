/*
 *  This algorithm works by recursively going through all possible tile
 *  combinations until it finds one that exists. It also limits the number of
 *  tiles in a possible combination to 4. It is not possible to form a valid
 *  solution with 5 or more tiles. (1 + 2 + 3 + 4 = 10, 1 + 2 + 3 + 4 + 5 = 15).
 *
 *  Here's an example of how it works. Say we've rolled a 2 and a 3 on our dice,
 *  and we've got tiles 1, 2, 4, and 8 available.
 *
 *  The algorithm starts by eliminating all tiles that are greater than our
 *  total dice value (5). So we get rid of 8, leaving 1, 2, and 4.
 *
 *  Our recursive method takes 3 arguments: the total to check against, the
 *  possible values, and our current depth (the number of tiles being used in
 *  the current combination we're checking). So it's signature looks like
 *  `testForAvailableMoves(total, values, depth)`.
 *
 *  After that, we call our recursive method for the first time. Our arguments
 *  are the total of the two dice (5), our possible values (1, 2, 4), and our
 *  depth (0 since we're using the first tile).
 *
 *  Next, we check our base case. Is the total 0? In this case, no it's 5, so we
 *  continue on. The next base case is if we've hit our maximum tile limit, 4.
 *  So we check if our depth is equal to 4. It's 0, so continue on.
 *
 *  And here's the recursive part: we're going to go through each available
 *  tile, subtract it's value from the total we're looking for, remove it from
 *  the list of possible tiles to use, and increment our depth. In this example
 *  that would result in three more calls to the our recursive method:
 *    `testForAvailableMoves(4, [2, 4], 1)`
 *    `testForAvailableMoves(3, [1, 4], 1)`
 *    `testForAvailableMoves(1, [1, 2], 1)`
 *
 *  And we continue on this chain of method calls. Let's finish the example.
 *
 *  For the first call `testForAvailableMoves(4, [2, 4], 1)`, our total isn't
 *  0 (its 4), our depth is less than 4 (its 1), so we recurse with two calls:
 *    `testForAvailableMoves(2, [4], 2)`
 *    `testForAvailableMoves(0, [2], 2)`
 *
 *  For the second call `testForAvailableMoves(3, [1, 4], 1)` we'll see an
 *  optimization. We don't hit either of our base cases, so we continue to
 *  recurse:
 *    `testForAvailableMoves(2, [4], 2)`
 *    `testForAvailableMoves(-1, [1], 2)`
 *  We actually don't make the second recursive call here, as we know its
 *  impossible and don't want to waste time.
 *
 *  The third call `testForAvailableMoves(1, [1, 2], 1)` results in one more
 *  recursive call instead of two because of our optimization:
 *    `testForAvailableMoves(0, [2], 2)`
 *
 *  We'll hit our first base case on the `testForAvailableMoves(0, [2], 2)`
 *  call. Our total is 0, so we return true, which propagates up the chain
 *  since we're combining all these boolean results with an OR operator,
 *  and we finally decide that there are available moves.
 */

export default function areThereMovesLeft(total, availableTiles) {
  const possibleValues = availableTiles.map(tile => tile.getValue()).filter(value => value <= total);
  return testForAvailableMoves(total, possibleValues, 0);
}

function testForAvailableMoves(total, values, depth) {
    if (total == 0) {
      return true;
    } else if (depth == 4) {
      return false;
    } else {
        return values.reduce((availableMoves, value, i) => {
          const nextTotal = total - value;
          const nextValues = [].concat(values.slice(0, i), values.slice(i + 1, values.length));
          const nextDepth = depth + 1;

          if (nextTotal < 0) {
            return availableMoves;
          } else {
            return availableMoves || testForAvailableMoves(nextTotal, nextValues, nextDepth);
          }
        }, false)
    }
}
