import urllib.request as request
import json
import csv

src = "https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
with request.urlopen(src) as response:
    data = json.load(response)
dataList = data['result']['results']

def dataClean():
    with open('data.csv', "w", encoding="utf-8") as file:
        title =('景點名稱'+","+'區域'+","+'經度'+","+'緯度'+","+'第一張圖檔網址')
        file.write(title+'\n');

        for i in range(len(dataList)):
            stitle =dataList[i]['stitle']
            address = dataList[i]["address"][5:8] #取行政區字串
            longitude = dataList[i]["longitude"][:8] #最多取至經度至小數點第四位
            latitude = dataList[i]["latitude"][:7] #最多取至經度至小數點第四位
            jpgUrl = ("https")+ dataList[i]['file'].split('https')[1] #以https切割字串，取第二個元素（為第一個圖片網址）
            xpostDate = int(dataList[i]['xpostDate'][:4])
    
            allInfo = (stitle+","+address+","+longitude+","+latitude+","+jpgUrl+"\n") 
            if (xpostDate>= 2015):
                file.write(allInfo)

dataClean()




