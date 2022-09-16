import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.tretyakovgallery.ru/exhibitions/'
exb_nums = 3
titles_selector = ".event__title"
dates_selector = ".event__date"
thumbnails_selector = ".event__item > img"
details_links_selector = ".event__link"
details_content_selector = ".event-detail__anons"
category = "gallery"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,category
    )