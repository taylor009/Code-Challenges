# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        if not head:
            return head
        temp = head
        a = []
        while temp:
            a.append(temp.val)
            temp = temp.next
        t = []
        for i in range(0, len(a), 2):
            t += a[i:i + 2][::-1]
        head = ListNode(t[0])
        temp = head
        for i in range(1, len(a)):
            temp.next = ListNode(t[i])
            temp = temp.next
        return head
