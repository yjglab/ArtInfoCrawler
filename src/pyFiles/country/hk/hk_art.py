import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://hk.art.museum/en_US/web/ma/exhibitions-and-events.html'
exb_nums = 1
titles_selector = ".event-item h3"
dates_selector = ".event-item .date"
thumbnails_selector = ".event-item a img"
details_links_selector = ".event-item a"
details_content_selector = ".content-block p:nth-of-type(1)"
category = "museum"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    category,
    )