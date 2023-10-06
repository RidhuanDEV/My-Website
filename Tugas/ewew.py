def BILANGAN(A):
    for i in range(len(A)):
        if i != len(A):
            if A[i] == A[i+1]:
                return True
    return False
print(BILANGAN([2,1,2]))