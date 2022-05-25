import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.tretyakovgallery.ru/exhibitions/'
exb_nums = 4
titles_selector = ".event__title"
dates_selector = ".event__date"
thumbnails_selector = ".event__item > img"
details_links_selector = ".event__title"
details_content_selector = ".event-detail__description-col > div > div:last-child"
category = "gallery"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )