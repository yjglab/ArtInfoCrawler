import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://www.ngprague.cz/en/exhibitions-and-events'
exb_nums = 9
titles_selector = ".event-wall-item__title"
dates_selector = ".event-wall-item__meta > ul > li:first-child"
thumbnails_selector = ".event-wall-item__image-wrapper picture img"
details_links_selector = ".event-wall__item > a"
details_content_selector = ".page-content > div > div"
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