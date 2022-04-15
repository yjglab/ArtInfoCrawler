import sys 
import io 
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

def set_chrome_driver():
    chrome_options = webdriver.ChromeOptions()
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    return driver

driver = webdriver.Chrome('C:\JaeGyeong\codedriver\chromedriver')
driver.implicitly_wait(3)
driver.get('https://www.britishmuseum.org/exhibitions-events')
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser', from_encoding='cp949')

britishMsm_exn_titles = driver.find_elements_by_css_selector(".teaser__title > span:nth-child(1)")


for title in britishMsm_exn_titles:
    print(title.text)
    print("//")
print("FILTER")
for title in britishMsm_exn_titles:
    print(title.text)
    print("//")
print("FILTER")
driver.close()