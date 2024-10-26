while True:
    try:
        n=int(input("Please enter a number: "))
        if n>0 :
            break
    except ValueError:
        print("Wrong input!")

odd = 1
num_record=[1]

for _ in range(n):
    odd+=2
    print(" ".join(map(str,num_record)))
    num_record.append(odd)



