import sys 
import io 
sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')
import requests

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

def set_chrome_driver():
    chrome_options = webdriver.ChromeOptions()
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=chrome_options)
    return driver

driver = webdriver.Chrome('C:\JaeGyeong\codedriver\chromedriver')
driver.implicitly_wait(3)
driver.get('https://www.britishmuseum.org/exhibitions/world-stonehenge')
# url = "https://www.britishmuseum.org/exhibitions/world-stonehenge"
# response = requests.get(url)
html = driver.page_source
soup = BeautifulSoup(html, 'html.parser', from_encoding='cp949')
title = soup.select_one('#paragraph-21859-title')
data = soup.select_one("#page-top > div.page-content.\|.js-page-content > div > div > main > div:nth-child(2) > div.hero--boxed.hero--promo-banner.paragraph.paragraph--type--slice-generic-hero.paragraph--view-mode--default.hero.align_left.hero--background-pinned.js-hero > div.container > div > div.hero__content-container.hero__content-container--boxed.-has-link > p")
print(title)
print(data)
# print(title.get_text())

# if response.status_code == 200:
#     html = response.text
#     soup = BeautifulSoup(html, 'html.parser', from_encoding='cp949')
#     title = soup.select_one('#paragraph-21859-title')
    
#     # img = soup.find_all(class_='_img')
#     print(title.get_text())
# else : 
#     print(response.status_code)