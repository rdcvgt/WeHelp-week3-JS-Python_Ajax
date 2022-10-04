import urllib.request as req

goodList = []  #要放在最外面才不會每次被清空
sosoList = []
badList = []

def getData():
    url = "https://www.ptt.cc/bbs/movie/index.html"
    def crawer(url):
        #建立 request 物件
        request = req.Request(url, headers={
            "user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Mobile Safari/537.36 Edg/105.0.1343.53"
        })

        with req.urlopen(request) as response:
            data = response.read().decode("utf-8")

        #---------解析網頁原始碼，取得內容
        import bs4
        root = bs4.BeautifulSoup(data, "html.parser")
        titles = root.find_all("div", class_="title")
        
        
        #--------分類文章標題
        for title in titles:
            if title.a != None:
                frontTitle = title.a.string[1:3];
                if (frontTitle == "好雷" or frontTitle == "普雷" or frontTitle == "負雷"):
                    # reviewList.append(title.a.string)
                    if frontTitle == "好雷":
                        goodList.append(title.a.string)
                    if frontTitle == "普雷":
                        sosoList.append(title.a.string)
                    if frontTitle == "負雷":
                        badList.append(title.a.string)
        
        
        #--------取得上一頁網址
        nextPage = root.find("a", string="‹ 上頁")
        return nextPage["href"]

    
    # print(goodList)
    count = 0
    while (count<10):
        url = "https://www.ptt.cc/" + crawer(url)
        count += 1
    
    #寫入資料至txt
    with open("movie.txt","w", encoding="utf-8") as file:
        for review in goodList:
            file.write(review+"\n")
        for review in sosoList:
            file.write(review+"\n")
        for review in badList:
            file.write(review+"\n")

getData()


