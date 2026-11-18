# Sample Code

Short Python snippets for trying out the code cell. They use only the standard library, so they work offline. Paste one into the cell and click **Run**.

## 1. Squares

```python
for i in range(1, 6):
    print(f"{i} squared is {i * i}")
```

Expected output:

```
1 squared is 1
2 squared is 4
3 squared is 9
4 squared is 16
5 squared is 25
```

## 2. Grade average

A function, a list, and conditionals, similar to what an intro course assignment looks like.

```python
def average(scores):
    return sum(scores) / len(scores)

grades = [88, 92, 79, 95]
avg = average(grades)
print("Average:", avg)

if avg >= 90:
    print("Grade: A")
elif avg >= 80:
    print("Grade: B")
else:
    print("Grade: C")
```

Expected output:

```
Average: 88.5
Grade: B
```

## 3. A typo on purpose

Shows how errors appear. The message should show in red, and the app should keep working.

```python
total = 10
print(totl)
```

Expected output ends with:

```
NameError: name 'totl' is not defined
```

## Things that don't work yet

- `while True:` and other loops that never finish will freeze the window (see `docs/known-issues.md`).
- `input()` is not supported.
- Packages outside the standard library, such as `numpy`, are not available.