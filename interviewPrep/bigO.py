import time

nemo = ['nemo']


def findNemo(array):
    t0 = time.time()
    i = 0
    while i < len(array):
        if array[i] == 'nemo':
            print('Found Nemo')
    t1 = time.time()
    print('Call to find nemo took ' + (t1 - t0) + ' milliseconds')


findNemo(nemo)
