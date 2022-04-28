import sys 
import io 
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

def print_msm_data(url, titles_selector, dates_selector, thumbnails_selector):
    options = webdriver.ChromeOptions()
    options.add_argument("headless")
    driver = webdriver.Chrome('C:\JaeGyeong\codedriver\chromedriver', options=options)
    driver.implicitly_wait(3)
    driver.get(url)
    driver.set_window_position(0, 0)
    driver.set_window_size(3000, 1000)

    exb_titles = driver.find_elements(by=By.CSS_SELECTOR, value=titles_selector)
    exb_dates = driver.find_elements(by=By.CSS_SELECTOR, value=dates_selector)
    exb_thumbnails = driver.find_elements(by=By.CSS_SELECTOR, value=thumbnails_selector)
    
    # a링크 배열로 가져오고 반복문, 링크 들어가서)click 정보빼오고 다시 나오고)back 1회 끝
    if url == uk_british: 
        exb_titles = exb_titles[:13]
        exb_thumbnails = ["https://www.britishmuseum.org" + x.get_attribute("data-srcset").split("h=")[0] for x in exb_thumbnails]
        exb_thumbnails = exb_thumbnails[:13]
    if url == us_cincinnati:
        exb_thumbnails = [x.get_attribute("src") for x in exb_thumbnails]
        exb_thumbnails = exb_thumbnails[:6]
    if url == fr_pompidou:
        exb_thumbnails = [x.get_attribute("src") for x in exb_thumbnails]
        # exb_thumbnails = exb_thumbnails[:]
    if url == us_londonNatl:
        exb_thumbnails = [x.get_attribute("style").strip("\"background-image: url(") for x in exb_thumbnails]
        exb_thumbnails = ["https://www.nationalgallery.org.uk/" + x[:x.find(".jpg?") + 4] for x in exb_thumbnails]
    if url == at_wien:
        exb_thumbnails = [x.get_attribute("src") for x in exb_thumbnails]
        exb_thumbnails = exb_thumbnails[:2] # spinner.gif 나중에 처리하기 / 일단 2개만 출력
        exb_titles, exb_dates = exb_titles[:2], exb_dates[:2]
    if url == es_prado:
        exb_titles = exb_titles[:3]
        exb_thumbnails = [x.get_attribute("data-srcset") for x in exb_thumbnails]
        exb_thumbnails = exb_thumbnails[3:6]

    exb_details = ["ready" for _ in range(len(exb_titles))]

    for title in exb_titles:
        print(title.text)
        print("SPLITER")
    print("FILTER")
    for date in exb_dates:
        print(date.text)
        print("SPLITER")
    print("FILTER")
    for thumbnail_src in exb_thumbnails:
        print(thumbnail_src)
        print("SPLITER")
    print("FILTER")
    for detail in exb_details:
        print(detail)
        print("SPLITER")
    print("FILTER")
        
    
    driver.close()


# /sites/default/files/styles/1_1_media_tiny/public/2022-03/Lilith_Kiki_Smith_1994_The_Met_Feminine_power_The_British_Museum_teaser_2.jpg?
# /sites/default/files/styles/1_1_media_tiny/public/2021-12/Nebra_Sky_Disc_teaser.jpg?
# /sites/default/files/styles/1_1_media_tiny/public/2022-03/Charmaine_Watkiss_Double_Consciousness_Be_Aware_of_One%E2%80%99s_Intentions.jpg?
# /sites/default/files/styles/1_1_media_tiny/public/2022-01/Raphael_Half-length_study_of_female_saint_British_Museum.jpg?