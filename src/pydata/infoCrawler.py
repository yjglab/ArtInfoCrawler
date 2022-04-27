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

    if url == es_prado:
        exb_titles = exb_titles[:3]

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
    
    driver.close()


# /sites/default/files/styles/1_1_media_tiny/public/2022-03/Lilith_Kiki_Smith_1994_The_Met_Feminine_power_The_British_Museum_teaser_2.jpg?
# /sites/default/files/styles/1_1_media_tiny/public/2021-12/Nebra_Sky_Disc_teaser.jpg?
# /sites/default/files/styles/1_1_media_tiny/public/2022-03/Charmaine_Watkiss_Double_Consciousness_Be_Aware_of_One%E2%80%99s_Intentions.jpg?
# /sites/default/files/styles/1_1_media_tiny/public/2022-01/Raphael_Half-length_study_of_female_saint_British_Museum.jpg?