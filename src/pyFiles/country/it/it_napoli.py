import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
import infoCrawler

url = 'https://mann-napoli.it/mostre-ed-eventi/incorso/'
exb_nums = 6
titles_selector = ".exposure-list-item .title"
dates_selector = ".exposure-list-item .date"
thumbnails_selector = ".exposure-list-item .img"
details_links_selector = ".exposure-list-item > a"
details_content_selector = ".exposure-description"

infoCrawler.print_msm_data(
    url, 
    exb_nums,
    titles_selector, 
    dates_selector, 
    thumbnails_selector, 
    details_links_selector,
    details_content_selector,
    )