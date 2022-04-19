from contextlib import ExitStack
import requests
import sys 
import io 
import time
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

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

    # exibition_titles = driver.find_elements(by=By.CSS_SELECTOR, value=titles_selector)
    # exibition_dates = driver.find_elements(by=By.CSS_SELECTOR, value=dates_selector)
    exibition_titles = WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, titles_selector)))
    exibition_dates = WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, dates_selector)))
    # exn_info = set_selector(driver, titles_selector, dates_selector).copy()
    
    if url == 'https://www.britishmuseum.org/exhibitions-events': 
        # british museum 정보 중 전시정보가 아닌 것은 제외함
        exibition_titles = exibition_titles[:13]
    if url == 'https://www.centrepompidou.fr/en/':
        # pompidou museum 모든 전시정보 가져오기 위해서 별도 처리
        # time.sleep(1)
        selector = driver.find_element(by=By.CSS_SELECTOR, value="#page-content > div > div.owl-carousel.cp-carousel.carousel-event-homepage.owl-theme.owl-loaded.owl-drag > div.owl-nav > button.owl-next")
        selector.click()
        titles_temp, dates_temp = [], []
        exibition_titles.extend(WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, titles_selector))))
        exibition_dates.extend(WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, dates_selector))))
        
        
        for title_webElement in exibition_titles:
            if title_webElement not in titles_temp:
                titles_temp.append(title_webElement)
        for date_webElement in exibition_dates:
            if date_webElement not in dates_temp:
                dates_temp.append(date_webElement)
        exibition_titles = titles_temp[:]
        exibition_dates = dates_temp[:]
        # re_titles = WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, titles_selector)))
        # re_dates = WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, dates_selector)))
        
        # exibition_titles.extend(re_titles)
        # exibition_dates.extend(re_dates)

        # titles_temp = []
        # dates_temp = []
        
        # for title in exibition_titles:
        #     if title not in titles_temp:
        #         titles_temp.append(title)

        # for date in exibition_dates:
        #     if date not in dates_temp:
        #         dates_temp.append(date)
        
        # exibition_titles = titles_temp[:]
        # exibition_dates = dates_temp[:]
    
    for title in exibition_titles:
        print(title.text)
        print("//")
    print("FILTER")
    for date in exibition_dates:
        print(date.text)
        print("//")
    print("FILTER")
    
    driver.close()
