class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.items = items if items else []
        self.pageSize = int(pageSize)
        self.totalPages = (len(self.items) + self.pageSize - 1) // self.pageSize
        self.currentPage = 1

    def getVisibleItems(self):
        start = (self.currentPage - 1) * self.pageSize
        end = start + self.pageSize
        return self.items[start:end]

    def nextPage(self):
        if self.currentPage < self.totalPages:
            self.currentPage += 1
        return self

    def prevPage(self):
        if self.currentPage > 1:
            self.currentPage -= 1
        return self

    def firstPage(self):
        self.currentPage = 1
        return self

    def lastPage(self):
        self.currentPage = self.totalPages
        return self

    def goToPage(self, pageNum):
        if pageNum < 1:
            self.currentPage = 1
        elif pageNum > self.totalPages:
            self.currentPage = self.totalPages
        else:
            self.currentPage = int(pageNum)
        return self


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

# Get the first page
print(p.getVisibleItems())  # Output: ['a', 'b', 'c', 'd']

# Go to the next page
p.nextPage()
print(p.getVisibleItems())  # Output: ['e', 'f', 'g', 'h']

# Go to the last page
p.lastPage()
print(p.getVisibleItems())  # Output: ['y', 'z']


