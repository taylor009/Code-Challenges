import time

nemo = ['nemo'] * 10000000
fish = ['dory', 'bruce', 'marlin', 'nemo']


def findNemo(array):
    t = time.process_time()
    for i in array:
        if i is 'nemo':
            print('Found Nemo!')
    elapsed_time = time.process_time() - t
    print('Call to find Nemo took ' + str(elapsed_time))


findNemo(nemo)
