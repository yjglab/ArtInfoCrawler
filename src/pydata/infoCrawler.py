import requests
import sys 
import io 

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

def print_msm_data(url, titles_selector, dates_selector):
    driver = webdriver.Chrome('C:\JaeGyeong\codedriver\chromedriver')
    driver.implicitly_wait(3)
    driver.get(url)
    driver.set_window_position(0, 0)
    driver.set_window_size(3000, 1000)

    exibition_titles = driver.find_elements(by=By.CSS_SELECTOR, value=titles_selector)
    exibition_dates = driver.find_elements(by=By.CSS_SELECTOR, value=dates_selector)

    for title in exibition_titles[:7]:
        print(title.text)
        print("//")
    print("FILTER")
    for date in exibition_dates[:7]:
        print(date.text)
        print("//")
    print("FILTER")
    driver.close()
