# url https://leetcode.com/discuss/interview-question/981154/Amazon-or-OA-New-Grad-or-Fill-The-Truck
def fillTheTruck(num, boxes, unitSize, unitsPerBox, truckSize):
    stripped_unitsPerBox = unitsPerBox[0:truckSize]
    stripped_boxes = boxes[0:truckSize]
    unitsList = []

    for index, boxNumber in enumerate(stripped_unitsPerBox):
        for i in range(stripped_boxes[index]):
            unitsList.append(boxNumber)

    maxUnits = sum(sorted(unitsList, reverse=True)[0:truckSize])
    return maxUnits