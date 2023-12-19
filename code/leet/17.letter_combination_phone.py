

class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        ans = []
        keyPads = {
          '2': ["a", "b", "c"],
          '3': ["d", "e", "f"],
          '4': ["g", "h", "i"],
          '5': ["j", "k", "l"],
          '6': ["m", "n", "o"],
          '7': ["p", "q", "r", "s"],
          '8': ["t", "u", "v"],
          '9': ["w", "x", "y", "z"],
        }
        if digits=="": return ans
        
        def BT(idx, letter):
            if len(letter) == len(digits):
                ans.append(letter)
                return
            digit = digits[idx]
            chars = keyPads[digit] # ["a","b","c"]
            for char in chars:
              BT(idx+1, letter+char)
        BT(0,"")
        return ans

solution = Solution()
result = solution.letterCombinations("23")
print(result)