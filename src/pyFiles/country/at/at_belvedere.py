import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.belvedere.at/ausstellungen-aktuell'
exb_nums = 11
titles_selector = ".link--full > span"
dates_selector = ".link--full > span"
thumbnails_selector = ".teaser__node__item__image-background"
details_links_selector = ".link--full"
details_content_selector = "#block-hauptseiteninhalt > article > div.grid-wrapper > div:nth-child(1) > div:nth-child(1) > div > p:nth-child(1)"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )