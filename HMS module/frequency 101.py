[n, t] = [int(i) for i in input().split(" ")]
arr = [int(j) for j in input().split(" ")]
count = 0
for each in arr:
    if(each == t):
        count += 1
print(count)
