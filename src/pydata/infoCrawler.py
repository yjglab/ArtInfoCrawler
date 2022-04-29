import sys 
import io 
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

from selenium.webdriver.chrome.service import Service
from bs4 import BeautifulSoup
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding = 'utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(), encoding = 'utf-8')

uk_british = 'https://www.britishmuseum.org/exhibitions-events'
fr_pompidou = 'https://www.centrepompidou.fr/en/'
us_londonNatl = "https://www.nationalgallery.org.uk/exhibitions"
us_cincinnati = 'https://www.cincinnatiartmuseum.org/art/exhibitions/?gclid=Cj0KCQjw3v6SBhCsARIsACyrRAlU8C9ymrvNSV-ts7ZSz3C6QGU7ctlrzUOwSSRAMgeCD2Po5DSI7L0aAsxFEALw_wcB'
es_prado = 'https://www.pradomuseumtickets.com/prado-museum-exhibitions/'
at_wien = 'https://www.wienmuseum.at/en/exhibitions/current-exhibitions'
fr_orsay = 'https://www.musee-orsay.fr/fr'
fr_lodin = 'https://www.musee-rodin.fr/musee/expositions'

def print_msm_data(url, exb_nums, titles_selector, dates_selector, thumbnails_selector, details_links_selector, details_content_selector):
    options = webdriver.ChromeOptions()
    # options.add_argument("headless")
    driver = webdriver.Chrome('C:\JaeGyeong\codedriver\chromedriver', options=options)
    
    driver.implicitly_wait(10)
    driver.get(url)
    driver.set_window_position(0, 0)
    driver.set_window_size(3000, 1000)
    
    def load_data():
        exb_titles = driver.find_elements(by=By.CSS_SELECTOR, value=titles_selector)
        exb_dates = driver.find_elements(by=By.CSS_SELECTOR, value=dates_selector)
        exb_thumbnails = driver.find_elements(by=By.CSS_SELECTOR, value=thumbnails_selector)
        return exb_titles, exb_dates, exb_thumbnails

    exb_titles, exb_dates, exb_thumbnails = load_data()
    exb_details_links = driver.find_elements(by=By.CSS_SELECTOR, value=details_links_selector)
    exb_details = []

    if url == uk_british: 
        for i in range(exb_nums): # 타이틀수
            exb_details_links = driver.find_elements(by=By.CSS_SELECTOR, value=details_links_selector)
            
            driver.implicitly_wait(3)
            driver.get(exb_details_links[i].get_attribute("href"))
            if i <= 6 and i != 4: # 0 1 2 3 5 6
                detail = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, details_content_selector)))
            elif i == 4 or i >= 7:
                detail = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, ".section--intro__content h3")))
                
            exb_details.append(detail.text)
            driver.get(url) # back
        
        exb_titles, exb_dates, exb_thumbnails = load_data()
        exb_titles = exb_titles[:exb_nums]
        exb_dates = exb_dates[:exb_nums]
        exb_thumbnails = ["https://www.britishmuseum.org" + x.get_attribute("data-srcset").split("h=")[0] for x in exb_thumbnails]
        exb_thumbnails = exb_thumbnails[:exb_nums]

    elif url == us_cincinnati:
        exb_titles, exb_dates, exb_thumbnails = load_data()
        exb_thumbnails = [x.get_attribute("src") for x in exb_thumbnails]
        exb_thumbnails = exb_thumbnails[:exb_nums]
        exb_details = [x.text for x in exb_details_links]
    elif url == fr_pompidou:
        for i in range(exb_nums):
            exb_details_links = driver.find_elements(by=By.CSS_SELECTOR, value=details_links_selector)
                
            driver.implicitly_wait(3)
            driver.get(exb_details_links[i].get_attribute("href"))
            detail = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, details_content_selector)))
            exb_details.append(detail.text)
            driver.get(url) # back
        
        exb_titles, exb_dates, exb_thumbnails = load_data()
        exb_titles = exb_titles[:exb_nums]
        exb_dates = exb_dates[:exb_nums]
        exb_thumbnails = [x.get_attribute("src") for x in exb_thumbnails]
        exb_thumbnails = exb_thumbnails[:exb_nums]

    elif url == us_londonNatl:
        for i in range(exb_nums):
            exb_details_links = driver.find_elements(by=By.CSS_SELECTOR, value=details_links_selector)
                
            driver.implicitly_wait(3)
            driver.get(exb_details_links[i].get_attribute("href"))
            detail = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, details_content_selector)))
            exb_details.append(detail.text)
            driver.get(url) # back
            
        exb_titles, exb_dates, exb_thumbnails = load_data()
        exb_titles = exb_titles[:exb_nums]
        exb_dates = exb_dates[:exb_nums]
        exb_thumbnails = [x.get_attribute("style").strip("\"background-image: url(") for x in exb_thumbnails]
        exb_thumbnails = ["https://www.nationalgallery.org.uk/" + x[:x.find(".jpg?") + 4] for x in exb_thumbnails]
    elif url == at_wien:
        for i in range(exb_nums):
            exb_details_links = driver.find_elements(by=By.CSS_SELECTOR, value=details_links_selector)
                
            driver.implicitly_wait(3)
            driver.get(exb_details_links[i].get_attribute("href"))
            if i == 0:
                detail = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, details_content_selector)))
            else:
                detail = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, "#main p")))
            exb_details.append(detail.text)
            driver.get(url) # back
        
        exb_titles, exb_dates, exb_thumbnails = load_data()
        exb_titles = exb_titles[:exb_nums]
        exb_dates = exb_dates[:exb_nums]
        exb_thumbnails = [x.get_attribute("src") for x in exb_thumbnails]
        exb_thumbnails = exb_thumbnails[:2] # spinner.gif 나중에 처리하기 / 일단 2개만 출력
        
    elif url == es_prado:
        exb_details = [x.text for x in exb_details_links]
        exb_titles = exb_titles[:exb_nums]
        exb_thumbnails = [x.get_attribute("data-srcset") for x in exb_thumbnails]
        exb_thumbnails = exb_thumbnails[:exb_nums]
    
    elif url == fr_orsay:
        for i in range(exb_nums):
            exb_details_links = driver.find_elements(by=By.CSS_SELECTOR, value=details_links_selector)
                
            driver.implicitly_wait(3)
            driver.get(exb_details_links[i].get_attribute("href"))
            detail = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, details_content_selector)))
            exb_details.append(detail.text)
            driver.get(url) # back
        
        exb_titles, exb_dates, exb_thumbnails = load_data()
        exb_titles = exb_titles[:exb_nums]
        exb_dates = exb_dates[:exb_nums]
        exb_thumbnails = [x.get_attribute("src") for x in exb_thumbnails]
        exb_thumbnails = exb_thumbnails[:exb_nums]

    elif url == fr_lodin:
        for i in range(exb_nums):
            exb_details_links = driver.find_elements(by=By.CSS_SELECTOR, value=details_links_selector)
                
            driver.implicitly_wait(3)
            driver.get(exb_details_links[i].get_attribute("href"))
            detail = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, details_content_selector)))
            exb_details.append(detail.text)
            driver.get(url) # back

        exb_titles, exb_dates, exb_thumbnails = load_data()
        exb_titles = exb_titles[:exb_nums]
        exb_dates = exb_dates[:exb_nums]
        exb_thumbnails = [x.get_attribute("src") for x in exb_thumbnails]
        exb_thumbnails = exb_thumbnails[:exb_nums]
        
    for title in exb_titles:
        print("타이틀", title.text)
        print("SPLITER")
    print("FILTER")
    for date in exb_dates:
        print("데이트", date.text)
        print("SPLITER")
    print("FILTER")
    for thumbnail_src in exb_thumbnails:
        print(thumbnail_src)
        print("SPLITER")
    print("FILTER")
    for detail in exb_details:
        print("디테일", detail)
        print("SPLITER")
    print("FILTER")
        
    
    driver.close()

