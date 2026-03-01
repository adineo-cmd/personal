# Python Data Structures & Functions

Quick reference for common Python data structures, collections, and built-in functions used in competitive programming and development.

## Lists & Comprehensions

```python
# Slicing [start:stop:step]
arr = [0, 1, 2, 3, 4, 5]
arr[::-1]      # Reverse list
arr[2:5]       # [2, 3, 4]

# Comprehension
squares = [x**2 for x in range(10) if x % 2 == 0]

# Unpacking
a, *b, c = [1, 2, 3, 4, 5]  # a=1, b=[2,3,4], c=5
```

## Dictionaries

```python
d = {'a': 1, 'b': 2}

# Methods
d.get('c', 0)       # Return 0 if key missing
d.setdefault('c', 3)# Set if missing, return value
{**d1, **d2}        # Merge dicts (Python 3.5+)

# Iteration
for k, v in d.items():
    pass
```

## Collections Module

```python
from collections import Counter, deque, defaultdict

# Counter
c = Counter(['a', 'b', 'a'])  # {'a': 2, 'b': 1}
c.most_common(1)              # [('a', 2)]

# Deque (O(1) append/pop both ends)
q = deque([1, 2, 3])
q.appendleft(0)
q.pop()

# DefaultDict
dd = defaultdict(list)
dd['key'].append(1)  # No KeyError
```

## Heapq (Min-Heap)

```python
import heapq

arr = [3, 1, 4, 1, 5]
heapq.heapify(arr)        # Transform list to heap
heapq.heappush(arr, 0)    # Push element
min_val = heapq.heappop(arr) # Pop smallest

# Max-Heap workaround (negate values)
heapq.heappush(arr, -10)
```

## Sets & Tuples

```python
# Sets (Unique elements, O(1) lookup)
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1 & s2   # Intersection {3}
s1 | s2   # Union {1, 2, 3, 4, 5}
s1 - s2   # Difference {1, 2}

# Tuples (Immutable)
t = (1, 2, 3)
t[0]      # 1
```

## String Operations

```python
s = "  Hello World  "
s.strip()           # "Hello World"
s.lower()           # "  hello world  "
s.split(" ")        # ['Hello', 'World']
"".join(['a', 'b']) # "ab"

# Formatting
name = "Alice"
f"Hello {name}"     # f-string (Python 3.6+)
```

## Built-in Functions

```python
# Map & Filter
nums = [1, 2, 3]
list(map(lambda x: x*2, nums))    # [2, 4, 6]
list(filter(lambda x: x>1, nums)) # [2, 3]

# Zip
list(zip([1, 2], ['a', 'b']))     # [(1, 'a'), (2, 'b')]

# Enumerate
for i, val in enumerate(['a', 'b']): 
    pass  # i=0, val='a'

# Bisect (Binary Search)
import bisect
idx = bisect.bisect_left([1, 3, 5], 4)  # Returns 2
```
